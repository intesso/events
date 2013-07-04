if ('undefined' == typeof window) {

  var EventEmitter = require('events').EventEmitter;
  var Merged = Emitter;
  Merged.EventEmitter = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
		obj = obj || {};
	  return mixin(obj);
	};

  // alias all the things!
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;	

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in EventEmitter.prototype) {
	    obj[key] = EventEmitter.prototype[key];
	  }
	  return obj;
	}

  module.exports = Merged;

} else {

  var Emitter = require('emitter');
  
  // alias all the things!
  Emitter.prototype.addListener = Emitter.prototype.on;
  Emitter.prototype.removeListener = Emitter.prototype.off;
  Emitter.prototype.removeAllListeners = Emitter.prototype.off;
  
  Emitter.prototype.setMaxListeners = function(){ /* noop */ };

  var Merged = Emitter;
  Merged.EventEmitter = Emitter;

  module.exports = Merged;
}


