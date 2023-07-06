import { ColorTheme, Palette } from '../types';
import { getTextColor, updateOpacity } from '../utils';

/**
 * Hook that returns a theme object based on a palette
 * @param {Palette} | Custom palette to build theme off of
 * @returns {ColorTheme}
 */
const useTheme = ({
  primary,
  secondary,
  action,
}: Palette): { theme: ColorTheme } => {
  const primaryTextColor = getTextColor(primary);
  const secondaryTextColor = getTextColor(secondary);
  const actionTextColor = getTextColor(action);

  return {
    theme: {
      primary: {
        base: primary,
        soft: updateOpacity(primary, 0.2),
        heavy: primary,
        disabled: primary,
        hover: primary,
        text: {
          base: primaryTextColor,
          soft: updateOpacity(primaryTextColor, 0.2),
          disabled: updateOpacity(primaryTextColor, 0.5),
        },
      },
      secondary: {
        base: secondary,
        soft: updateOpacity(secondary, 0.2),
        heavy: secondary,
        disabled: secondary,
        hover: secondary,
        text: {
          base: secondaryTextColor,
          soft: updateOpacity(secondaryTextColor, 0.2),
          disabled: updateOpacity(secondaryTextColor, 0.5),
        },
      },
      action: {
        base: action,
        soft: updateOpacity(action, 0.2),
        heavy: action,
        disabled: action,
        hover: action,
        text: {
          base: actionTextColor,
          soft: updateOpacity(actionTextColor, 0.2),
          disabled: updateOpacity(actionTextColor, 0.5),
        },
      },
    },
  };
};

export { useTheme };
