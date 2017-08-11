<?php namespace flow\cache;
if ( ! defined( 'WPINC' ) ) die;

/**
 * Flow-Flow.
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>

 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 */
class FFFacebookCacheAdapter implements LAFacebookCacheManager{
	/** @var $manager LAFacebookCacheManager */
	private $manager = null;

	public function clean() {
		$this->get()->clean();
	}

	public function getAccessToken() {
		return $this->get()->getAccessToken();
	}

	public function getError() {
		return $this->get()->getError();
	}

	public function save( $token, $expires ) {
		$this->get()->save( $token, $expires );
	}

	/**
	 * @return LAFacebookCacheManager
	 */
	private function get(){
		if ($this->manager == null){
			global $flow_flow_context;
			$this->manager = new FFFacebookCacheManager($flow_flow_context);
		}
		return $this->manager;
	}
}