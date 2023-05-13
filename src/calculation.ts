// TODO: getLuminosity
/**
 * Calculate the relative luminance of a given color
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color | Color to find luminance of
 * @returns {string}
 */
const getLuminosity = (color: string): string => {
  return 'TODO';
};

// TODO: getContrastRatio
/**
 * Calculate the contrast ratio of two given colors
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
