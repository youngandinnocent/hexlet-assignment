/*
 Task:
 Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц,
 и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.
 Например, определим все способы размещения двух нулей и двух единиц.
 Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100.
 В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100.
 Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.
*/

// Solution:

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const withoutTwoZeros = (zero, one) => { // use the binomial coefficient
  const numerator = factorial(one + 1);
  const denominator = (factorial(one - (zero - 1)) * factorial(zero));
  const result = numerator / denominator;
  return result;
}

withoutTwoZeros(7, 7);// 8