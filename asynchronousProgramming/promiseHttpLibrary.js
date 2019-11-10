/*
* Task:
*    В этом упражнении необходимо создать библиотеку для работы с http,
*    которая оборачивает встроенный в node.js модуль http в промисы.
*    Интерфейсом библиотеки являются две функции: get и post.
*
*    Определение функции get:
*        export const get = (url, config = {}) =>
*        dispatch({ ...config, url, method: 'GET' });
*    Использование:
*        const host = 'http://ru.hexlet.io';
*        get('http://ru.hexlet.io').then(response => {
*        console.log(response.status); // 301
*        });
*
*    Определение функции post:
*        export const post = (url, data, config = {}) =>
*        dispatch({ ...config, url, data, method: 'POST' });
*    Использование:
*        const data = { nickname: 'scooter' };
*        post('https://ru.hexlet.io/users', data).then(response => {
*        console.log(response.status); // 201
*        });
*
*    config – это объект со следующей структурой:
*        method - глагол http
*        data - объект содержащий данные, которые будут отправлены в теле запроса
*        url - адрес назначения
*        params - параметры, которые будут подставлены в адрес как query params
*        headers - заголовки запроса
*
*    response – это тоже объект, состоящий из:
*        status - код ответа
*        statusText - текст ответа соответствующий коду
*        headers - заголовки ответа
*        data - тело ответа
*
*    Дополнительной фишкой библиотеки является автоматическое кодирование
*    данных при выполнении post запроса и установка следующих заголовков:
*        'Content-Type': 'application/x-www-form-urlencoded'
*        'Content-Length': ...
*
*    Реализуйте и экспортируйте функцию по умолчанию, которая принимает на
*    вход конфигурацию запроса (примеры в solution.js) и возвращает промис.
*    В промисе должен выполняться запрос, соответствующий параметрам
*    из входной конфигурации.
*/


// Solution:
import url from 'url';
import http from 'http';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery);
  const newQueryParams = keys
    .filter((key) => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});
  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
};

const prepareData = (data, headers) => {
  if (data === undefined) {
    return [data, headers];
  }
  const preparedData = querystring.stringify(data);
  const bufferData = Buffer.from(preparedData, 'utf-8');
  return [bufferData, {
    ...headers,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(bufferData),
  }];
};

export default (config) => {
  const [data, headers] = prepareData(config.data, config.headers || {});
  const urlObject = url.parse(config.url, true);
  const search = getSearch(urlObject.query, config.params);
  const options = {
    hostname: urlObject.hostname,
    port: urlObject.url,
    method: config.method,
    path: `${urlObject.pathname}${search}`,
    headers,
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      const responseData = [];
      res.on('data', (chunk) => {
        responseData.push(chunk);
      });
      res.on('end', () => {
        const response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          data: responseData.join(''),
        };
        resolve(response);
      });
    });
    req.on('error', reject);
    if (data) {
      req.write(data);
    }
    req.end();
  });
};
