<?php namespace flow;
use flow\cache\LAFacebookCacheManager;
use flow\tabs\FFAuthTab;
use flow\tabs\FFSourcesTab;
use flow\tabs\FFStreamsTab;
use flow\tabs\LAGeneralTab;

if ( ! defined( 'WPINC' ) ) die;
/**
 * Flow-Flow.
 *
 * Plugin class. This class should ideally be used to work with the
 * administrative side of the WordPress site.
 *
 * If you're interested in introducing public-facing
 * functionality, then refer to `FlowFlow.php`
 *
 * @package   FlowFlowAdmin
 * @author    Looks Awesome <email@looks-awesome.com>
 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 */
class FlowFlowAdmin extends LAAdminBase{
	protected static $instance = null;

	public static function get_instance($context) {
		if ( null == self::$instance ) {
			self::$instance = new self($context);
		}
		return self::$instance;
	}

	protected function __construct($context) {
		parent::__construct($context);
	}

	protected function initPluginAdminPage(){
		$this->db->migrate();
	}

	protected function addPluginAdminMenu($displayAdminPageFunction) {
		return add_menu_page(
			'Flow-Flow — Social Stream',
			'Flow-Flow Lite',
			'manage_options',
			$this->getPluginSlug(),
			$displayAdminPageFunction,
			'none'
		);
	}

	protected function enqueueAdminStylesAlways($plugin_directory){
		wp_enqueue_style($this->getPluginSlug() .'-admin-icon-styles', $plugin_directory . 'css/admin-icon.css', array(), FlowFlow::VERSION );
	}

	protected function enqueueAdminStylesOnlyAtPluginPage($plugin_directory){
		wp_enqueue_style($this->getPluginSlug() .'-admin-styles', $plugin_directory . 'css/admin.css', array(), FlowFlow::VERSION );
		wp_enqueue_style($this->getPluginSlug() .'-colorpickersliders', $plugin_directory . 'css/jquery-colorpickersliders.css', array(), FlowFlow::VERSION);

		// Load web font
		wp_register_style('ff-fonts', '//fonts.googleapis.com/css?family=Lato:300,400;Montserrat:400,700' );
		wp_enqueue_style( 'ff-fonts' );
	}

	protected function enqueueAdminScriptsAlways($plugin_directory){
	}

	protected function enqueueAdminScriptsOnlyAtPluginPage($plugin_directory){
		parent::enqueueAdminScriptsOnlyAtPluginPage($plugin_directory);
		wp_enqueue_script( $this->getPluginSlug() . '-streams-script', $plugin_directory . 'js/streams.js', array( 'jquery' ), FlowFlow::VERSION );
		wp_enqueue_script( $this->getPluginSlug() . '-admin-script', $plugin_directory . 'js/admin.js', array( 'jquery', 'backbone', 'underscore' ), FlowFlow::VERSION );
		wp_localize_script($this->getPluginSlug() . '-admin-script', 'WP_FF_admin', array());
		wp_localize_script($this->getPluginSlug() . '-admin-script', 'isWordpress', (string)true);
		wp_localize_script($this->getPluginSlug() . '-admin-script', '_ajaxurl', (string)FF_AJAX_URL);
		wp_enqueue_script( $this->getPluginSlug() . '-zeroclipboard', $plugin_directory . 'js/zeroclipboard/ZeroClipboard.min.js', array( 'jquery' ), FlowFlow::VERSION );
		wp_enqueue_script( $this->getPluginSlug() . '-tinycolor', $plugin_directory . 'js/tinycolor.js', array( 'jquery' ), FlowFlow::VERSION );
		wp_enqueue_script( $this->getPluginSlug() . '-colorpickersliders', $plugin_directory . 'js/jquery.colorpickersliders.js', array( 'jquery' ), FlowFlow::VERSION );
	}


	protected function displayPluginAdminPage($context) {
		/** @var LAFacebookCacheManager $facebookCache */
		$facebookCache = $context['facebook_сache'];

		$context['version'] = FlowFlow::VERSION;
		$context['options'] = FlowFlow::get_instance($context)->get_options();
		$context['auth_options'] = FlowFlow::get_instance($context)->get_auth_options();
		$context['extended_facebook_access_token'] = $facebookCache->getAccessToken();
		$context['extended_facebook_access_token_error'] = $facebookCache->getError();
		$this->db->dataInit();
		$context['streams'] = $this->db->streamsWithStatus();
		$context['sources'] = $this->db->sources();

		$context['form-action'] = '';
		$context['tabs'][] = new FFStreamsTab();
		$context['tabs'][] = new FFSourcesTab();
		$context['tabs'][] = new LAGeneralTab();
		$context['tabs'][] = new FFAuthTab();

		$context['buttons-after-tabs'] = '<li id="request-tab"><span>Save changes</span> <i class="flaticon-paperplane"></i></li>';
		include_once($context['root']  . 'views/admin.php');
	}

	protected function addActionLinks() {
		$links['settings'] = '<a href="' . admin_url('admin.php?page=' . $this->getPluginSlug()) . '">' . 'Settings' . '</a>';
		$links['docs'] = '<a target="_blank" href="http://social-streams.com/docs/">' . 'Documentation' . '</a>';
		$links['upgrade'] = '<a class="ff-upgrade-link" target="_blank" href="http://goo.gl/g7XQzu">' . 'Upgrade to PRO' . '</a>';
		return $links;
	}
}
