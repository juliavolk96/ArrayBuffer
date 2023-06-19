import { test, expect } from '@jest/globals';

import Daemon from '../daemon';

test('Установка значения distance больше 4', () => {
  const daemon = new Daemon();
  daemon.distance = 5;
  expect(daemon.distance).toBe(4);
});

test('Установка значения distance меньше или равно 4', () => {
  const daemon = new Daemon();
  daemon.distance = 3;
  expect(daemon.distance).toBe(3);
});

test('Получение значения distance', () => {
  const daemon = new Daemon();
  daemon.distance = 2;
  expect(daemon.distance).toBe(2);
});
