const pipe = require('../pipe');

function go(collection, ...fns) {
  return pipe(...fns)(collection);
}

module.exports = go;
