/*
* Task:
*   1) Реализуйте классы SimpleCard и PercentCard
*
*   2) Реализуйте функцию run.
*       В прошлых практиках отдельные элементы лога мы формировали с помощью пар:
*       cons(cons(health1, health2), message). Сейчас же каждый элемент лога сформируйте с помощью типа
*       данных object со свойствами health1, health2 и message. Таким образом, итоговый log должен
*       содержать список объектов.
*/


// Solution:

// SimpleCard class
export default class SimpleCard {
    constructor(name, damagePoints) {
      this.name = name;
      this.damagePoints = damagePoints;
    }
  
    damage() {
      return this.damagePoints;
    }
}

// PercentCard class
export default class PercentCard {
    constructor(name, percent) {
      this.name = name;
      this.percent = percent;
    }
  
    damage(health) {
      return Math.round(health * (this.percent / 100));
    }
}

// run function as objects
const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const prevLog = head(log);
      const newLog = {
        message: `${name1} был убит`,
        health1: prevLog.health1,
        health2: prevLog.health2,
      };
      return consList(newLog, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    const stats = { message };
    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => (name1, name2) => (
  run(name1, name2, cards, customRandom)
);
