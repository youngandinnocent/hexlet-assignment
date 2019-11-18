/*
* Task:
*    1.Реализуйте и экспортируйте по умолчанию тип Order. Сделайте так, чтобы на
*    каждое изменение состояния в массив history добавлялась запись об этом в виде
*    { state: <name>, createdAt: new Date() }. Используйте для этого событие onEnterState
*    библиотеки javascript-state-machine.
*
*    Реализуйте конечный автомат процесса заказа товаров в магазине:
*    Начальное состояние: init. Событие accept переводит автомат в pending (только из init).
*    Событие ship переводит в состояние shipped (только из pending). Событие complete
*    переводит в состояние completed (только из shipped). Событие cancel переводит в
*    состояние canceled (только из состояний init и pending) Событие refund переводит
*    в состояние refunded (только из состояний shipped и completed)
*
*    2.Реализуйте функцию tryCancel которая выполняет отмену заказа только в том случае,
*    если это возможно сделать. Отменить заказ можно только до тех пор пока он не был
*    отправлен клиенту.
*        const order = new Order([]);
*        order.is('canceled'); // false
*        tryCancel(order);
*        order.is('canceled'); // true
*/


// Solution:

// Order class
import StateMachine from 'javascript-state-machine';

export default class Order {
  constructor(items) {
    this.items = items;
    this.history = [];

    this._fsm(); // eslint-disable-line
  }
}

StateMachine.factory(Order, {
  init: 'init',
  transitions: [
    { name: 'accept', from: 'init', to: 'pending' },
    { name: 'ship', from: 'pending', to: 'shipped' },
    { name: 'complete', from: 'shipped', to: 'completed' },
    { name: 'cancel', from: ['init', 'pending'], to: 'canceled' },
    { name: 'refund', from: ['shipped', 'completed'], to: 'refunded' },
  ],
  methods: {
    onEnterState({ from, to }) {
      if (from !== 'none') {
        this.history.push({ state: to, createdAt: new Date() });
      }
    },
  },
});

// tryCancel function
import Order from './Order';

export const init = (items) => new Order(items);

export const tryCancel = (order) => {
  if (order.can('cancel')) {
    order.cancel();
  }
};
