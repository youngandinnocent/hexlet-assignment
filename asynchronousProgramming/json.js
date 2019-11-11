/*
*   Task:
*    В текущем уроке мы будем использовать такой сервис для определения списка урлов,
*    по которым располагается сайт.
*        // Обращение к консулу для извлечения значения по ключу 'backends'
*        get(`http://localhost:5456/backends`);
*
*    Запрос возвращает json следующей структуры:
*        [
*            {
*                "url": "http://ru.hexlet.io",
*                "lang": "ru"
*            }, {
*                "url": "http://en.hexlet.io",
*                "lang": "en"
*            }, {
*                "url": "http://gr.hexlet.io",
*                "lang": "gr"
*            }
*        ]
*
*    Как видно из структуры, у хекслета есть языковые версии сайтов и их список
*    лежит в консуле под ключем backends. Сама задача заключается в следующем.
*    На воображаемом сервисе, который мы разрабатываем, появилась задача определять
*    самый незагруженный поддомен (подразумевается, что каждый поддомен обслуживается
*    на своем сервере) и обновлять его в консуле с некоторой периодичностью.
*
*    Процесс описывается следующим алгоритмом:
*        Делаем запрос в consul на чтение значения ключа backends и извлекаем список адресов
*        Делаем запрос ко всем серверам на статусную страницу (адрес строится так:
*            ${url}/status) для домена ru.hexlet.io это будет ru.hexlet.io/status.
*        Находим самый незагруженный сервер.
*        Обновляем запись в consul.
*
*    Запрос на статусную страницу возвращает данные в виде json:
*        {
*        "workload": "10",
*        "url": "http://ru.hexlet.io"
*        }
*
*    Параметр workload означает нагрузку на сервер, чем он меньше, тем нагрузка меньше.
*    Для обновления самого незагруженного поддомена в консуле, необходимо выполнить
*    следующий запрос:
*        // value - это url самого незагруженного поддомена, взятый из json статусной страницы
*        post(setCurrentBackendUrl, { value: url });
*        // post('http://localhost:5456/backends/current', { value: url });
*
*    Этот запрос в консул, устанавливает значение { value: url } по ключу backends/current
*
*    Реализуйте и экспортируйте по умолчанию функцию, которая обновляет значение по ключу
*    backends/current в consul. Функция принимает на вход два адреса: 1) адрес, по которому
*    можно получить список серверов 2) адрес для обновления значения текущего незагруженного
*    поддомена (post запросом).
*
*    Функция должна вернуть promise, выполняющий обновление значения по ключу backends/current.
*/


// Solution:

import { get, post } from 'hexlet-http-request';

export default (backendListUrl, setCurrentBackendUrl) => get(backendListUrl)
  .then((list) => {
    const data = JSON.parse(list.data);
    const promises = data.map(({ url }) => get(`${url}/status`));
    return Promise.all(promises);
  })
  .then((responses) => {
    const best = responses.map((res) => JSON.parse(res.data))
      .reduce((min, cur) => (cur.workload < min.workload ? cur : min), { workload: Infinity });
    return post(setCurrentBackendUrl, { value: best.url });
  });
