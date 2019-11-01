/*
* Task:
*    Реализуйте и экспортируйте асинхронную функцию getTypes, которая анализирует
*    список переданных путей и возвращает массив (в промисе), с описанием того,
*    что находится по каждому из путей:
*        getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
*        // ['directory', 'file', null]
*
*    Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения
*    асинхронной операции возникла ошибка, то значением для этого пути будет null.
*    Для простоты считаем, что в эту функцию всегда передается как минимум один путь
*    для обработки (иначе придется задействовать механизм, который проходится в курсах далее).
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const getTypes = ([first, ...rest]) => {
  const result = [];
  const processPath = (filepath) => fs.stat(filepath)
    .then((stat) => result.push(stat.isDirectory() ? 'directory' : 'file'))
    .catch(() => result.push(null));

  return rest.reduce(
    (promise, filepath) => promise.then(() => processPath(filepath)), processPath(first),
  ).then(() => result);
};
