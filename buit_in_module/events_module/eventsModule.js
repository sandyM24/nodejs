const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('scream', () => {
  console.log('I heared a scream');
});

emitter.emit('scream');

// In real world application we never use events like this, instead we create a class and instantiate it with EventEmitter class.
