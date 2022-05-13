import {insertionSort} from '../insertion-sort'

test("InsertionSort", () => {
    let nums = [1]
    let exp = [1]
    insertionSort(nums)

    expect(nums).toEqual(exp)

    nums = [5, 2, 4, 6, 1, 3]
    exp = [1, 2, 3, 4, 5, 6]
    insertionSort(nums)

    expect(nums).toEqual(exp)

    nums = [31, 41, 59, 26, 41, 58]
    exp = [26, 31, 41, 41, 58, 59]
    insertionSort(nums)

    expect(nums).toEqual(exp)
})
