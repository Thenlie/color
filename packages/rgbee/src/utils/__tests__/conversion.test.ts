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
import { normalColors, upperCaseHex } from '../__fixtures__/fixtures';

describe('Conversion module (passing ✅)', () => {
  test('hexToDec correctly converts hexadecimal to decimal', () => {
    expect(hexToDec('00')).toEqual(0);
    expect(hexToDec('ff')).toEqual(255);
    expect(hexToDec('3b')).toEqual(59);
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
  test('rgbaToArray correctly converts RGBA to an array of values', () => {
    expect(rgbaToArray('rgba(0,0,0,0)')).toEqual(['0', '0', '0', '0']);
    expect(rgbaToArray('rgba(255,255,255,1)')).toEqual([
      '255',
      '255',
      '255',
      '1',
    ]);
    expect(rgbaToArray('rgba(1,23,234,1)')).toEqual(['1', '23', '234', '1']);
    expect(rgbaToArray('rgba(34,5,21,0)')).toEqual(['34', '5', '21', '0']);
  });
});

describe('Conversion module (failing ❌)', () => {
  test('hexToRgba throws error when given invalid hex string', () => {
    expect(() => hexToRgba('abc')).toThrow('Invalid hex string!');
    expect(() => hexToRgba('#ffff')).toThrow('Invalid hex string!');
    expect(() => hexToRgba('#fffffffff')).toThrow('Invalid hex string!');
    expect(() => hexToRgba('00000z')).toThrow('Invalid hex string!');
    expect(() => hexToRgba('')).toThrow('Invalid hex string!');
  });
  test('rgbToHex throws error when given invalid rgb string', () => {
    expect(() => rgbToHex('abc')).toThrow('Invalid RGB string!');
    expect(() => rgbToHex('#ffffff')).toThrow('Invalid RGB string!');
    expect(() => rgbToHex('rbg(0,0,0)')).toThrow('Invalid RGB string!');
    expect(() => rgbToHex('')).toThrow('Invalid RGB string!');
    // expect(() => rgbToHex('rgba(0,0,0,0)')).toThrow('Invalid RGB string!');
  });
  test('rgbToRgba throws error when given invalid rgb string', () => {
    expect(() => rgbToRgba('abc')).toThrow('Invalid RGB string!');
    expect(() => rgbToRgba('#ffffff')).toThrow('Invalid RGB string!');
    expect(() => rgbToRgba('rbg(0,0,0)')).toThrow('Invalid RGB string!');
    expect(() => rgbToRgba('')).toThrow('Invalid RGB string!');
    // expect(() => rgbToRgba('rgba(0,0,0,0)')).toThrow('Invalid RGB string!');
  });
  test('unknownToRgba throws error when given invalid color string', () => {
    expect(() => unknownToRgba('abc')).toThrow('Invalid color string!');
    expect(() => unknownToRgba('#ffff')).toThrow('Invalid color string!');
    expect(() => unknownToRgba('rbg(0,0,0)')).toThrow('Invalid color string!');
    expect(() => unknownToRgba('')).toThrow('Invalid color string!');
  });
  test('rgbaToArray throws error when given invalid RGBA string', () => {
    expect(() => rgbaToArray('abc')).toThrow('Invalid RGBA string!');
    expect(() => rgbaToArray('#fff')).toThrow('Invalid RGBA string!');
    expect(() => rgbaToArray('#ffffff')).toThrow('Invalid RGBA string!');
    expect(() => rgbaToArray('rgb(0,0,0)')).toThrow('Invalid RGBA string!');
  });
});
