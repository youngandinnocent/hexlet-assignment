/*
* Task:
*    Реализуйте и экспортируйте асинхронную функцию unionFiles, которая содержимое двух файлов
*    записывает в третий.
*    Принимает аргументы:
*        1.Путь к первому файлу
*        2.Путь ко второму файлу
*        3.Путь, по которому нужно записать содержимое предыдущих файлов
*        4.Колбэк
*/


// Solution1:

import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null);
      });
    });
  });
};

// Solution2 with async.waterfall function:

/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { waterfall } from 'async';

export const unionFiles = (inputFile1, inputFile2, outputFile, cb) => {
  waterfall([
    (callback) => fs.readFile(inputFile1, callback),
    (data1, callback) => fs.readFile(inputFile2, (err, data2) => callback(err, data1, data2)),
    (data1, data2, callback) => fs.writeFile(outputFile, `${data1}${data2}`, callback),
  ], cb);
};
