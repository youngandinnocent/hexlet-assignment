/*
* Task:
*    Задача состоит в том, чтобы реализовать тип Stats и его формирование посредством динамической
*    диспетчеризации благодаря подтипам Node.
*
*    Stats.js
*    Реализуйте тип Stats со следующим интерфейсом:
*        constructor
*        isFile()
*        isDirectory()
*
*    Node.js
*    Реализуйте надтип Node, интерфейсом которого являются функции:
*        getStats()
*        getName()
*        Dir.js, File.js
*
*    Реализуйте подтипы Dir и File (надтип Node).
*/


// Solution:

// HexletFs.js
import path from 'path';
import Tree from '@hexlet/trees';

import Dir from './Dir';
import File from './File';

const getPathParts = (filepath) => filepath.split(path.sep).filter((part) => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    return current.getMeta().getStats();
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new File(base));
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new Dir(base));
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}

// Stats.js
export default class {
  constructor(file, directory) {
    this.file = file;
    this.directory = directory;
  }

  isFile() {
    return this.file;
  }

  isDirectory() {
    return this.directory;
  }
}

// Node.js
import Stats from './Stats';

export default class {
  constructor(name) {
    this.name = name;
  }

  getStats() {
    return new Stats(this.isFile(), this.isDirectory());
  }

  getName() {
    return this.name;
  }
}

// Dir.js
import Node from './Node';

export default class extends Node {
  isDirectory() {
    return true;
  }

  isFile() {
    return false;
  }
}

// File.js

import Node from './Node';

export default class extends Node {
  constructor(name, body) {
    super(name);
    this.body = body;
  }

  getBody() {
    return this.body;
  }

  isDirectory() {
    return false;
  }

  isFile() {
    return true;
  }
}
