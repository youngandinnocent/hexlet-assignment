/*
* Task:
*   Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра:
*   список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту
*   переданных слов. То есть, ключами являются сами слова, а значениями число повторений.
*
*   1. Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра.
*   Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
*   2. Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.
*   3. stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру.
*   Стоп-слова указываются в нижнем регистре.
*/

// Solution:

export default (words, stopWords) => words
    .map(word => word.toLowerCase())
    .filter(word => !stopWords.includes(word))
    .reduce((acc, word) => {
        const count = acc.get(word) || 0;
        return acc.set(word, count + 1);
    }, new Map());
