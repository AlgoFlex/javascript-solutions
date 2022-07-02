export const nestedSum = (arr) => {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += nestedSum(item);
    } else {
      sum += item;
    }
  }

  return sum;
};
