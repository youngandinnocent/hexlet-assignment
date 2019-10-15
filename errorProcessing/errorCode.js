/*
* Task:
*    Ошибок, связанных с файловой системой, очень много, и для их ручной генерации существуют
*    удобные библиотеки. Например, errno.
*
*    Реализуйте следующие возможности файловой системы HexletFs:
*
*    unlinkSync(path) - удаляет файл (в реальной фс все чуть сложнее, см. hard link).
*    Возможные ошибки:
*        ENOENT - файл не найден
*        EPERM - операция не разрешена. Такая ошибка возникает в случае, если path это директория
*
*    writeFileSync(path, content) - записывает content в файл по пути path.
*    Возможные ошибки:
*        ENOENT - родительская директория, в которой нужно создать файл, не существует
*        EISDIR - path является директорией
*        ENOTDIR - родительский элемент не является директорией
*
*    readFileSync(path) - читает содержимое файла по пути path.
*    Возможные ошибки:
*        ENOENT - файл не найден
*        EISDIR - path является директорией
*/


// Solution:

import errors from 'errno';
import path from 'path';
import Tree from '@hexlet/trees';
import { Dir, File } from '@hexlet/fs';

const getPathParts = (filepath) => filepath.split(path.sep).filter((part) => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    return [current.getMeta().getStats(), null];
  }

  unlinkSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EPERM];
    }
    return [current.getParent().removeChild(current.getKey()), null];
  }

  writeFileSync(filepath, content) {
    const current = this.findNode(filepath);
    if (current && current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (parent.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [parent.addChild(base, new File(base, content)), null];
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [current.getMeta().getBody(), null];
  }

  mkdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (parent.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [parent.addChild(base, new Dir(base)), null];
  }

  mkdirpSync(filepath) {
    const result = getPathParts(filepath).reduce((subtree, part) => {
      if (!subtree) {
        return false;
      }
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().isFile()) {
        return false;
      }
      return current;
    }, this.tree);
    return !!result;
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (parent.getMeta().isFile()) {
      return [null, errors.code.EISDIR];
    }
    return [parent.addChild(base, new File(base, '')), null];
  }

  rmdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    if (current.hasChildren()) {
      return [null, errors.code.ENOTEMPTY];
    }
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    return [parent.removeChild(base), null];
  }

  readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [current.getChildren().map((child) => child.getKey()), null];
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
