/*
 Task: Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
 Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
 Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/

// Solution:

const isPerfect = (number) => {
  let result = 0;
  let i = 1;
  while (i <= (number / 2)) {
    if (number % i === 0) {
      result += i;
    }
    i += 1;
  }
  return (result === number ? true : false);
};

isPerfect(8128);//true