import { factorial } from './factorial';

test('Factorial', () => {
  let n = 0;

  expect(factorial(n)).toBe(1);

  n = 1;

  expect(factorial(n)).toBe(1);

  n = 6;

  expect(factorial(n)).toBe(720);
});
