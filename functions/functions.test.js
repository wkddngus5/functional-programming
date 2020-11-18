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
  expect(map(usersMock, ({ id }) => id)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('filter', () => {
  expect(filter(usersMock, ({ age }) => age > 20).length).toBe(4);
});

test('filter and map', () => {
  function solution(collection) {
    return map(
      filter(collection, ({age}) => age < 30),
      ({ id }) => id,
    );
  }

  expect(solution(usersMock)).toStrictEqual([1, 2, 3, 4, 6]);
});