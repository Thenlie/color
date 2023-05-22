import { describe, expect, test } from '@jest/globals';
import { getContrastRatio, getLuminosity } from '../calculation';

describe('Calculation module', () => {
    test('getLuminosity returns the correct luminance of a given color', () => {
        expect(getLuminosity('rgba(0,0,0,0)')).toBe(0);
        expect(getLuminosity('rgba(255,255,255,255)')).toBe(1);
        expect(getLuminosity('#000000')).toBe(0);
        expect(getLuminosity('#ffffff')).toBe(1);
        expect(getLuminosity('#01d3a8')).toBeCloseTo(0.49422137476, 5);
        expect(getLuminosity('#ababab')).toBeCloseTo(0.40724021190, 5);
    })
    test('getContrast ratio returns the correct contrast ration of two given colors', () => {
        expect(getContrastRatio('#ffffff', '#000000')).toBe(21);
        expect(getContrastRatio('#01d3a8', '#ababab')).toBeCloseTo(1.190230781, 5);
        expect(getContrastRatio('#01d3a8', '#000000')).toBeCloseTo(10.88442749, 5);
    })
});
