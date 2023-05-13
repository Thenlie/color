import { validateHex, validateRgba } from './validation';

/**
 * Convert a hexadecimal number to decimal
 * @param hex | Hex value to be converted to a string
 * @returns {number}
 */
const hexToDec = (hex: string): number => {
  return parseInt(hex, 16);
};

/**
 * Convert a hex value to a rgba string
 * Accepts 3, 6 or 8 digit hex strings prefixed with '#'
 * @param hex | Hex value to be converted to rgba
 * @returns {string}
 */
const hexToRgba = (hex: string): string => {
  const isValid = validateHex(hex);
  if (!isValid) throw new Error('Invalid hex string!');
  // Remove '#' prefix
  hex = hex.substring(1);
  // Split string into array of hex values (1 or 2 digits!)
  // These will be in rgba order
  const arr = hex.length === 3 ? hex.split('') : hex.match(/.{2}/g);
  if (!arr) throw new Error('Something went wrong!');
  // Fill in alpha value if needed
  if (arr.length < 4) arr.push('0');
  return `rgba(${hexToDec(arr[0])},${hexToDec(arr[1])},${hexToDec(arr[2])},${hexToDec(arr[3])})`;
};

/**
 * Convert a decimal number to hexadecimal
 * @param dec | Decimal number to be converted to hex
 * @returns {string}
 */
const decToHex = (dec: number): string => {
  let hex = dec.toString(16);
  if (hex.length < 2) hex = '0' + hex;
  return hex;
};

/**
 * Convert a rgba or rgb value to a hex string
 * @param rgba | Rgba value to be converted to hex
 * @returns {string}
 */
const rgbaToHex = (rgba: string): string => {
  // Remove spaces from string
  rgba = rgba.replace(/\s/g, '');
  const isValid = validateRgba(rgba);
  if (!isValid) throw new Error('Invalid rgba string!');
  const isRgba = rgba.substring(0, 4) === 'rgba';
  // Remove 'rgb' or 'rgba' prefix
  rgba = isRgba ? rgba.substring(4) : rgba.substring(3);
  // Remove parenthesis
  rgba = rgba.substring(1, rgba.length - 1);
  const arr = rgba.split(',');
  if (arr.length < 4) arr.push('0');
  return `#${decToHex(parseInt(arr[0]))}${decToHex(parseInt(arr[1]))}${decToHex(parseInt(arr[2]))}${decToHex(parseInt(arr[3]))}`;
};

export { hexToDec, hexToRgba, decToHex, rgbaToHex };
