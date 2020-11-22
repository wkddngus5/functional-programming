const keys  = require('../keys');

function each(collection, iteratee) {
  const collectionKeys = keys(collection);
  for (const key of collectionKeys) {
    iteratee(collection[key]);
  }
}

module.exports = each;
