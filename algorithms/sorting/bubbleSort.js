/*
Bubble Sort works by repeatedly swapping adjacent elements 
that are out of order.
*/

/**
 * Sorts the given array in-place in ascending order
 *
 * @param nums - Array of integers
 * @returns undefined
 */
export const bubbleSort = (nums) => {
  let swapped;
  let iterations = 0;

  do {
    swapped = false;
    for (let i = 1; i < nums.length - iterations; i++) {
      const l = nums[i - 1],
        r = nums[i];

      if (l > r) {
        [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]]; // swap elements
        swapped = true;
      }
    }
    iterations++;
  } while (swapped);
};
