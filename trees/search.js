/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку.
*    Обратите внимание на то, что возвращается не просто имя файла, а полный путь до файла, начиная от корня.
*    Подсказки
*        Для построения путей используйте функцию path.join.
*        Проверку вхождения строк можно делать с помощью функции str.includes(substr).
*/


// Solution:

import path from 'path';

export default (tree, substr) => {
    const iter = (n, ancestry, acc) => {
        const newAncestry = path.join(ancestry, n.name);
        if (n.type === 'file') {
            return n.name.includes(substr) ? [...acc, newAncestry] : acc;
        }
        return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
    };
    return iter(tree, '', []);
};
