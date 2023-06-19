import { test, expect } from '@jest/globals';

import ArrayBufferConverter from '../arraybufferconverter';

test('load() загружает данные в буфер', () => {
  const converter = new ArrayBufferConverter();
  const buffer = new ArrayBuffer(10);
  converter.load(buffer);
  expect(converter.buffer).toBe(buffer);
});

test('toString() возвращает пустую строку, если буфер не загружен', () => {
  const converter = new ArrayBufferConverter();
  const result = converter.toString();
  expect(result).toBe('');
});

test('toString() преобразует ArrayBuffer в строку', () => {
  const converter = new ArrayBufferConverter();
  const buffer = new ArrayBuffer(12);
  const view = new Uint8Array(buffer);
  view[0] = 72;
  view[1] = 101;
  view[2] = 108;
  view[3] = 108;
  view[4] = 111;
  view[5] = 33;
  view[6] = 32;
  view[7] = 87;
  view[8] = 111;
  view[9] = 114;
  view[10] = 108;
  view[11] = 100;
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toBe('Hello! World');
});
