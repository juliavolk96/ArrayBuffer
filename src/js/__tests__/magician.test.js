import { test, expect } from '@jest/globals';

import Magician from '../magician';

test('Установка значения distance больше 5', () => {
  const magician = new Magician();
  magician.distance = 6;
  expect(magician.distance).toBe(5);
});

test('Установка значения distance меньше или равно 5', () => {
  const magician = new Magician();
  magician.distance = 3;
  expect(magician.distance).toBe(3);
});

test('Получение значения distance', () => {
  const magician = new Magician();
  magician.distance = 4;
  expect(magician.distance).toBe(4);
});
