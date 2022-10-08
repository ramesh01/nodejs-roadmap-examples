/**
 * Calling require() always use the CommonJS module loader. 
 * Calling import() always use the ECMAScript module loader.
 * 
 * By default, Node.js will treat the following as CommonJS modules:
 * .js, .cjs 
 * Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs".
 */

const Square = require('./Square.js');

const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.getArea()}`);

