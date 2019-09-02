/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.
*/


// Solution:

const reduce = (f, node, acc) => {
    const newAcc = f(acc, node);
    return node.type === 'directory' ? node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc) : newAcc;
};
  
export default reduce;
