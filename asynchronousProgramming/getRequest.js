/*
* Task:
*    В сети существует такая игра: вы получаете исходную ссылку на wiki страницу и
*    необходимо за минимальное количество переходов дойти до статьи на заданную тему.
*    Переходы осуществляются по любым ссылкам на странице, которые не выводят поиски
*    за рамки википедии.
*
*    Реализуйте и экспортируйте по умолчанию функцию для поиска статьи на заданную тему
*    по алгоритму описанному выше, кроме требования "за минимальное количество переходов".
*    Проверку на внешние ссылки делать не надо. Наша цель асинхронность, а не сложность
*    алгоритма.
*
*    Принимаемые параметры:
*        title - название темы. Поиск должен происходить по точному соответствию.
*        address - ссылка на страницу с которой будет производится поиск.
*        callback - функция обратного вызова, в которую передается адрес найденной
*        страницы либо ошибка. Ошибка возникает, например, в случае если были просмотрены
*        все ссылки, а статья не найдена.
*
*    Важно учитывать:
*        В статьях могут быть взаимные ссылки, поэтому необходимо отслеживать то, что уже
*        было посещено, чтобы не возникало бесконечной рекурсии.
*
*    Пример:
*        solution('операция', 'http://localhost:8080', (err, data) => {
*        console.log(data); // http://localhost:8080/operator
*        });
*
*    Все страницы имеют такую структуру:
*        <html>
*        <head>
*            <title></title>
*        </head>
*        <body>
*            <h1>Википедия</h1>
*            <p>Как вы знаете, вики это большая база знаний обо всем на свете.
*            Наш сайт это не настоящая <a href="https://www.wikipedia.org/">википедия</a>,
*            но кое что мы сюда добавили).</p>
*            <p>Например статью про <a href="/operators">операции</a>, а так же статьи про
*            <a href="/expressions">выражения</a> и <a href="/statements">инструкции</a></p>
*        </body>
*        </html>
*
*    Заголовок h1 содержит точное название темы
*    Под заголовком - абзац(ы) с произвольным текстом, внутри которого встречаются ссылки,
*    по которым и нужно ходить
*/


// Solution:

import url from 'url';
import http from 'http';

const getTitle = (body) => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = (body) => (body.match(/href="\/(.*?)">/g) || [])
  .map((item) => item.match(/href="\/(.*?)">/)[1]);

export default (expectedTitle, link, callback) => {
  const { protocol, host, pathname } = url.parse(link);
  const search = (waited, visited) => {
    if (waited.length === 0) {
      callback(new Error('link was not found'));
      return;
    }
    const [current, ...rest] = waited;
    if (visited.has(current)) {
      search(rest, visited);
      return;
    }
    const address = url.format({ protocol, host, pathname: current });

    http.get(address, (res) => {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const data = body.join();
        const actualTitle = getTitle(data);
        if (expectedTitle === actualTitle) {
          callback(null, address);
          return;
        }
        visited.add(current);
        const newLink = getLinks(data);
        search([...newLink, ...rest], visited);
      });
    }).on('error', (e) => {
      callback(e);
    });
  };
  search([pathname], new Set());
};
