import React, { useMemo } from 'react';
import { defaultPalette } from './defaultThemes';
import { ColorTheme, Palette } from './types';
import { validatePalette } from './utils/validation';
import { useTheme } from './hooks';

// TODO: Check if we should initialize to defaultTheme
const ThemeContext = React.createContext({
  theme: {} as ColorTheme,
});

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
