import { validateHex, validateRGB, validateRGBA } from './validation';

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
 * Convert a RGB or RGBA value to a hexadecimal string
 * @param rgb | RGB/RGBA value to be converted to hexadecimal
 * @returns {string}
 */
const rgbToHex = (rgb: string): string => {
  // Remove spaces from string
  rgb = rgb.replace(/\s/g, '');
  const isValid = validateRGBA(rgb) || validateRGB(rgb);
  if (!isValid) throw new Error('Invalid RGB string!');
  const isRgba = rgb.substring(0, 4) === 'rgba';
  // Remove 'rgb' or 'rgba' prefix
  rgb = isRgba ? rgb.substring(4) : rgb.substring(3);
  // Remove parenthesis
  rgb = rgb.substring(1, rgb.length - 1);
  const arr = rgb.split(',');
  if (arr.length < 4) arr.push('0');
  return `#${decToHex(parseInt(arr[0]))}${decToHex(parseInt(arr[1]))}${decToHex(parseInt(arr[2]))}${decToHex(parseInt(arr[3]))}`;
};

export { hexToDec, hexToRgba, decToHex, rgbToHex };
