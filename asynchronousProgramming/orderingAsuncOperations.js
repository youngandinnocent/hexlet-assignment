/*
* Task:
*    Реализуйте и экспортируйте асинхронную функцию compareFileSizes,
*    которая сравнивает размеры двух файлов. Если первый больше второго,
*    то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.
*
*        compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import fs from 'fs';

export default (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};
