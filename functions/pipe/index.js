const reduce = require('../reduce');

function pipe(...fns) {
  return (collection) => reduce(fns, (prevResult, fn) => fn(prevResult), collection);
}

module.exports = pipe;
