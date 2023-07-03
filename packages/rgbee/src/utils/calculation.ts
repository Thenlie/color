import { rgbaToArray, unknownToRgba } from './conversion';

/**
 * Calculate the relative luminance of a given color.
 * Accepts RGB, RGBA & Hex.
 * Formula: 0.2126 * R + 0.7152 * G + 0.0722 * B
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color | Color to find luminance of
 * @returns {number}
 */
const getLuminosity = (color: string): number => {
  // TODO: Consider the alpha value
  const rgba = unknownToRgba(color);
  const array = rgbaToArray(rgba);
  const r = parseInt(array[0]) / 255;
  const g = parseInt(array[1]) / 255;
  const b = parseInt(array[2]) / 255;
  const R = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
  const G = g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4;
  const B = b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4;
  const luminosity = 0.2126 * R + 0.7152 * G + 0.0722 * B;
  return luminosity;
};

/**
 * Calculate the contrast ratio of two given colors.
 * Accepts RGB, RGBA & Hex.
 * Formula: (L1 + 0.05) / (L2 + 0.05)
 * @param background | The background color
 * @param foreground | The foreground color
 * @returns {number}
 */
const getContrastRatio = (background: string, foreground: string): number => {
  const backgroundLum = getLuminosity(background);
  const foregroundLum = getLuminosity(foreground);
  const L1 = backgroundLum >= foregroundLum ? backgroundLum : foregroundLum;
  const L2 = backgroundLum >= foregroundLum ? foregroundLum : backgroundLum;
  const contrastRatio = (L1 + 0.05) / (L2 + 0.05);
  return contrastRatio;
};

/**
 * Get the proper text color given some background color.
 * Returns an RGBA string of either black or white
 * depending which has a higher contrast ratio
 * @param background | Background color text will appear on
 * @returns {string}
 */
const getTextColor = (background: string): string => {
  const rgba = unknownToRgba(background);
  if (getLuminosity(rgba) > 0.5) {
    return 'rgba(0,0,0,0)';
  } else {
    return 'rgba(255,255,255,0)';
  }
};

export { getLuminosity, getContrastRatio, getTextColor };
