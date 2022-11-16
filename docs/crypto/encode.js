const crypto = require('crypto');
const argv = require('yargs').argv;
const resizedIV = Buffer.allocUnsafe(16);
const iv = crypto.createHash('sha256').update('myHashedIV').digest();

iv.copy(resizedIV);

console.log('encoding.. %s and key %s', argv.e, argv.key);
if (argv.e && argv.key) {
    const key = crypto.createHash('sha256').update(argv.key).digest();
    const cipher = crypto.createCipheriv('aes256', key, resizedIV);
    const msg = [];

    argv._.forEach(function (phrase) {
        msg.push(cipher.update(phrase, 'binary', 'hex'));
    });

    msg.push(cipher.final('hex'));
    console.log(msg.join(''));
} else if (argv.d && argv.key) {
    const key = crypto.createHash('sha256').update(argv.key).digest();
    const decipher = crypto.createDecipheriv('aes256', key, resizedIV);
    const msg = [];

    argv._.forEach(function (phrase) {
        msg.push(decipher.update(phrase, 'hex', 'binary'));
    });

    msg.push(decipher.final('binary'));
    console.log(msg.join(''));
}