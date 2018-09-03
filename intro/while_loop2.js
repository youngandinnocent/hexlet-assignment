/*
 Task:
 Реализуйте и экспортируйте по умолчанию функцию isPrime определяющую, является ли число простым.
 Простое число — натуральное (целое положительное) число (больше единицы), имеющее ровно два различных
 натуральных делителя — единицу и самого себя.
*/

// Solution:

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let div = 2;
  while (div <= num / 2) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }
  return true;
};

export default isPrime;