/*
 * INSERTION_SORT(A)
 * for i = 0 to n - 1
 *   key = A[i]
 *   // Insert A[i] into the sorted subarray A[1 : i – 1].
 *   j = i - 1
 *   while j >= 0 and A[j] > key
 *     A[j + 1] = A[j]
 *     j = j - 1
 *   A[j + 1] = key
 *
*/

/**
 * Sorts the given array in-place in ascending order
 *
 * @param nums - Array of integers
 * @returns undefined
 */
export const insertionSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = key
    }
}