/*
* Task:
*    Реализуйте и экспортируйте асинхронную функцию getDirectorySize, которая считает
*    размер переданной директории (не включая поддиректории). Анализ размера файла должен
*    происходить паралелльно, для этого воспользуйтесь библиотекой async
*
*        getDirectorySize('/usr/local/bin', (err, size) => {
*        console.log(size);
*        });
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export default (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(error2, sum);
    });
  });
};
