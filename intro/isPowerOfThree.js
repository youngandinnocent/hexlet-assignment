/*
 Task: Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки.
 Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
*/

// Solution:

export default (number) => {
  if (number === 1) {
    return true;
  } else if (number < 3) {
    return false;
  }
  let result = number;
  while (result > 3) {
    result = result / 3;
    if (result % 3 !== 0) {
      return false;
    }
  }
  return true;
};

isPowerOfThree(108); // false