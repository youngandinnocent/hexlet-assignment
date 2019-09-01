/*
* Task:
*   Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и
*   дерево, а возвращает отображенное дерево.
*/


// Solution:

const map = (f, node) => {
    const updatedNode = f(node);
    return node.type === 'directory' ? { ...updatedNode, children: node.children.map(n => map(f, n)) } : updatedNode;
};
  
export default map;
