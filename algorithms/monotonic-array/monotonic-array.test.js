import { monotonicArray } from "./monotonic-array";

test("Monotonic Array", () => {
  let nums = []
  let exp = true;

  expect(monotonicArray(nums)).toBe(exp);

  nums = [1];
  exp = true;

  expect(monotonicArray(nums)).toBe(exp);

  nums = [1, 2, 2, 3];
  exp = true;

  expect(monotonicArray(nums)).toBe(exp);

  nums = [6, 5, 4, 4];
  exp = true;

  expect(monotonicArray(nums)).toBe(exp);

  nums = [1, 3, 2];
  exp = false;

  expect(monotonicArray(nums)).toBe(exp);
});
