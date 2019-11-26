/*
* Task:
*    Реализуйте функцию prettify, которая находит текст (дочерние текстовые ноды)
*    внутри элемента div и оборачивает текст в параграф.
*    Экспортируйте функцию по умолчанию.
*/


// Solution:

export default (document) => {
  const coll = [...document.querySelectorAll('div')];
  coll.forEach((div) => {
    const textNode = [...div.childNodes]
      .filter((text) => text instanceof Text)
      .filter((text) => text.textContent.trim() !== '');
    textNode.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
