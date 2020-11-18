function map(collection, iteratee) {
  const result = [];
  for (const value of collection) {
    result.push(iteratee(value));
  }
  return result;
}

module.exports = map;
