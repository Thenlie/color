import { unknownToRgba } from './conversion';
import { validateUnknown } from './validation';

/**
 * Update the opacity value of a given color
 * @param color | Color opacity will be added to
 * @param opacity | Opacity value from 0.0 - 1.0
 * @returns {string}
 */
const updateOpacity = (color: string, opacity: number): string => {
  const isValid = validateUnknown(color);
  // TODO: Create opacity validation function
  if (!isValid) throw new Error('Invalid color string!');
  const rgba = unknownToRgba(color);
  return rgba.replace(/\d{1,3}\)/gm, opacity.toString() + ')');
};

export { updateOpacity };
