/*
* Task:
*    Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива:
*
*        take([1, 2, 3], 2); // [1, 2]
*        take([], 2); // []
*        take([4, 3], 9); // [4, 3]
*/


// Solution:

import assert from 'assert';
import getFunction from '../functions';

const take = getFunction();

assert.deepEqual(take([1, 2, 3], 0), []);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take(['Mike', 'Sarah', 'John'], 5), ['Mike', 'Sarah', 'John']);

