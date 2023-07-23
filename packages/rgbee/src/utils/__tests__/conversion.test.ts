import { describe, expect, test } from '@jest/globals';
import {
  hexToDec,
  hexToRgba,
  decToHex,
  rgbToHex,
  rgbToRgba,
  unknownToRgba,
  rgbaToArray,
} from '../conversion';
import { invalidColors, normalColors, upperCaseHex } from '../__fixtures__';

describe('Conversion module (passing ✅)', () => {
  test('hexToDec correctly converts hexadecimal to decimal', () => {
    expect(hexToDec('00')).toEqual(0);
    expect(hexToDec('01')).toEqual(1);
    expect(hexToDec('ff')).toEqual(255);
    expect(hexToDec('3b')).toEqual(59);
    expect(hexToDec('8c')).toEqual(140);
  });
  test('decToHex correctly converts decimal to hexadecimal', () => {
    expect(decToHex(0)).toEqual('00');
    expect(decToHex(255)).toEqual('ff');
    expect(decToHex(60)).toEqual('3c');
    expect(decToHex(42)).toEqual('2a');
    expect(decToHex(52)).toEqual('34');
  });
  test.each(normalColors)(
    'hexToRgba correctly converts valid hex strings',
    ({ hex, rgba }) => {
      expect(hexToRgba(hex)).toEqual(rgba);
    }
  );
  test.each(upperCaseHex)(
    'hexToRgba correctly converts valid upper case hex strings',
    ({ hex, rgba }) => {
      expect(hexToRgba(hex)).toEqual(rgba);
    }
  );
  test.each(normalColors)(
    'rgbToHex correctly converts RGB to hexadecimal',
    ({ hex, rgb }) => {
      expect(rgbToHex(rgb)).toEqual(hex);
    }
  );
  test.each(normalColors)(
    'rgbToRgba correctly converts RGB to RGBA',
    ({ rgb, rgba }) => {
      expect(rgbToRgba(rgb)).toEqual(rgba);
    }
  );
  test.each(normalColors)(
    'unknownToRgba correctly converts any valid color string to RGBA',
    ({ hex, rgb, rgba }) => {
      expect(unknownToRgba(hex)).toEqual(rgba);
      expect(unknownToRgba(rgb)).toEqual(rgba);
    }
  );
  test.each(normalColors)(
    'rgbaToArray correctly converts RGBA to an array of values',
    ({ rgba, array }) => {
      expect(rgbaToArray(rgba)).toEqual(array);
    }
  );
});

describe('Conversion module (failing ❌)', () => {
  test.each(invalidColors)(
    'hexToRgba throws error when given invalid hex string',
    ({ hex }) => {
      expect(() => hexToRgba(hex)).toThrow('Invalid hex string!');
    }
  );
  test.each(invalidColors)(
    'rgbToHex throws error when given invalid rgb string',
    ({ rgb }) => {
      expect(() => rgbToHex(rgb)).toThrow('Invalid RGB string!');
    }
  );
  test.each(invalidColors)(
    'rgbToRgba throws error when given invalid rgb string',
    ({ rgb }) => {
      expect(() => rgbToRgba(rgb)).toThrow('Invalid RGB string!');
    }
  );
  test.each(invalidColors)(
    'unknownToRgba throws error when given invalid color string %s',
    ({ hex, rgb, rgba }) => {
      expect(() => unknownToRgba(hex)).toThrow('Invalid color string!');
      expect(() => unknownToRgba(rgb)).toThrow('Invalid color string!');
      expect(() => unknownToRgba(rgba)).toThrow('Invalid color string!');
    }
  );
  test.each(invalidColors)(
    'rgbaToArray throws error when given invalid RGBA string',
    ({ hex, rgb, rgba }) => {
      expect(() => rgbaToArray(hex)).toThrow('Invalid RGBA string!');
      expect(() => rgbaToArray(rgb)).toThrow('Invalid RGBA string!');
      expect(() => rgbaToArray(rgba)).toThrow('Invalid RGBA string!');
    }
  );
});
