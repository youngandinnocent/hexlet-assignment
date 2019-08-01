/*
* Task:
*   card.js module
*   Реализуйте и экспортируйте обобщенную функцию damage.
*
*   generic.js module
*   Реализуйте функцию getMethod, которая производит поиск конкретной реализации функции для
*   переданного типа.
*
*   simpleCard.js module
*   Реализуйте интерфейс типа simpleCard.
*
*   Обратите внимание в модуле generic.js на следующую строчку: let methods = l();.
*   Именно здесь определяется та самая виртуальная таблица, механизм работы с которой подробно
*   описан в текстовой части урока.
*/


// Solution:

// card.js module
import { contents } from '@hexlet/tagged-types';
import { getMethod } from './generic';

// BEGIN
export const getName = self => getMethod(self, 'getName')(contents(self));

export const damage = (self, health) => getMethod(self, 'damage')(contents(self), health);
// END


// simpleCard.js module
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { attach } from '@hexlet/tagged-types';
import { definer } from './generic';

// BEGIN
const defmethod = definer('SimpleCard');

const make = (name, damagePoints) => attach('SimpleCard', cons(name, damagePoints));

export default make;


defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
// END


// generic.js module
import { cons, car, cdr } from '@hexlet/pairs'; // eslint-disable-line
import {
  l, cons as consList, isEmpty, head, tail,
} from '@hexlet/pairs-data';
import { attach, typeTag, contents } from '@hexlet/tagged-types';

// BEGIN
let methods = l();

export const getMethod = (obj, methodName) => {
  const currentType = typeTag(obj);
  const iter = (elements) => {
    if (isEmpty(elements)) {
      return null;
    }
    const element = head(elements);
    if (currentType === typeTag(element)) {
      const method = contents(element);
      if (methodName === car(method)) {
        return cdr(method);
      }
    }
    return iter(tail(elements));
  };
  return iter(methods);
};

export const definer = type => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
// END