import { describe, expect, test } from '@jest/globals';
import { hexToDec, hexToRgba, decToHex, rgbToHex, rgbToRgba, unknownToRgba, rgbaToArray } from '../conversion';

describe('Conversion module', () => {
  test('hexToDec correctly converts hexadecimal to decimal', () => {
    expect(hexToDec('00')).toEqual(0);
    expect(hexToDec('ff')).toEqual(255);
    expect(hexToDec('3b')).toEqual(59);
  });
  test('hexToRgba correctly converts hexadecimal to RGBA', () => {
    expect(hexToRgba('#000000')).toEqual('rgba(0,0,0,0)');
    expect(hexToRgba('#ffffff')).toEqual('rgba(255,255,255,0)');
  });
  test('decToHex correctly converts decimal to hexadecimal', () => {
    expect(decToHex(0)).toEqual('00');
    expect(decToHex(255)).toEqual('ff');
    expect(decToHex(60)).toEqual('3c');
  });
  test('rgbToHex correctly converts RGB to hexadecimal', () => {
    expect(rgbToHex('rgb(0,0,0)')).toEqual('#00000000');
    expect(rgbToHex('rgb(255,255,255)')).toEqual('#ffffff00');
  });
  test('rgbToRgba correctly converts RGB to RGBA', () => {
    expect(rgbToRgba('rgb(0,0,0)')).toEqual('rgba(0,0,0,0)');
    expect(rgbToRgba('rgb(255,255,255)')).toEqual('rgba(255,255,255,0)');
  });
  test('unknownToRgba correctly converts any valid color string to RGBA', () => {
    expect(unknownToRgba('#000000')).toEqual('rgba(0,0,0,0)');
    expect(unknownToRgba('#ffffff')).toEqual('rgba(255,255,255,0)');
    expect(unknownToRgba('rgb(0,0,0)')).toEqual('rgba(0,0,0,0)');
    expect(unknownToRgba('rgb(255,255,255)')).toEqual('rgba(255,255,255,0)');
    expect(unknownToRgba('rgba(255,255,255,0)')).toEqual('rgba(255,255,255,0)');
  });
  test('rgbaToArray correctly converts RGBA to an array of values', () => {
    expect(rgbaToArray('rgba(0,0,0,0)')).toEqual(['0','0','0','0']);
  });
});
