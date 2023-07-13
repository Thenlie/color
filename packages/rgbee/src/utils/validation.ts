/* eslint-disable no-console */
import { ColorType, Palette } from '../types';
import {
  VALID_COLOR_STRINGS,
  VALID_HEX_CHARS,
  VALID_HEX_LENGTHS,
} from '../constants';

/**
 * Check if a provided string is a valid hex value
 * @param hex | Hex value to be validated
 * @returns {boolean}
 */
export const validateHex = (hex: string): boolean => {
  if (hex.charAt(0) !== '#') {
    console.error(`Invalid hex string ${hex}! Not prefixed with '#'.`);
    return false;
  }
  if (!VALID_HEX_LENGTHS.includes(hex.length)) {
    console.error(
      `Invalid hex string! String length must be ${VALID_HEX_LENGTHS.join(
        ','
      )} including the '#'.`
    );
    return false;
  }
  // Remove '#' prefix
  hex = hex.substring(1);
  // Ensure each value is within 00-ff
  let isValid = true;
  hex.split('').every((x) => {
    if (!VALID_HEX_CHARS.includes(x)) {
      console.error(
        `Invalid hex string! String must only contain [${VALID_HEX_CHARS.join(
          ','
        )}].`
      );
      isValid = false;
      return false;
    }
    return true;
  });
  return isValid;
};

/**
 * Check if provided string is a valid RGB value
 * @param rgb | RGB value to be validated
 * @returns {boolean}
 */
export const validateRGB = (rgb: string): boolean => {
  // Remove spaces from string
  rgb = rgb.replace(/\s/g, '');
  const regex = /rgb\((\d{1,3},){2}\d{1,3}\)/g;
  if (!regex.test(rgb)) return false;
  // Remove 'rgb' prefix
  rgb = rgb.substring(3);
  // Remove parenthesis
  rgb = rgb.substring(1, rgb.length - 1);
  const arr = rgb.split(',');
  // Check that values are between 0-255
  let isValid = true;
  arr.every((x) => {
    if (parseInt(x) < 0 || parseInt(x) > 255) {
      console.error('Invalid rgba string! Values must be between 0-255.');
      isValid = false;
      return false;
    }
    return true;
  });
  return isValid;
};

/**
 * Check if provided string is a valid RGBA value
 * @param rgba | RGBA value to be validated
 * @returns {boolean}
 */
export const validateRGBA = (rgba: string): boolean => {
  // Remove spaces from string
  // TODO: Break out into dedicated function
  rgba = rgba.replace(/\s/g, '');
  const regex = /rgba\((\d{1,3},){3}(\d.\d|\d{1,3})\)/g;
  if (!regex.test(rgba)) return false;
  // Remove 'rgba' prefix
  rgba = rgba.substring(4);
  // Remove parenthesis
  rgba = rgba.substring(1, rgba.length - 1);
  const arr = rgba.split(',');
  // Check that values are between 0-255
  let isValid = true;
  arr.every((x) => {
    if (parseInt(x) < 0 || parseInt(x) > 255) {
      console.error('Invalid rgba string! Values must be between 0-255.');
      isValid = false;
      return false;
    }
    return true;
  });
  return isValid;
};

/**
 * Validate a string of unknown color type
 * Return the color type
 * @param color | Color string to be validated
 * @returns {boolean}
 */
export const validateUnknown = (color: string): boolean => {
  const isHex = validateHex(color);
  if (isHex) return true;
  const isRgba = validateRGBA(color);
  if (isRgba) return true;
  const isRgb = validateRGB(color);
  if (isRgb) return true;
  return false;
};

/**
 * Returns a color type given an unknown color string
 * @param color | Unknown color to be validated
 * @returns {ColorType}
 */
export const validateColorType = (color: string): ColorType => {
  const isHex = validateHex(color);
  if (isHex) return ColorType.HEX;
  const isRgba = validateRGBA(color);
  if (isRgba) return ColorType.RGBA;
  const isRgb = validateRGB(color);
  if (isRgb) return ColorType.RGB;
  return ColorType.INVALID;
};

export const validateColorString = (color: string): boolean => {
  if (VALID_COLOR_STRINGS.includes(color.toLowerCase())) {
    return true;
  }
  return false;
};

/**
 * Validate a custom 3-color palette
 * @param palette | Custom color palette to be validated
 * @returns {boolean}
 */
export const validatePalette = (palette: Palette): boolean => {
  if (!palette.primary || !palette.secondary || !palette.action) return false;
  console.log(validateUnknown(palette.primary));
  const isValid =
    validateUnknown(palette.primary) &&
    validateUnknown(palette.secondary) &&
    validateUnknown(palette.action);
  return isValid;
};

/**
 * Returns true if provided value is between 0.0 - 1.0
 * Must contain no more than one significant figure
 * @param opacity | Opacity value to be validated
 * @returns {boolean}
 */
export const validateOpacity = (opacity: number): boolean => {
  if (opacity === 0 || opacity === 1) return true;
  const regex = /(0.\d|1.0)$/g;
  return regex.test(opacity.toString());
};
