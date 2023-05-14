import { describe, expect, test } from '@jest/globals';
import { validateHex } from '../validation';

describe('Calculation module', () => {
  test('validateHex accepts valid hex strings', () => {
    expect(validateHex('#000000')).toEqual(true);
  });
});
