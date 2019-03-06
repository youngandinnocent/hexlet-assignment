/*
 Task: Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
 Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
 Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/

// Solution:

const isPerfect = (number) => {
  if (number < 1) {
    return false;
  }
  let result = 0;

  for (let div = 1; div <= number / 2; div += 1) {
    if (number % div === 0) {
      result += div;
    }
  }
  return result === number;
};

export default isPerfect;

isPerfect(8128);//true