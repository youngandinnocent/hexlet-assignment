/*
 Task:
 Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
 Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
 Количество итераций процесса поиска необходимо ограничить числом 10.
*/

// Solution:

const square = n => n * n;

const sumOfSquareDigits = (num) => {
  const numToString = String(num);
  let result = 0;
  for (let i = 0; i < numToString.length; i += 1) {
    result += square(Number(numToString[i]));
  }
  return result;
};

const isHappyNumber = (number) => {
  let happyNumber = number;
  let i = 0;
  while (i < 10) {
    happyNumber = sumOfSquareDigits(happyNumber);
    i += 1;
    if (happyNumber === 1) {
      return true;
    }
  }
  return false;
};

isHappyNumber(19); //true