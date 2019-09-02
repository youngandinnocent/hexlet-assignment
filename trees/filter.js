/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево,
*    а возвращает отфильтрованное дерево по предикату.
*/


// Solution:

const filter = (f, node) => {
    if (!f(node)) {
        return null;
    }
    return node.type === 'directory' ? { ...node, children: node.children.map(c => filter(f, c)).filter(n => n) } : node;
};
  
export default filter;
