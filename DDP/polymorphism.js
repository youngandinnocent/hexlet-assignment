/*
* Task:
*   В HTML некоторые элементы хранят ссылку в атрибуте href, а некоторые — в src.
*   Например:
*       <img src="/logo.jpg">
*       <link href="/style.css">
*       <a href="/">
*   Абстракция Tags содержит интерфейс для представления тега HTML:
*       const hr = make('hr');
*       const a = make('a', { href: '/' });
*
*       getName(a); // => a
*       getAttribute('href', a); // => /
*       getAttribute('notexist', a); // => undefined
*   make — принимает на вход два параметра: название тега и объект, в котором содержатся атрибуты и их значения.
*   getName — принимает на вход тег, полученный вызовом make, и возвращает его имя.
*   getAttribute — принимает на вход имя атрибута и тег, полученный вызовом make. Возвращает значение атрибута.
*   extract.js
*
*   Реализуйте и экспортируйте по умолчанию функцию extract, которая принимает на вход список тегов 
*   (только <a>, <link> и <img>) и возвращает список ссылок, извлеченных из этих тегов.
*
*       const tags = l(
*       make('a', { href: '/about' }),
*       make('img', { src: '/avatar.jpeg' }),
*       make('link', { href: '/favicon.ico' }),
*       );
*
*       extract(tags); // => ('/about', '/avatar.jpeg', '/favicon.ico')
*/

// Solution:
import { map } from '@hexlet/pairs-data';
import { getAttribute, getName } from './tags';

const mapping = {
    img: tag => getAttribute('src', tag),
    link: tag => getAttribute('href', tag),
    a: tag => getAttribute('href', tag),
};
  
export default tags => map(tag => mapping[getName(tag)](tag), tags);
