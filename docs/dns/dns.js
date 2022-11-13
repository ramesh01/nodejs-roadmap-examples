/**
 * The node:dns module enables name resolution. 
 * For example, use it to look up IP addresses of host names.
 */

const dns = require('node:dns');

dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});