/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию normalize, которая нормализует
*    имена классов для всех элементов на странице. В данном случае это означает,
*    что происходит преобразование всех классов, написанных с использованием kebab нотации,
*    в camelCase нотацию: text-center => textCenter
*
*        <body>
*           <div class="text-center row-b">Bam</div>
*        </body>
*        normalize(document);
*        console.log(document.body.innerHTML);
*        <body>
*           <div class="textCenter rowB">Bam</div>
*        </body>
*/


// Solution:
import { camelCase } from 'lodash';

export default (document) => {
  const elems = [...document.body.getElementsByTagName('*')];
  elems.forEach((el) => {
    if (el.hasAttribute('class')) {
      el.classList.forEach((item) => (
        el.classList.replace(item, camelCase(item))
      ));
    }
  });
};
