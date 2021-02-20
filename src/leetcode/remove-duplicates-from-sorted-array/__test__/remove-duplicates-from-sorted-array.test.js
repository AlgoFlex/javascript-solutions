import removeDuplicates from '../remove-duplicates-from-sorted-array';

describe('Remove dublicates from a sorted array in-place', () => {
  it('should remove dublicates and return the length of resulting array', () => {
    expect(removeDuplicates([])).toEqual(0);
    expect(removeDuplicates([1])).toEqual(1);
    expect(removeDuplicates([1, 1, 1])).toEqual(1);
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
    expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual(5);
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
  });
});
