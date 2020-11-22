const each = require('../each');

function map(collection, mapper) {
  const result = [];
  each(collection, (value) => result.push(mapper(value)));
  return result;
}

module.exports = map;
