/*
* Task:
*    Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит
*    за изменением файла. Если файл был изменён со времени предыдущей проверки,
*    то необходимо вызвать колбек. Параметры функции:
*        Путь до файла, который нужно отслеживать
*        Период отслеживания
*        Колбек, который принимает на вход только ошибку
*
*        import watch from './watcher';
*        const id = watch(filepath, 500, (err) => {
*        console.log('Wow!');
*        });
*
*        setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
*/


// Solution:

import fs from 'fs';

const check = (timerId, filepath, period, cb) => {
  fs.stat(filepath, (err, stats) => {
    if (err) {
      clearInterval(timerId);
      cb(err);
      return;
    }
    if ((Date.now() - stats.mtimeMs) < period) {
      cb(null);
    }
  });
};

export default (filepath, period, cb) => {
  const timerId = setInterval(() => check(timerId, filepath, period, cb), period);
  return timerId;
};
