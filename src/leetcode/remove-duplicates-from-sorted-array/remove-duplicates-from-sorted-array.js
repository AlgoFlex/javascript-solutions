/**
 * 
 * @param nums sorted array of integers
 * @returns Number the length of resulting array
 */

// Leetcode submission results
// Time: beats 91.98 % of javascript submissions.
// Space: beats 79.95 % of javascript submissions.
export default function removeDuplicates(nums) {
  if (nums.length == 0) return 0;

  // Two pointer technique
  let i = 0
  let j = 1
  
  while(j < nums.length) {
    if(nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j]; // This will move all the unique elements to the front
    }
    j++;
  }

  return i + 1;
}