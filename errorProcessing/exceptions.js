/*
* Task:
*    Реализуйте функцию copySync(src, dest), которая копирует файл из src в dest.
*        Если dest это путь до директории, то имя файла берется из src и добавляется к dest
*        Если dest это путь до файла (существующего или нет), то его содержимое становится
*        равным src
*
*    Возможные ошибки:
*        EISDIR - возникает в случае, если src это директория, а не файл.
*        ENOENT - возникает в случае, если src не существует, а так же в случае, когда не существует
*        двух последних элементов в dest. Например если в качестве dest указан /path/to/file и,
*        при этом, в файловой системе нет ни file ни to, то должно сработать исключение,
*        так как функция копирования не может создавать промежуточных директорий (в данном
*        случае надо досоздать to).
*/


// Solution:

import path from 'path';
import errors from 'errno'; // eslint-disable-line
import Tree from '@hexlet/trees'; // eslint-disable-line
import { Dir, File } from '@hexlet/fs'; // eslint-disable-line

import HexletFsError from './HexletFsError';

const getPathParts = (filepath) => (
  filepath.split(path.sep).filter((part) => part !== '')
);

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    return current.getMeta().getStats();
  }

  copySync(src, dest) {
    const body = this.readFileSync(src);
    const destNode = this.findNode(dest);
    if (destNode && destNode.getMeta().isDirectory()) {
      const { base } = path.parse(src);
      const fullPath = path.join(dest, base);
      return this.writeFileSync(fullPath, body);
    }
    return this.writeFileSync(dest, body);
  }

  writeFileSync(filepath, body) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    const current = parent.getChild(base);
    if (current && current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    parent.addChild(base, new File(base, body));
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (parent.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOTDIR, filepath);
    }
    return parent.addChild(base, new File(base, ''));
  }

  mkdirpSync(filepath) {
    getPathParts(filepath).reduce((subtree, part) => {
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().isFile()) {
        throw new HexletFsError(errors.code.ENOTDIR, filepath);
      }

      return current;
    }, this.tree);
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    return current.getMeta().getBody();
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
