## Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates **in-place** such that each element appears only once and **returns the new length**.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place with O(1)** extra memory.

**Example 1:**

```
/**
* Explanation: Your function should return length = 2, 
* with the first two elements of nums being 1 and 2 respectively. 
* It doesn't matter what you leave beyond the returned length.
*/

Input: nums = [1,1,2]
Output: 2, nums = [1,2]
```

**Example 2:**

```
/**
* Explanation: Your function should return length = 5, 
* with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. 
* It doesn't matter what values are set beyond the returned length.
*/

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]

```

**Constraints:**
- 0 <= nums.length <= 3 * 104
- -104 <= nums[i] <= 104
- nums is sorted in ascending order.

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:
```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);
```
```
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Solution Notes

Clarification of the problem states that:

``` 
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.

for (int i = 0; i < len; i++) {
  print(nums[i]);
}
```

This means that the caller is only interested in the first n elements of the array where n is equal to the number of unique elements. 
So, it is expected to move the unique elements at the front of the array given.

Alternative approach would be removing items using Array.prototype.splice() method which operates in-place:
``` 
export default function removeDuplicates(nums) {
  if (nums.length == 0) return 0;

  let i = 0
  while(i < nums.length) {
    if(nums[i] === nums[i + 1]) {
      nums.splice(i, 1) // remove the dublicate, also moves i one spot
    } else {
      i++
    }
  }

  return nums.length;
}
```

This results in the same runtime on Leetcode with the solution provided upon submission. However, we can safely 
say that splice() method increases the time complexity of this approach.