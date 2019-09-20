/*
* Task:
*    Напишите тесты для функции indexOf(items, value), которая возвращает индекс переданного элемента:
*        _.indexOf([1, 2, 1, 2], 2); // 1
*        _.indexOf([2, 'one', 'cat', false], 8); // -1
*/


// Solution:

import assert from 'power-assert';
import getFunction from '../functions';

const indexOf = getFunction();

assert(indexOf([]) === -1);
assert(indexOf([1, 2, 3, 2], 2) === 1);
assert(indexOf([1, 2, 3, 2], 2, 2) === 3);

