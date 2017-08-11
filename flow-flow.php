<?php if ( ! defined( 'WPINC' ) ) die;
/**
 * @package   Flow_Flow
 * @author    Looks Awesome <hello@looks-awesome.com>

 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 *
 * @wordpress-plugin
 * Plugin Name:       Flow-Flow Lite
 * Plugin URI:        flow.looks-awesome.com
 * Description:       Awesome social streams on your site
 * Version:           2.0.1
 * Author:            Looks Awesome
 * Author URI:        looks-awesome.com
 * Text Domain:       flow-flow
 * Domain Path:       /languages
 */
if ( ! defined( 'FF_USE_WPDB' ) )  define( 'FF_USE_WPDB', false );
if ( ! defined( 'FF_USE_WP_CRON' ) ) define('FF_USE_WP_CRON', true);
if ( ! defined( 'FF_USE_DIRECT_WP_CRON' ) ) define('FF_USE_DIRECT_WP_CRON', false);
if ( ! defined( 'FF_FORCE_FIT_MEDIA' ) ) define('FF_FORCE_FIT_MEDIA', false);
//TODO add a slash to the end
if ( ! defined( 'FF_LOCALE'))  define('FF_LOCALE', get_locale());
{
	/** @var wpdb $wpdb */
	$wpdb = $GLOBALS['wpdb'];
	define('FF_TABLE_PREFIX', $wpdb->base_prefix);
}
define('FF_SNAPSHOTS_TABLE_NAME', FF_TABLE_PREFIX . 'ff_snapshots');


function ff_debug_to_console($data) {
    if(is_array($data) || is_object($data))
        echo("<script>console.log('PHP: ".json_encode($data)."');</script>");
    else
        echo("<script>console.log('PHP: ".$data."');</script>");
}

if (! defined('FF_DB_CHARSET')) {
    $charset = defined( 'DB_CHARSET' ) ? DB_CHARSET : 'utf8';
    define('FF_DB_CHARSET', $charset);
}

if (!function_exists('var_dump2str')) {
    function var_dump2str($object){
        ob_start();
        var_dump($object);
        $output = ob_get_contents();
        ob_get_clean();
        return $output;
    }
}

if (!class_exists('LAClassLoader')){
    require_once( plugin_dir_path( __FILE__ ) . 'LAClassLoader.php' );
    LAClassLoader::get(plugin_dir_path( __FILE__ ))->register();
}

function ff_get_context() {
	$context = array(
		'root'              => plugin_dir_path( __FILE__ ),
		'slug'              => 'flow-flow',
		'slug_down'         => 'flow_flow',
		'plugin_dir_name'	=> 'flow-flow-social-streams',
		'plugin_url'        => plugin_dir_url(dirname(__FILE__).'/'),
		'admin_url'         => admin_url('admin-ajax.php'),
		'table_name_prefix' => FF_TABLE_PREFIX . 'ff_',
		'facebook_сache'    => new flow\cache\FFFacebookCacheAdapter()
	);
	$context['db_manager'] = new flow\db\FFDBManager($context);

	global $flow_flow_context;
	$flow_flow_context = $context;
	return $context;
}
register_activation_hook( __FILE__, array( 'flow\\FlowFlow', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'flow\\FlowFlow', 'deactivate' ) );

function ff_plugins_loaded () {
	$context = ff_get_context();

    if (! defined('FF_AJAX_URL')) {
        $admin = function_exists('current_user_can') && current_user_can('manage_options');
        if (!$admin && defined('FF_ALTERNATE_GET_DATA') && FF_ALTERNATE_GET_DATA)
            define('FF_AJAX_URL', plugins_url( 'ff.php', __FILE__ ));
        else
            define('FF_AJAX_URL', admin_url('admin-ajax.php'));
    }

	$ff = flow\FlowFlow::get_instance($context);

	if (FF_USE_WP_CRON){
		function ff_custom_cron_intervals_register($intervals){
			$intervals['minute'] = array(
				'interval' => MINUTE_IN_SECONDS,
				'display' => 'Once Minute'
			);
			$intervals['sex_hours'] = array(
				'interval' => MINUTE_IN_SECONDS * 60 * 6,
				'display' => 'Sex hours'
			);
			return $intervals;
		}
		add_filter('cron_schedules', 'ff_custom_cron_intervals_register');

		add_action('flow_flow_load_cache', array($ff, 'refreshCache'));
		$timestamp = wp_next_scheduled(  'flow_flow_load_cache' );
		if( $timestamp == false ){
			wp_schedule_event( time(), 'minute', 'flow_flow_load_cache' );
		}

		add_action('flow_flow_load_cache_4disabled', array($ff, 'refreshCache4Disabled'));
		$timestamp = wp_next_scheduled(  'flow_flow_load_cache_4disabled' );
		if( $timestamp == false ){
			wp_schedule_event( time(), 'sex_hours', 'flow_flow_load_cache_4disabled' );
		}
	}
	if (defined('DOING_AJAX') && DOING_AJAX){
		add_action('wp_ajax_fetch_posts', array( $ff, 'processAjaxRequest'));
		add_action('wp_ajax_nopriv_fetch_posts', array( $ff, 'processAjaxRequest'));
		add_action('wp_ajax_load_cache', array( $ff, 'processAjaxRequestBackground'));
		add_action('wp_ajax_nopriv_load_cache', array( $ff, 'processAjaxRequestBackground'));

		/** @var \flow\db\FFDBManager $dbm */
		$dbm = $context['db_manager'];
		add_action( 'wp_ajax_' . $context['slug_down'] . '_save_sources_settings', array( $dbm, 'save_sources_settings' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_get_stream_settings',   array( $dbm, 'get_stream_settings' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_ff_save_settings',      array( $dbm, 'ff_save_settings_fn' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_save_stream_settings',  array( $dbm, 'save_stream_settings' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_create_stream',         array( $dbm, 'create_stream' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_clone_stream',          array( $dbm, 'clone_stream' ) );
		add_action( 'wp_ajax_' . $context['slug_down'] . '_delete_stream',         array( $dbm, 'delete_stream' ) );

		if (!FF_USE_WP_CRON){
			add_action('wp_ajax_' . $context['slug_down'] . '_refresh_cache', array($ff, 'refreshCache'));
			add_action('wp_ajax_nopriv_' . $context['slug_down'] . '_refresh_cache', array($ff, 'refreshCache'));
		}
	}
	else {
		if (is_admin()){
			flow\FlowFlowAdmin::get_instance($context);
		}
		else {
			add_action( 'init', array($ff, 'register_shortcodes'));
			add_action( 'init', array($ff, 'load_plugin_textdomain'));
			add_action( 'wp_enqueue_scripts',   array( $ff, 'enqueue_scripts' ) );
			add_action( 'wpmu_new_blog',        array( $ff, 'activate_new_site' ) );
		}
	}
}
add_action( 'plugins_loaded', 'ff_plugins_loaded');
