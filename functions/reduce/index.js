const each = require('../each');
const rest = require('../rest');

function reduce(collection, iteratee, accumulator) {
  let iterable = collection;
  let result = accumulator;
  
  if (arguments.length == 2) {
    result = collection[0];
    iterable = rest(collection);
  }
  
  each(iterable, (value) => {
    result = iteratee(result, value);
  });
  return result;
}

module.exports = reduce;
