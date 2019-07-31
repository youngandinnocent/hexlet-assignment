/*
* Task:
*   Реализуйте интерфейс работы карты с типами SimpleCard и PercentCard.
*   Реализуйте новую логику работы функции run.
*/


// Solution:

// simpleCard module
export const make = (name, damagePoints) => attach('SimpleCard', cons(name, damagePoints));

export const getName = self => car(contents(self));

export const damage = self => cdr(contents(self));

// percentCard module
export const make = (name, percent) => attach('PercentCard', cons(name, percent));

export const getName = self => car(contents(self));

export const damage = (self, health) => Math.round(health * (cdr(contents(self)) / 100));


// new logic for run function
const card = customRandom(cards);
// BEGIN
let cardName;
let damage;

if (isSimpleCard(card)) {
    cardName = getSimpleCardName(card);
    damage = simpleCardDamage(card);
} else if (isPercentCard(card)) {
    cardName = getPercentCardName(card);
    damage = percentCardDamage(card, health2);
}
// END
const newHealth = health2 - damage;
