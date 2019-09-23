/*
* Task:
*    Напишите тесты для функции _.gt(value, other), которая возвращает true в том случае,
*    если value > other, и false в иных случаях.
*        gt(3, 1); // => true
*        gt(3, 3); // => false
*        gt(1, 3); // => false
*/


// Solution:

import getFunction from '../functions';

const gt = getFunction();

test('gt', () => {
  expect(gt()).toBe(false);
  expect(gt(1, -3)).toBe(true);
  expect(gt(3, 3)).toBe(false);
});
