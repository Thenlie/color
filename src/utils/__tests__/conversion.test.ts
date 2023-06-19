import { describe, expect, test } from '@jest/globals';
import { hexToDec, hexToRgba, decToHex, rgbToHex, rgbToRgba, unknownToRgba, rgbaToArray } from '../conversion';

describe('Conversion module (passing ✅)', () => {
    test('hexToDec correctly converts hexadecimal to decimal', () => {
        expect(hexToDec('00')).toEqual(0);
        expect(hexToDec('ff')).toEqual(255);
        expect(hexToDec('3b')).toEqual(59);
    });
    test('hexToRgba correctly converts hexadecimal to RGBA', () => {
        expect(hexToRgba('#000000')).toEqual('rgba(0,0,0,0)');
        expect(hexToRgba('#ffffff')).toEqual('rgba(255,255,255,0)');
        expect(hexToRgba('#aabbcc')).toEqual('rgba(170,187,204,0)');
        expect(hexToRgba('#003400')).toEqual('rgba(0,52,0,0)');
        expect(hexToRgba('#2aff00')).toEqual('rgba(42,255,0,0)');
        expect(hexToRgba('#ffffffff')).toEqual('rgba(255,255,255,255)');
        expect(hexToRgba('#000000ff')).toEqual('rgba(0,0,0,255)');
    });
    test('decToHex correctly converts decimal to hexadecimal', () => {
        expect(decToHex(0)).toEqual('00');
        expect(decToHex(255)).toEqual('ff');
        expect(decToHex(60)).toEqual('3c');
        expect(decToHex(42)).toEqual('2a');
        expect(decToHex(52)).toEqual('34');
    });
    test('rgbToHex correctly converts RGB to hexadecimal', () => {
        expect(rgbToHex('rgb(0,0,0)')).toEqual('#00000000');
        expect(rgbToHex('rgb(255,255,255)')).toEqual('#ffffff00');
        expect(rgbToHex('rgb(24,134,0)')).toEqual('#18860000');
        expect(rgbToHex('rgb(143,214,12)')).toEqual('#8fd60c00');
        expect(rgbToHex('rgb(12,6,123)')).toEqual('#0c067b00');
        expect(rgbToHex('rgb(0,255,123)')).toEqual('#00ff7b00');
    });
    test('rgbToRgba correctly converts RGB to RGBA', () => {
        expect(rgbToRgba('rgb(0,0,0)')).toEqual('rgba(0,0,0,0)');
        expect(rgbToRgba('rgb(255,255,255)')).toEqual('rgba(255,255,255,0)');
        expect(rgbToRgba('rgb(13,156,24)')).toEqual('rgba(13,156,24,0)');
        expect(rgbToRgba('rgb(56,67,3)')).toEqual('rgba(56,67,3,0)');
        expect(rgbToRgba('rgb(123,255,0)')).toEqual('rgba(123,255,0,0)');
        expect(rgbToRgba('rgb(7,255,245)')).toEqual('rgba(7,255,245,0)');
    });
    test('unknownToRgba correctly converts any valid color string to RGBA', () => {
        expect(unknownToRgba('#000000')).toEqual('rgba(0,0,0,0)');
        expect(unknownToRgba('#ffffff')).toEqual('rgba(255,255,255,0)');
        expect(unknownToRgba('rgb(0,0,0)')).toEqual('rgba(0,0,0,0)');
        expect(unknownToRgba('rgb(255,255,255)')).toEqual('rgba(255,255,255,0)');
        expect(unknownToRgba('rgba(255,255,255,0)')).toEqual('rgba(255,255,255,0)');
        expect(unknownToRgba('rgba(0,0,0,0)')).toEqual('rgba(0,0,0,0)');
    });
    test('rgbaToArray correctly converts RGBA to an array of values', () => {
        expect(rgbaToArray('rgba(0,0,0,0)')).toEqual(['0', '0', '0', '0']);
        expect(rgbaToArray('rgba(255,255,255,1)')).toEqual(['255', '255', '255', '1']);
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
