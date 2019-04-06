/* Task: Рациональное число — число, представляемое обыкновенной дробью m/n, числитель m — целое число,
    а знаменатель n — натуральное число. Пример рационального числа: 2/3.

    Реализуйте абстракцию для работы с рациональными числами, используя пары:
    1. Конструктор make(numer, denom).
    2. Селекторы numer (числитель) и denom (знаменатель).
    3. Функцию toString, возвращающую строковое представление рационального числа.
       Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.
    4. Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).
    5. Функцию add, выполняющую сложение дробей.
       Функцию sub, выполняющую вычитание дробей.
       Функцию mul, выполняющую умножение дробей.
       Функцию div, выполняющую деление дробей.

    Экспортируйте созданные функции.
    Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.
*/


// Solution:

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
// make constructor
export const make = (numer, denom) => cons(numer, denom);

// selectors
export const numer = ratio => car(ratio);
export const denom = ratio => cdr(ratio);

// toString function
export const toString = ratio => `${numer(ratio)} / ${denom(ratio)}`;

// isEqual function
export const isEqual = (r1, r2) => {
  const part1 = numer(r1) * denom(r2);
  const part2 = numer(r2) * denom(r1);
  return part1 === part2;
};

// add function
export const add = (r1, r2) => {
  const a = numer(r1);
  const b = denom(r1);
  const c = numer(r2);
  const d = denom(r2);
  return make((a * d + b * c), (b * d));
};

// sub function
export const sub = (r1, r2) => {
  const a = numer(r1);
  const b = denom(r1);
  const c = numer(r2);
  const d = denom(r2);
  return make((a * d - b * c), (b * d));
};

// mul function
export const mul = (r1, r2) => {
  const a = numer(r1);
  const b = denom(r1);
  const c = numer(r2);
  const d = denom(r2);
  return make((a * c), (b * d));
};

// div function
export const div = (r1, r2) => {
  const a = numer(r1);
  const b = denom(r1);
  const c = numer(r2);
  const d = denom(r2);
  return make((a * d), (b * c));
};

// END
