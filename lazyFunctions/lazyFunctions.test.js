const map = require('./map');
const filter = require('./filter');

const usersMock = [
  { id: 1, name: 'user1', age: 11 },
  { id: 2, name: 'user2', age: 21 },
  { id: 3, name: 'user3', age: 23 },
  { id: 4, name: 'user4', age: 11 },
  { id: 5, name: 'user5', age: 37 },
  { id: 6, name: 'user6', age: 23 },
];

test('map', () => {
  let called = 0;
  const squared = map([1, 2, 3, 4, 5], (value) => {
    called++;
    return value * value;
  });
  expect(squared.next().value).toBe(1);
  expect(squared.next().value).toBe(4);
  expect(called).toBe(2);
});

test('filter', () => {
  let called = 0;
  const squared = filter([1, 2, 3, 4, 5], (value) => {
    called++;
    return value % 2;
  });
  expect(squared.next().value).toBe(1);
  expect(squared.next().value).toBe(3);
  expect(called).toBe(3);
});


