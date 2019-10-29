/*
* Task:
*    Реализуйте асинхронную функцию, которая читает данные файла по указанному пути
*    и выводит их в консоль.
*
*        print('./myfile');
*/


// Solution:

/* eslint-disable no-console */
import fs from 'fs';

export default (filepath) => fs.readFile(filepath, 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
