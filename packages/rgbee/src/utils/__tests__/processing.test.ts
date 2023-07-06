import { describe, expect, test } from '@jest/globals';
import { updateOpacity } from '../processing';

describe('Processing module', () => {
  test('updateOpacity correctly updates a given colors opacity value', () => {
    expect(updateOpacity('#000000', 1)).toEqual('rgba(0,0,0,1)');
    expect(updateOpacity('#ffffff00', 1)).toEqual('rgba(255,255,255,1)');
    expect(updateOpacity('rgb(255,255,255)', 0.5)).toEqual(
      'rgba(255,255,255,0.5)'
    );
    expect(updateOpacity('rgb(0,0,0)', 1)).toEqual('rgba(0,0,0,1)');
    expect(updateOpacity('rgba(132, 23, 2, 1)', 1)).toEqual('rgba(132,23,2,1)');
  });
});
