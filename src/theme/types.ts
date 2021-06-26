export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  greenGradient: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  background2: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  overlayBg: string;
  linkColor: string;
  buttonBg: string;
  buttonShadow: string;
  green: string;
  greenGradient2: string;
  cardBg: string;
  greyText: string;
  greyText2: string;
  darkGreyBg: string;
  orangeBg: string;
  greenBg: string;
  redBg: string;
  yellowBg: string;
  yellowBg2: string;
  greenText: string;
  lightGreyBg: string;
  blackColor: string;
  greenText2: string;
  panel: string;
  boxShadow: string;
  textGray: string;
  boxShadow3: string;
  boxShadow4: string;
  textGray2: string;
  dark: string;
  boxShadow5: string;
  textShadow: string;
  greenGradient: string;
  boxShadow2: string;
  bgGray: string;
  textShadow2: string;
  textShadow3: string;
  bgOpacity: string;
  bgOpacity2: string;
  bgBlackRgba: string;
  whiteRgba: string;
  cardShadow: string;
  bgCard: string;
  yellow: string;
  bgHeader: string;
  buttonBg2: string;
  bgCardBtc: string;
  colorCardBtc: string;
  bgCardBtc2: string;
  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
