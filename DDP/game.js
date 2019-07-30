/*
* Task:
*   Допишите функцию iter, которая является частью ядра игрового движка и описывает в себе
*   логику одного хода
*
*   Алгоритм
*       1) Если здоровье игрока, которого атаковали на предыдущем шаге (в примерах этого и следующего
*       пунктов мы предполагаем, что это первый игрок с именем name1), меньше или равно 0,
*       то добавляем в лог элемент с сообщением вида ${name1} был убит и возвращаем лог.
*       Игра закончена.
*
*       2) В ином случае, берём рандомную карту, вычисляем урон, записываем новое здоровье,
*       формируем сообщение формата: const message = `Игрок '${name1}' применил '${cardName}'
*       против '${name2}' и нанес урон '${damage}'`;
*       Формируем элемент лога формата cons(cons(health1, health2), message) и добавляем его в лог.
*
*       3) Повторяем.
*
*/


// Solution:

import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line


const run = (player1, player2, cards) => {
    const iter = (health1, name1, health2, name2, order, log) => {
        if (health1 <= 0) {
            return consList(cons(car(head(log)), `${name1} был убит`), log);
        }
        const card = random(cards);
        const cardName = car(card);
        const damage = cdr(card)();
        const newHealth = health2 - damage;
        const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
  
        let stats;
        if (order === 1) {
            stats = cons(cons(health1, newHealth), message);
        } else if (order === 2) {
            stats = cons(cons(newHealth, health1), message);
        }
        
        const newLog = consList(stats, log);
        return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    };

    const startHealth = 10;
    const startLog = cons(cons(startHealth, startHealth), 'Начинаем бой!');
    return reverse(iter(startHealth, player1, startHealth, player2, 1, l(startLog)));
};
export default cards => (name1, name2) => run(name1, name2, cards);
  