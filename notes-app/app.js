const getNotes = require('./notes')
const validator = require('validator')

const msg = getNotes();

console.log(msg);
console.log(validator.isEmail('shobhitgmail.com'))

