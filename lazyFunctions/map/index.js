function *map(collection, mapper) {
  for (const value of collection) {
    yield mapper(value);
  }
}

module.exports = map;
