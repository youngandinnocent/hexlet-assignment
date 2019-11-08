// Task:
//    Реализуйте и экспортируйте асинхронную функцию exchange,
//    которая обменивает содержимое двух файлов.
//    exchange('/myfile1', '/myfile2');


// Solution:

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const exchange = async (inputFile1, inputFile2) => {
  const data1 = await fs.readFile(inputFile1, 'utf-8');
  const data2 = await fs.readFile(inputFile2, 'utf-8');
  await fs.writeFile(inputFile1, data2);
  await fs.writeFile(inputFile2, data1);
};
