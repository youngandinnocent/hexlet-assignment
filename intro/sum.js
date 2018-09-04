/*
 Task:
 Реализуйте и экспортируйте функцию по умолчанию, которая считает сумму всех натуральных чисел, меньших чем n (первый аргумент),
 которые делятся на числа a или b (второй и третий аргументы) без остатка. n - может быть только натуральным числом.
*/

// Solution:

//V1.1
const sum = (n, a, b) => {
  let result = 0;
  for (let i = 1; i < n; i += 1) {
    result += ((i % a) === 0 || (i % b) === 0) ? i : 0;
  }
  return result;
};
export default sum;

//V1.2
const sum = (n, a, b) => {
  let result = 0;
  for (let i = 1; i < n; i += 1) {
    if ((i % a) === 0 || (i % b) === 0) {
      result += i;
    }
  }
  return result;
};
export default sum;