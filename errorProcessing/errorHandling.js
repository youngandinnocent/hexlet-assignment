/*
* Task:
*    Реализуйте следующие возможности файловой системы HexletFs:
*
*        mkdirpSync(path) - создает директории рекурсивно (в отличие от mkdir).
*        Если в пути встречается файл, то возвращает false, т.к. нельзя создать директорию
*        внутри файла.
*        Если все отработало корректно, то возвращается true
*
*        readdirSync(path) - возвращает список файлов (и папок) указанной директории.
*        Если директории не существует, то возвращает false
*        Если передан файл, то возвращает false
*/


// Solution:

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
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const current = this.findNode(filepath);
    if (current) {
      return false;
    }
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new Dir(base));
    return true;
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

  readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current || current.getMeta().isFile()) {
      return false;
    }
    return current.getChildren().map((node) => node.getKey());
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new File(base));
    return true;
  }

  rmdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return false;
    }
    if (current.getMeta().isFile() || current.hasChildren()) {
      return false;
    }
    const { base } = path.parse(filepath);
    current.getParent().removeChild(base);
    return true;
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
