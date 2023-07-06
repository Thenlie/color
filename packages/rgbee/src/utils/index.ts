import {
  validateHex,
  validateRGBA,
  validateRGB,
  validateUnknown,
  validateColorType,
  validatePalette,
} from './validation';
import {
  hexToDec,
  hexToRgba,
  decToHex,
  rgbToHex,
  rgbToRgba,
  unknownToRgba,
  rgbaToArray,
} from './conversion';
import { getLuminosity, getContrastRatio, getTextColor } from './calculation';

export {
  getLuminosity,
  getContrastRatio,
  getTextColor,
  hexToDec,
  hexToRgba,
  decToHex,
  rgbToHex,
  rgbToRgba,
  unknownToRgba,
  rgbaToArray,
  validateHex,
  validateRGBA,
  validateRGB,
  validateUnknown,
  validateColorType,
  validatePalette,
};
