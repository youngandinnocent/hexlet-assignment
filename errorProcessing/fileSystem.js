/*
* Task:
*    Файловая система должна корректно обрабатывать пустые пути, делая внутри нормализацию.
*    То есть, если ей передать путь ///etc/config//my///, то он транслируется в /etc/config/my.
*
*    HexletFs.js
*    Реализуйте следующие части интерфейса типа HexletFs.
*        isDirectory(path)
*        isFile(path)
*        mkdirSync(path) - поведение этой функции должно соответствовать поведению утилиты mkdir в баше.
*        Для ее работы должны существовать все родительские директории. Она не создает директории рекурсивно.
*        touchSync(path) - создает пустой файл. На самом деле, в реальной файловой системе, команда touch
*        меняет время последнего обращения к файлу, а побочным эффектом этой команды является создание
*        файла в случае его отсутствия. По этой причине данной командой часто пользуются для создания файлов.
*
*        files.isDirectory('/etc'); // false
*
*        files.mkdirSync('/etc');
*        files.isDirectory('/etc'); // true
*
*        files.mkdirSync('/etc/nginx');
*        files.isDirectory('/etc/nginx'); // true
*
*        files.isFile('/file.txt'); // false
*
*        files.touchSync('/file.txt');
*        files.isFile('/file.txt'); // true
*/


// Solution:

import path from 'path';
import Tree from '@hexlet/trees';

const getPathParts = (filepath) => filepath.split(path.sep).filter((dir) => dir !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  isDirectory(filepath) {
    const current = this.findNode(filepath);
    return !!current && current.getMeta().type === 'dir';
  }

  isFile(filepath) {
    const current = this.findNode(filepath);
    return !!current && current.getMeta().type === 'file';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    if (!this.isDirectory(dir)) {
      return false;
    }
    const parent = this.findNode(dir);
    return parent.addChild(base, { type: 'dir' });
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    if (!this.isDirectory(dir)) {
      return false;
    }
    const current = this.findNode(dir);
    return current.addChild(base, { type: 'file' });
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
