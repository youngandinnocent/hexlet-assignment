/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию,
*    а возвращает список узлов вложенных (директорий и файлов) в указанную директорию на один уровень
*    и место которое они занимают. Размер файла задается в метаданных. Размер директории складывается
*    из сумм всех размеров файлов находящихся внутри во всех подпапках. Сами папки размера не имеют.
*
*    Обратите внимание на структуру результирующего массива. Каждый элемент - массив с двумя значениями,
*    именем директории и размером файлов внутри. Результат отсортирован по размеру в обратном порядке.
*    То есть сверху самые тяжелые, внизу самые легкие
*    
*    const tree = mkdir('/', [
*    mkdir('etc', [
*        mkdir('apache'),
*        mkdir('nginx', [
*        mkfile('nginx.conf', { size: 800 }),
*        ]),
*        mkdir('consul', [
*        mkfile('config.json', { size: 1200 }),
*        mkfile('data', { size: 8200 }),
*        mkfile('raft', { size: 80 }),
*        ]),
*    ]),
*    mkfile('hosts', { size: 3500 }),
*    mkfile('resolve', { size: 1000 }),
*    ]);
*
*    du(tree);
*    [
*    ['etc', 10280],
*    ['hosts', 3500],
*    ['resolve', 1000],
*    ]
*/



// Solution:

import { reduce } from '@hexlet/immutable-fs-trees';

const calcFilesSize = tree => reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0);

export default tree => tree.children
  .map(node => [node.name, calcFilesSize(node)])
  .sort(([, a], [, b]) => b - a);
