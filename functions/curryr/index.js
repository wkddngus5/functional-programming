function curryr(fn) {
  return (first, ...args) => args.length ? fn(first, ...args) : (innerFirst, ...args2) => fn(innerFirst, first, ...args2);
}

module.exports = curryr;
