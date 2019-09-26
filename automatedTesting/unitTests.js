/*
* Task:
*    Напишите тесты для класса Validator. Этот класс проверяет корректность данных.
*    Принцип работы валидатора следующий:
*        1.С помощью метода addCheck(fn) в него добавляются проверки. Каждая проверка представляет
*        из себя функцию-предикат, которая принимает на вход проверяемое значение и возвращает либо
*        true либо false в зависимости от того, соответствует ли значение требованиям проверки или нет.
*        
*        2.С помощью метода isValid(value), пользователь объектов класса Validator проверяет соответствие
*        значения всем добавленным проверкам. Если не было добавлено ни одной проверки, считается,
*        что любое значение верное.
*
*        const validator = makeValidator();
*        validator.isValid('some value'); // true
*        validator.addCheck((v) => v > 5);
*        validator.isValid(3); // false
*        validator.isValid(8); // true
*        validator.addCheck(\* add more checks *\);
*/


// Solution:

import { isNumber, isString } from 'lodash';
import getImpelementation from '../implementations';

const makeValidator = getImpelementation();

test('validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('value')).toBe(true);

  validator.addCheck(isNumber);
  validator.addCheck((v) => v > 10);
  validator.addCheck((v) => v % 2 === 0);

  expect(validator.isValid(false)).toBe(false);
  expect(validator.isValid('string')).toBe(false);
  expect(validator.isValid(8)).toBe(false);
  expect(validator.isValid(11)).toBe(false);

  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(100)).toBe(true);

  validator.toBeEmpty();
  expect(validator.isValid('value')).toBe(true);

  validator.addCheck(isString);
  validator.addCheck((str) => `${str}, World!`);

  expect(validator.isValid(1)).toBe(false);
  expect(validator.isValid('Hello')).toBe(true);
});


