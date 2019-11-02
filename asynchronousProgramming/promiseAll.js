/*
* Task:
*    Реализуйте на промисах и экспортируйте асинхронную функцию getDirectorySize,
*    которая считает размер переданной директории (не включая поддиректории).
*        getDirectorySize('/usr/local/bin').then(console.log);
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

export const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => (
    Promise.all(filenames
      .map((name) => path.join(dirpath, name))
      .map(fs.stat))));
  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};
