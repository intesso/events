if ('undefined' == typeof window) {
  module.exports = require('events');
} else {
  var Emitter = require('emitter');
  
  // alias all the things!
  Emitter.prototype.addListener = Emitter.prototype.on;
  Emitter.prototype.removeListener = Emitter.prototype.off;
  Emitter.prototype.removeAllListeners = Emitter.prototype.off;
  
  Emitter.prototype.setMaxListeners = function(){ /* noop */ };
  
  module.exports.EventEmitter = Emitter;
}


