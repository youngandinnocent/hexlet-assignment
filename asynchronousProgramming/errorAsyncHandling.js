/*
* Task:
*    Реализуйте и экспортируйте функцию move, которая асинхронно перемещает файл
*    из одного места в другое. Ее параметры:
*        Путь до файла исходника
*        Путь по которому нужно копировать файл
*        Колбек, у которого единственный аргумент — ошибка.
*
*        move('/opt/myfile', '/tmp/newfile', (error) => {
*        if (error) {
*            console.log('oops');
*            return;
*        }
*        console.log('yes!')
*        });
*/


// Solution:

/* eslint-disable import/prefer-default-export */
import fs from 'fs';

export default (fileFromPath, fileToPath, cb) => {
  fs.readFile(fileFromPath, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(fileToPath, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(fileFromPath, cb);
    });
  });
};
