const curryr = require('../curryr');
const each = require('../each');

function filter(collection, predicate) {
    const result = [];
    each(collection, (value) => {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
}

module.exports = curryr(filter);
