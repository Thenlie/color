import { getTextColor } from './calculation';
import { defaultPalette } from './defaultThemes';
import { ColorTheme, Palette } from './types';

// TODO: Check if we should initialize to defaultTheme
const ThemeContext = React.createContext({
  theme: {} as ColorTheme,
});

/**
 * Hook that returns a theme object
 * @param {Palette} | Custom palette to build theme off of
 * @returns {ColorTheme}
 */
const useTheme = ({ primary, secondary, action }: Palette): ColorTheme => {
  return {
    theme: {
      primary: {
        base: primary,
        text: {
          base: getTextColor(primary),
        },
      },
      secondary: {
        base: secondary,
        text: {
          base: getTextColor(secondary),
        },
      },
      action: {
        base: action,
        text: {
          base: getTextColor(action),
        },
      },
    },
  };
};

interface ThemeProviderProps {
  children: React.ReactNode;
  palette: Palette;
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
 *   const { theme } = useContext();
 * }
 * ```
 *
 * TODO: Validate palette before passing to provider
 */
const ThemeProvider = ({ children, palette = defaultPalette }: ThemeProviderProps) => {
  const { theme } = useTheme(palette);
  return <ThemeContext.Provider value={useMemo(() => ({ theme }), [theme])}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
