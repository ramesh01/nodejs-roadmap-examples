const crypto = require("crypto");
const argv = require('yargs').argv;

// random tokens
const hexValue = crypto.randomBytes(20).toString('hex');
const base64Value = crypto.randomBytes(20).toString('base64');
console.log('base64 token: ',base64Value);

// a hashed message authentication checksum (HMAC) using a shared secret key
let string = 'My coffee please';
let key = 'Right away sir';

var encrypted = crypto.createHmac('sha1', key).update(string).digest('hex');
console.log('Encrypting "%s" using passphrase "%s": %s', string, key, encrypted);