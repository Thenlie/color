import { rgbaToArray, unknownToRgba } from './conversion';

// TODO: getLuminosity
/**
 * Calculate the relative luminance of a given color
 * Formula: 0.2126 * R + 0.7152 * G + 0.0722 * B
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color | Color to find luminance of. Accepts RGB, RGBA & Hex
 * @returns {string}
 */
const getLuminosity = (color: string): string => {
  const rgba = unknownToRgba(color);
  const array = rgbaToArray(rgba);
  const r = parseInt(array[0]) / 255;
  const g = parseInt(array[1]) / 255;
  const b = parseInt(array[2]) / 255;
  return 'TODO';
};

// TODO: getContrastRatio
/**
 * Calculate the contrast ratio of two given colors
 * Formula: (L1 + 0.05) / (L2 + 0.05)
 * @param background | The background color
 * @param foreground | The foreground color
 * @returns {string}
 */
const getContrastRatio = (background: string, foreground: string): string => {
  return 'TODO';
};

// TODO: getTextColor
/**
 * Get the proper text color given some background color
 * Returns either black or white depending which has a better contrast ratio
 * @param background | Background color text will appear on
 * @returns {string}
 */
const getTextColor = (background: string): string => {
  return 'TODO';
};

export { getLuminosity, getContrastRatio, getTextColor };
