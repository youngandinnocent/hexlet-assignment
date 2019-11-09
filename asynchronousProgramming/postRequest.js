/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию, которая с помощью http запросов,
*    эмулируя поведение пользователя, выполняет регистрацию на сайте.
*
*    Функция принимает на вход четыре параметра:
*        Адрес формы регистрации (get запрос)
*        Адрес по которому необходимо отправить данные формы (post запрос)
*        nickname - значение поля nickname из формы регистрации
*        Коллбек, который будет вызван после окончания операции. Коллбек принимает
*        на вход единственный параметр - err в случае если произошла ошибка.
*
*        const registrationFormUrl = 'http://localhost:8080';
*        const submitFormUrl = 'http://localhost:8080/users';
*        const nickname = 'legolas';
*        request(registrationFormUrl, submitFormUrl, nickname, (err) => {
*        // ...
*        });
*
*    На сайте реализована защита от csrf, поэтому перед непосредственной отправкой
*    данных формы на соответствующий адрес, необходимо сделать запрос на форму регистрации,
*    извлечь из нее токен и отправить его вместе с данными формы по нужному адресу.
*
*    Обработка ошибок
*    В случае, если первый запрос вернет статус не 200, то вызываем коллбек и передаем
*    туда ошибку. В случае если второй запрос вернет статус не 302, то так же вызываем
*    коллбек и передаем ошибку.
*/


// Solution:
import url from 'url';
import http from 'http';
import querystring from 'querystring';

const getToken = (body) => body.match(/value="(\w+)"/)[1];

export default (registrationFormUrl, submitFormUrl, nickname, callback) => {
  http.get(registrationFormUrl, (gres) => {
    if (gres.statusCode !== 200) {
      callback(new Error(`Expected 200, but was ${gres.statusCode} for '${registrationFormUrl}'`));
    } else {
      const body = [];
      gres.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        const token = getToken(html);
        const postData = querystring.stringify({ nickname, token });
        const urlObject = url.parse(submitFormUrl);
        const options = {
          hostname: urlObject.hostname,
          path: urlObject.path,
          port: urlObject.port,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
          },
        };
        const req = http.request(options, (pres) => {
          if (pres.statusCode === 302) {
            callback(null);
          } else {
            callback(new Error(`Expected 302, but was ${pres.statusCode} for '${submitFormUrl}'`));
          }
        });
        req.end(postData);
      });
    }
  });
};
