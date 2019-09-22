/*
* Task:
*    Напишите тесты для функции without(coll, [values]), которая принимает первым параметром массив
*    и возвращает его копию, из которой исключены значения, переданные вторым и последующими параметрами.
*        _.without([2, 1, 2, 3], 1, 2); // => [3]
*/


// Solution:

import getFunction from '../functions';

const without = getFunction();

test('without', () => {
  expect(without([], 9)).toEqual([]);
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
});
