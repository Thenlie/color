enum ColorType {
  RGB,
  RGBA,
  HEX,
  INVALID,
}

type ColorTheme = {
  theme: {
    primary: {
      base: string;
      soft: string;
      heavy: string;
      disabled: string;
      hover: string;
      text: {
        base: string;
        soft: string;
        disabled: string;
      };
    };
    secondary: {
      base: string;
      disabled: string;
      hover: string;
      heavy: string;
      soft: string;
      text: {
        base: string;
        soft: string;
        disabled: string;
      };
    };
    action: {
      base: string;
      disabled: string;
      hover: string;
      heavy: string;
      soft: string;
      text: {
        base: string;
        soft: string;
        disabled: string;
      };
    };
  };
};

type Palette = {
  primary: string;
  secondary: string;
  action: string;
};

export { ColorType, ColorTheme, Palette };
