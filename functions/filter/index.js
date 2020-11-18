function filter(collection, predicate) {
    const result = [];
    for (const value of collection) {
      if (predicate(value)) {
        result.push(value);
      }
    }
    return result;
}

module.exports = filter;
