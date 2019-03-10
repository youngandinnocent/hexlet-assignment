/*
 Task: Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки.
 Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
*/

// Solution:


//V1.1 use the division operator
const isPowerOfThree = (number) => {
  if (number < 1) {
    return false;
  }
  for (let i = number; i > 1; i /= 3) {
    if (i % 3 !== 0) {
      return false;
    }
  }
  return true;
};

export default isPowerOfThree;

isPowerOfThree(108); //false



//V1.2 use the multiplication operator

const isPowerOfThree = (number) => {
  let i = 1;
  while (i < number) {
    i *= 3;
  }
  return i === number;
};

isPowerOfThree(81); //true
