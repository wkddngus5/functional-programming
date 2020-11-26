const map = require('./map');
const filter = require('./filter');
const keys = require('./keys');
const reduce = require('./reduce');

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
  expect(map(null, ({ id }) => id)).toStrictEqual([]);
  expect(map({}, ({ id }) => id)).toStrictEqual([]);
});

test('filter', () => {
  expect(filter(usersMock, ({ age }) => age > 20).length).toBe(4);
  expect(filter(null, ({ age }) => age > 20).length).toBe(0);
  expect(filter({}, ({ age }) => age > 20).length).toBe(0);
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

test('keys', () => {
  expect(keys([0, 1, 2, 3, 4, 5])).toStrictEqual(['0', '1', '2', '3', '4', '5']);
  expect(keys({ a: 'aaa', b: 'bbb', c: 'ccc' })).toStrictEqual(['a', 'b', 'c']);
  expect(keys(null)).toStrictEqual([]);
});

test('reduce', () => {
  expect(reduce(usersMock, (sum, user) => sum + user.age, 0)).toBe(126);
  expect(reduce([1, 2, 3, 4], (sum, value) => sum + value)).toBe(10);
});
