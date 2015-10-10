/**
 * node validator example
 * @type {[type]}
 */
var validator = require('./lib');
// isEmail
console.log(validator.isEmail('test@gmail.com'));
// is mobile
console.log(validator.isMobile(15867152502));
// is all english
console.log(validator.isAllEnglish('hello'));

// is all chinese
console.log(validator.isAllChinese('你们好'));
