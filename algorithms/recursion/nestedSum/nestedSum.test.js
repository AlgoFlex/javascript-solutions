import { nestedSum } from './nestedSum';

test('Nested Sum', () => {
  expect(nestedSum([1, 2, 3])).toEqual(6);
  expect(nestedSum([1, [2], 3])).toEqual(6);
  expect(nestedSum([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedSum([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
