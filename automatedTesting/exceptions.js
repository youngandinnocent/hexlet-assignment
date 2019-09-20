/*
* Task:
*    Напишите тесты для функции get(obj, key, defaultValue). Тесты должны быть построены по принципу:
*    проверка через if и исключение в случае провала теста.
*
*    Эта функция извлекает значение из объекта при условии, что ключ существует.
*    В ином случае возвращается defaultValue.
*        get({ key: 'value' }, 'key'); // 'value'
*        get({}, 'key', 'defaultValue'); // 'defaultValue'
*
*    Подумайте над тем, какие пограничные случаи есть у этой функции.
*/


// Solution:
import getFunction from '../functions';

const get = getFunction();

if (get({ key: 'value' }, 'key') !== 'value') {
    throw new Error('Tests failed');
}
if (get({}, 'key', 'defaultValue') !== 'defaultValue') {
    throw new Error('Tests failed');
}
if (get({ key: 'value' }, 'key', 'defaultValue') !== 'value') {
    throw new Error('Tests failed');
}

