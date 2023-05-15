import { describe, expect, test } from '@jest/globals';
import { validateHex, validateRGB, validateRGBA, validateUnknown } from '../validation';
import { ColorType } from '../types';

describe('Validation module', () => {
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
  });

  // validateUnknown uses the functions above behind the scenes
  // so the test cases do not have to be as comprehensive
  test('validateUnknown accepts valid Hex, RGB, & RGBA strings', () => {
    expect(validateUnknown('#000000')).toEqual(ColorType.HEX);
    expect(validateUnknown('#000')).toEqual(ColorType.HEX);
    expect(validateUnknown('#00000000')).toEqual(ColorType.HEX);
    expect(validateUnknown('#ffffff')).toEqual(ColorType.HEX);
    expect(validateUnknown('rgb(0,0,0)')).toEqual(ColorType.RGB);
    expect(validateUnknown('rgb(0, 0, 0)')).toEqual(ColorType.RGB);
    expect(validateUnknown('rgb(255,255,255)')).toEqual(ColorType.RGB);
    expect(validateUnknown('rgba(0,0,0,0)')).toEqual(ColorType.RGBA);
    expect(validateUnknown('rgba(0, 0, 0, 0)')).toEqual(ColorType.RGBA);
    expect(validateUnknown('rgba(255,255,255,255)')).toEqual(ColorType.RGBA);
  });

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
    expect(validateUnknown('#00')).toEqual(ColorType.INVALID);
    expect(validateUnknown('#0000')).toEqual(ColorType.INVALID);
    expect(validateUnknown('#0000000')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rgba(-1, 0, 0, 0)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rgba(256,255,255,255)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rbga(25,0,12,255)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rg(0,0,0)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rgb(0, 256, 0)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rgb(-1,255,255)')).toEqual(ColorType.INVALID);
    expect(validateUnknown('rbg(25,0,255)')).toEqual(ColorType.INVALID);
  });
});
