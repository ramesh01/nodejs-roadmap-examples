const logEvents = require("./docs/EventEmitter/eventEmitter");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(()=> {
    // emit event
    myEmitter.emit('log', 'log event emitted')
}, 2000);
