/*
* Task:
*    Реализуйте асинхронную функцию, которая записывает данные по указанному пути
*    и оповещает о завершении работы через переданный колбек.
*
*        write('./myfile', 'data', () => {
*        console.log('success');
*        });
*/


// Solution:

import fs from 'fs';

export default (filepath, data, cb) => fs.writeFile(filepath, data, cb);
