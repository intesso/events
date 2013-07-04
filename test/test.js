var isBrowser = (typeof window !== 'undefined');
var eventsPath = isBrowser ? 'events' : '../index.js';
var events = require(eventsPath);
if (!isBrowser) var expect = require('expect.js');

// utility functions

function unload(str) {
  var path = require.resolve(str);
  if (require.cache[path]) delete require.cache[path];
  expect(require.cache[path]).to.be(undefined);
  console.log("resolve", path);
}


// test functions
describe('events objects', function() {
  it('should export EventEmitter', function() {
    expect(events.EventEmitter).to.be.an(Object);
    expect(events).to.be.an(Object);
  })
})

describe('Events(obj)', function() {
  var obj;
  function Obj() {
    this.name = "Obj";

  }

  beforeEach(function() {
    events(Obj.prototype);
    obj = new Obj();
  })
  describe('.on(type, listener)', function() {
    it('should equal .on()', function() {
      expect(obj.addListener).to.be(obj.on)
    });
    it('should add a listener', function(done) {
      obj.addListener('foo', done);
      obj.emit('foo');
    });
    it('should add a listener', function(done) {
      obj.on('bar', done);
      obj.emit('bar');
    });    
  })
})

describe('new events.EventEmitter()', function() {
  var ee;
  beforeEach(function() {
    ee = new events.EventEmitter();
  })
  describe('.setMaxListeners(n)', function() {
    it('test', function() {
      console.log("ee", ee);
    });
    it('should do nothing', function() {
      expect(ee.setMaxListeners).to.not.throwException();
    });
  })
  describe('.addListener(type, listener)', function() {
    it('should equal .on()', function() {
      expect(ee.addListener).to.be(ee.on)
    });
    it('should add a listener', function(done) {
      ee.addListener('foo', done);
      ee.emit('foo');
    });
  })
  describe('.removeListener(type, listener)', function() {
    it('should equal .off()', function() {
      expect(ee.removeListener).to.be(ee.off);
    });
    it('should remove a listener', function() {
      var bad = function() {
        throw new Error("shouldn't be called");
      }
      ee.on('foo', bad);
      ee.removeListener('foo', bad);
      ee.emit('foo');
    });
  })
  describe('.removeAllListeners(type)', function() {
    it('should equal .off()', function() {
      expect(ee.removeAllListeners).not.to.be(undefined);
      expect(ee.off).not.to.be(undefined);
    });
    it('should remove all listeners', function() {
      var bad = function() {
        throw new Error("shouldn't be called");
      }
      ee.on('foo', bad);
      ee.on('foo', bad);
      ee.removeAllListeners('foo');
      ee.emit('foo');
    });
  })
})