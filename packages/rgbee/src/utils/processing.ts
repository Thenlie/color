import { unknownToRgba } from './conversion';
import { validateRGBA, validateUnknown } from './validation';

/**
 * Update the opacity value of a given color
 * Returns RGBA format
 * @param color | Color opacity will be added to
 * @param opacity | Opacity value from 0.0 - 1.0
 * @returns {string}
 */
const updateOpacity = (color: string, opacity: number): string => {
  let isValid = validateUnknown(color);
  // TODO: Create opacity validation function
  if (!isValid) throw new Error('Invalid color string!');
  const rgba = unknownToRgba(color);
  const newRgba = rgba.replace(
    /,(\d\.\d|\d{1,3})\)/gm,
    `,${opacity.toString()})`
  );
  isValid = validateRGBA(newRgba);
  if (!isValid) throw new Error('Invalid color string!' + newRgba);
  return newRgba;
};

export { updateOpacity };
