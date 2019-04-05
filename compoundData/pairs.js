/* Task: В этом задании мы немного потренируемся работать с парами. Без фанатизма и по шагам.

    Шаг 1 - reversePair.js
    Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую,
    в которой значения переставлены местами.

    Шаг 2 - sumOfPairs.js
    Реализуйте функцию sumOfPairs, которая принимает на вход две пары и возвращает новую пару,
    в элементах которой находятся суммы элементов из исходных пар.

    Шаг 3 - findPrimitiveBox.js
    Однажды вы сидели дома, когда курьер Василий принес вам коробку. С коробкой шла записка
    следующего содержания:
    'Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка,
    в которой также два отсека и точно также один отсек с письмом, а в другом - коробка.
    Коробки могут быть вложены друг в друга сколько угодно раз. Вам нужно добраться до коробки,
    внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.'

    Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные,
    которые не являются парой), а в другом - всегда коробка, но никогда не две коробки одновременно.
    Сами отсеки при этом могут меняться, то есть в одной коробке отсеком с письмом может быть первый,
    а в другой - последний.
    Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход "коробку" (пару),
    находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.
*/


// Solution:

// 1. reversPairs.js

import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

const reversePair = (pair) => {
  const rX = cdr(pair);
  const rY = car(pair);
  return cons(rX, rY);
};

export default reversePair;


// 2. sumOfPairs.js

const sumOfPairs = (pair1, pair2) => {
  const sumX = car(pair1) + car(pair2);
  const sumY = cdr(pair1) + cdr(pair2);
  return cons(sumX, sumY);
};

export default sumOfPairs;


// 3. findPrimitiveBox.js

import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

const findPrimitiveBox = (pair) => {
    const firstPart = car(pair);
    const secondPart = cdr(pair);
    if (isPair(firstPart) === false && isPair(secondPart) === false) {
        return pair;
    }
    const step = isPair(firstPart) ? firstPart : secondPart;
    return findPrimitiveBox(step);
};

export default findPrimitiveBox;