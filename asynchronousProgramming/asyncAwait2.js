/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию, которая с помощью http запросов,
*    эмулируя поведение пользователя, выполняет регистрацию на сайте.
*
*    Функция принимает на вход следующие параметры:
*        Адрес формы регистрации (get запрос)
*        Адрес, по которому необходимо отправить данные формы (post запрос)
*        nickname - значение поля nickname из формы регистрации
*
*    На сайте реализована защита от csrf, поэтому перед непосредственной отправкой данных
*    формы на соответствующий адрес необходимо сделать запрос на форму регистрации,
*    извлечь из нее токен и отправить его вместе с данными формы по нужному адресу.
*
*    Обработка ошибок
*        В случае, если первый запрос вернет статус не 200, то бросаем исключение с ошибкой
*        В случае, если второй запрос вернет статус не 302, то также брсоаем исключение с ошибкой
*
*    Подсказки
*        Для извлечения токена из тела запроса воспользуйтесь функцией getToken
*        Для выполнения http запросов воспользуйтесь импортированными функциями из
*        библиотеки hexlet-http-request
*/


// Solution:

import { get, post } from 'hexlet-http-request';

const getToken = (body) => body.match(/value="(\w+)"/)[1];

export default async (registrationFormUrl, submitFormUrl, nickname) => {
  const responseUrl = await get(registrationFormUrl);
  if (responseUrl.status !== 200) {
    throw new Error(`Expected 200, but was ${responseUrl.status}`);
  }
  const data = { nickname, token: getToken(responseUrl.data) };
  const responsePost = await post(submitFormUrl, data);
  if (responsePost.status !== 302) {
    throw new Error(`Expected 302, but was ${responsePost.status}`);
  }
};
