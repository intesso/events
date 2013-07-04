# events

Node's events module in the browser.

This is a wrapper around [component/emitter](https://github.com/component/emitter) that is api-compatible with node's events module.
It also is a fork of [juliangruber/events](https://github.com/juliangruber/events) that adds uses node.js events when running on the server.

[Events Node.js v0.8.11 Manual & Documentation](http://nodejs.org/api/events.html)

## Installation

Install with [component(1)](https://github.com/component/component)

```bash
$ component install intesso/events
```

## Usage example

node.js events api:

```javascript
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on('foo', function(data) {
  console.log('foo received', data);
})

ee.emit('foo', 'bar');
// -> 'foo received bar'
```

Another example with the component-emitter api:
```javascript
function Obj() {
  this.name = "Obj";
}

var Events = require('events');
Events(Obj.prototype);

obj = new Obj();

obj.addListener('foo', function(data) {
  console.log('foo received', data);
})

obj.emit('foo', 'bar');
// -> 'foo received bar'
```

## License

(MIT)
