import { defaultTheme } from './defaultThemes';
import { ColorTheme } from './types';

const ThemeContext = React.createContext({
  theme: {} as ColorTheme,
});

/**
 * Hook that returns a theme object
 */
const useTheme = () => {
  return {};
};

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ColorTheme;
}

/**
 * Context Provider that returns a custom theme
 * Wrap your application in this provider to use the custom theme
 * TODO: Create default theme as fallback
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
 */
const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={useMemo(() => ({ theme }), [theme])}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
