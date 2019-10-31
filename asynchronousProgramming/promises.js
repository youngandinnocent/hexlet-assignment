/*
* Task:
*    Реализуйте и экспортируйте асинхронную функцию reverse, которая меняет строчки
*    в файле в обратом порядке
*        // До
*        // one
*        // two
*        reverse(filepath);
*
*        // После
*        // two
*        // one
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => fs.writeFile(filepath, data.split('\n').reverse().join('\n')));
