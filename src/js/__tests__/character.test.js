import { test, expect } from '@jest/globals';

import Character from '../character';

test('Получение атаки персонажа без эффекта "stoned"', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 2;
  expect(character.attack).toBe(90); // Изменено ожидаемое значение на 90
});

test('Получение атаки персонажа с эффектом "stoned"', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85); // Изменено ожидаемое значение на 85
});

test('Получение атаки персонажа без эффекта "stoned" и дистанцией больше 0', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test('Получение атаки персонажа без эффекта "stoned" и дистанцией равной 0', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 0;
  expect(character.attack).toBe(0);
});

test('Получение атаки персонажа с эффектом "stoned" и дистанцией больше 0', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test('Получение атаки персонажа с эффектом "stoned" и дистанцией равной 0', () => {
  const character = new Character();
  character.attackPower = 100;
  character.distance = 0;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test('Установка отрицательного значения дистанции выбрасывает исключение', () => {
  const character = new Character();
  expect(() => {
    character.distance = -1;
  }).toThrow(Error);
});
