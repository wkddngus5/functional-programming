const isObject = require('../isObject');

function keys(object) {
  return isObject(object) ? Object.keys(object) : []; 
}

module.exports = keys;
