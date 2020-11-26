function curry(fn) {
  return (first, ...args) => args.length ? fn(first, ...args) : (...args2) => fn(first, ...args2);
}

module.exports = curry;
