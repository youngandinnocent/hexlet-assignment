/*
 Task: Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.
 Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
 Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
 Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

// Solution:

const square = (n) => n * n;

const recurtion = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + recurtion(n - 1);
};

const squareOfSum = (n) => square(recurtion(n));

const sumOfSquare = (n) => {
  let i = n;
  let result = 0;
  while (i > 0) {
    result += square(i);
    i -= 1;
  }
  return result;
};

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquare(n);

sumSquareDifference(10); //2640