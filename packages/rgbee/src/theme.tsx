import React, { useMemo } from 'react';
import { getTextColor } from './utils/calculation';
import { defaultPalette } from './defaultThemes';
import { ColorTheme, Palette } from './types';
import { validatePalette } from './utils/validation';

// TODO: Check if we should initialize to defaultTheme
const ThemeContext = React.createContext({
  theme: {} as ColorTheme,
});

/**
 * Hook that returns a theme object based on a palette
 * @param {Palette} | Custom palette to build theme off of
 * @returns {ColorTheme}
 * @todo Return complete theme. Consider moving to /hooks
 */
const useTheme = ({
  primary,
  secondary,
  action,
}: Palette): { theme: ColorTheme } => {
  return {
    theme: {
      primary: {
        base: primary,
        soft: primary,
        heavy: primary,
        disabled: primary,
        hover: primary,
        text: {
          base: getTextColor(primary),
          soft: getTextColor(primary),
          disabled: getTextColor(primary),
        },
      },
      secondary: {
        base: secondary,
        soft: secondary,
        heavy: secondary,
        disabled: secondary,
        hover: secondary,
        text: {
          base: getTextColor(secondary),
          soft: getTextColor(secondary),
          disabled: getTextColor(secondary),
        },
      },
      action: {
        base: action,
        soft: action,
        heavy: action,
        disabled: action,
        hover: action,
        text: {
          base: getTextColor(action),
          soft: getTextColor(action),
          disabled: getTextColor(action),
        },
      },
    },
  };
};

interface ThemeProviderProps {
  children: React.ReactNode;
  palette?: Palette;
}

/**
 * Context Provider that returns a custom theme based on a given palette
 * Wrap your application in this provider to use the custom theme
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <MyComponent />
 * </ThemeProvider>
 *
 * const MyComponent = () => {
 *   const { theme } = useContext(ThemeContext);
 * }
 * ```
 *
 * @todo Validate palette before passing to provider
 */
const ThemeProvider = ({
  children,
  palette = defaultPalette,
}: ThemeProviderProps) => {
  console.log(palette);
  const isValid = validatePalette(palette);
  if (!isValid) throw new Error('Invalid palette provided to ThemeProvider!');

  const { theme } = useTheme(palette);

  return (
    <ThemeContext.Provider value={useMemo(() => ({ theme }), [theme])}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
