// What is NodeJS?
// NodeJs is an open source, cross platform JavaScript runtime enviornment that executes JavaScript code outside of a browser.

// In node we dont't have 'window' object rather we have 'global' object.

// Like in browser javascript variables and functions declare with var are added to window object, but in case of node variables and functions declare with var keyword does not added to global object because node use module system.

// Every file in node application is called a module and variables and functions define in that file is only scoped to only that file, if we want to use variables and functions outside the file we need to exports it.

const logger = require('./logger'); // require() return a exports.

console.log(module); // Module is an object that contains bunch of properties including a exports.
logger('This is message');
