/*
* Task:
*    Напишите тесты для класса Cart, представляющего собой покупательскую корзину. Интерфейс:
*        addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект,
*        у которого два свойства: name – имя и price – стоимость.
*        getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
*        getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех
*        добавленных товаров с учетом их количества.
*        getCount – возвращает количество товаров в корзине
*
*        const cart = new Cart();
*        cart.addItem({ name: 'car', price: 3 }, 5);
*        cart.addItem({ name: 'house', price: 10 }, 2);
*        cart.getItems().length; // 2
*        cart.getCost(); // 35
*/


// Solution:

import getImpelementation from '../implementations';

const Cart = getImpelementation();

test('cart', () => {
  const cart = new Cart();
  expect(cart.getItems()).toHaveLength(0);
  
  cart.addItem({ name: 'computer', price: 100 }, 1);
  cart.addItem({ name: 'pen', price: 1 }, 5);

  expect(cart.getItems()).toHaveLength(2);
  expect(cart.getCost()).toBe(105);
  expect(cart.getCount()).toBe(6);
});


