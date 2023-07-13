import { describe, expect, test } from '@jest/globals';
import {
  validateColorString,
  validateColorType,
  validateHex,
  validateOpacity,
  validatePalette,
  validateRGB,
  validateRGBA,
  validateUnknown,
} from '../validation';
import { ColorType } from '../../types';

describe('Validation module passing', () => {
  test('validateHex accepts valid hex strings', () => {
    expect(validateHex('#000000')).toEqual(true);
    expect(validateHex('#000')).toEqual(true);
    expect(validateHex('#00000000')).toEqual(true);
    expect(validateHex('#ffffff')).toEqual(true);
    expect(validateHex('#fff')).toEqual(true);
    expect(validateHex('#ffffffff')).toEqual(true);
  });

  test('validateRGB accepts valid RGB strings', () => {
    expect(validateRGB('rgb(0,0,0)')).toEqual(true);
    expect(validateRGB('rgb(0, 0, 0)')).toEqual(true);
    expect(validateRGB('rgb(255,255,255)')).toEqual(true);
    expect(validateRGB('rgb(25,0,255)')).toEqual(true);
    expect(validateRGB('rgb(1,22,154)')).toEqual(true);
    expect(validateRGB('rgb(11,22,54)')).toEqual(true);
  });

  test('validateRGBA accepts valid RGBA strings', () => {
    expect(validateRGBA('rgba(0,0,0,0)')).toEqual(true);
    expect(validateRGBA('rgba(0, 0, 0, 0)')).toEqual(true);
    expect(validateRGBA('rgba(255,255,255,255)')).toEqual(true);
    expect(validateRGBA('rgba(25,0,12,255)')).toEqual(true);
    expect(validateRGBA('rgba(1,255,255,0)')).toEqual(true);
    expect(validateRGBA('rgba(55,25,255,0)')).toEqual(true);
    expect(validateRGBA('rgba(0,0,0,0.1)')).toEqual(true);
  });

  // validateUnknown uses the functions above behind the scenes
  // so the test cases do not have to be as comprehensive
  test('validateUnknown accepts valid Hex, RGB, & RGBA strings', () => {
    expect(validateUnknown('#000000')).toEqual(true);
    expect(validateUnknown('#000')).toEqual(true);
    expect(validateUnknown('#00000000')).toEqual(true);
    expect(validateUnknown('#ffffff')).toEqual(true);
    expect(validateUnknown('rgb(0,0,0)')).toEqual(true);
    expect(validateUnknown('rgb(0, 0, 0)')).toEqual(true);
    expect(validateUnknown('rgb(255,255,255)')).toEqual(true);
    expect(validateUnknown('rgba(0,0,0,0)')).toEqual(true);
    expect(validateUnknown('rgba(0, 0, 0, 0)')).toEqual(true);
    expect(validateUnknown('rgba(255,255,255,255)')).toEqual(true);
  });

  test('validateColorType returns correct color type', () => {
    expect(validateColorType('#000000')).toEqual(ColorType.HEX);
  });

  test('validateColorString accepts valid color strings', () => {
    expect(validateColorString('red')).toBe(true);
    expect(validateColorString('blue')).toBe(true);
    expect(validateColorString('lightblue')).toBe(true);
    expect(validateColorString('Black')).toBe(true);
    expect(validateColorString('WHITE')).toBe(true);
  });

  test('validatePalette accepts valid color palettes', () => {
    const palette = {
      primary: '#ffff00',
      secondary: '#0fff00',
      action: '#000fff',
    };
    expect(validatePalette(palette)).toEqual(true);
  });

  test('validateOpacity accepts valid opacity values', () => {
    expect(validateOpacity(0.1)).toBe(true);
    expect(validateOpacity(1)).toBe(true);
    expect(validateOpacity(0)).toBe(true);
    expect(validateOpacity(1.0)).toBe(true);
    expect(validateOpacity(0.9)).toBe(true);
    expect(validateOpacity(0.3)).toBe(true);
    expect(validateOpacity(0.0)).toBe(true);
  });
});

describe('Validation module failing', () => {
  test('validateHex rejects invalid hex strings', () => {
    expect(validateHex('rgba(0,0,0,0)')).toEqual(false);
    expect(validateHex('rgb(0,0,0)')).toEqual(false);
    expect(validateHex('#00')).toEqual(false);
    expect(validateHex('#00000')).toEqual(false);
    expect(validateHex('#0000000')).toEqual(false);
  });

  test('validateRGB rejects invalid RGB strings', () => {
    expect(validateRGB('#000000')).toEqual(false);
    expect(validateRGB('rgba(0,0,0,0)')).toEqual(false);
    expect(validateRGB('rg(0,0,0)')).toEqual(false);
    expect(validateRGB('rgb(0, 256, 0)')).toEqual(false);
    expect(validateRGB('rgb(-1,255,255)')).toEqual(false);
    expect(validateRGB('rbg(25,0,255)')).toEqual(false);
  });

  test('validateRGBA rejects invalid RGBA strings', () => {
    expect(validateRGBA('#000000')).toEqual(false);
    expect(validateRGBA('rgb(0,0,0)')).toEqual(false);
    expect(validateRGBA('rgba(0,0,0)')).toEqual(false);
    expect(validateRGBA('rgba(-1, 0, 0, 0)')).toEqual(false);
    expect(validateRGBA('rgba(256,255,255,255)')).toEqual(false);
    expect(validateRGBA('rbga(25,0,12,255)')).toEqual(false);
  });

  test('validateUnknown rejects invalid color strings', () => {
    expect(validateUnknown('#00')).toEqual(false);
    expect(validateUnknown('#0000')).toEqual(false);
    expect(validateUnknown('#0000000')).toEqual(false);
    expect(validateUnknown('rgba(-1, 0, 0, 0)')).toEqual(false);
    expect(validateUnknown('rgba(256,255,255,255)')).toEqual(false);
    expect(validateUnknown('rbga(25,0,12,255)')).toEqual(false);
    expect(validateUnknown('rg(0,0,0)')).toEqual(false);
    expect(validateUnknown('rgb(0, 256, 0)')).toEqual(false);
    expect(validateUnknown('rgb(-1,255,255)')).toEqual(false);
    expect(validateUnknown('rbg(25,0,255)')).toEqual(false);
  });

  test('validateColorType returns invalid color type', () => {
    expect(validateColorType('#00')).toEqual(ColorType.INVALID);
  });

  test('validateColorString rejects invalid color strings', () => {
    expect(validateColorString('deg')).toBe(false);
    expect(validateColorString('wite')).toBe(false);
  });

  test('validatePalette rejects invalid color palettes', () => {
    const palette = {
      primary: '#ff',
      secondary: '#0fff00',
      action: '#000fff',
    };
    expect(validatePalette(palette)).toEqual(false);
  });

  test('validateOpacity rejects invalid opacity values', () => {
    expect(validateOpacity(2)).toBe(false);
    expect(validateOpacity(3)).toBe(false);
    expect(validateOpacity(0.12)).toBe(false);
    expect(validateOpacity(1.1)).toBe(false);
    expect(validateOpacity(1.9)).toBe(false);
    expect(validateOpacity(2.3)).toBe(false);
    expect(validateOpacity(0.99)).toBe(false);
  });
});
