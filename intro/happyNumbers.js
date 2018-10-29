/*
 Task:
 Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
 Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
 Количество итераций процесса поиска необходимо ограничить числом 10.
*/

// Solution:

const length = str => str.length;

const squar = n => n * n;

const sumOfSquareDigits = (str) => {
  let result = 0;
  for (let i = 0; length(str) > i; i += 1) {
    result += squar(Number(str[i]));
  }
  return result;
};

const happyNumbers = (number) => {
  if (number < 1) {
    return false;
  }
  let result = number;
  let i = 0;
  while (result > 0) {
    result = sumOfSquareDigits(String(result));
    i += 1;
    if (i > 10) {
      return false;
    } else if (result === 1) {
      return true;
    }
  }
  return false;
};

happyNumbers(2); // false