// Accepted lengths of hex strings including '#'
const VALID_HEX_LENGTHS = [4, 7, 9];
const VALID_HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

/**
 * Check if a provided string is a valid hex value
 * @param hex | Hex value to be validated
 * @returns {boolean}
 */
const validateHex = (hex: string): boolean => {
  if (hex.charAt(0) !== '#') {
    console.error("Invalid hex string! Not prefixed with '#'.");
    return false;
  }
  if (!VALID_HEX_LENGTHS.includes(hex.length)) {
    console.error(`Invalid hex string! String length must be ${VALID_HEX_LENGTHS.join(',')} including the '#'.`);
    return false;
  }
  // Remove '#' prefix
  hex = hex.substring(1);
  // Ensure each value is within 00-ff
  let isValid = true;
  hex.split('').every((x) => {
    if (!VALID_HEX_CHARS.includes(x)) {
      console.error(`Invalid hex string! String must only contain [${VALID_HEX_CHARS.join(',')}].`);
      isValid = false;
      return false;
    }
    return true;
  });
  return isValid;
};

/**
 * Check if provided string is a valid rgb or rgba value
 * @param rgba | Rgba value to be validated
 * @returns {boolean}
 */
const validateRgba = (rgba: string): boolean => {
  // Remove spaces from string
  rgba = rgba.replace(/\s/g, '');
  const regex = /rgba?\((\d{1,3},){2,3}\d{1,3}\)/gm;
  if (!regex.test(rgba)) return false;
  const isRgba = rgba.substring(0, 4) === 'rgba';
  // Remove 'rgb' or 'rgba' prefix
  rgba = isRgba ? rgba.substring(4) : rgba.substring(3);
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

export { VALID_HEX_CHARS, VALID_HEX_LENGTHS, validateHex, validateRgba };
