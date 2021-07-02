import { AlertTheme } from "../components/Alert/types";
import { CardTheme } from "../components/Card/types";
import { ToggleTheme } from "../components/Toggle/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface YayTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  alert: AlertTheme;
  modal: ModalTheme;
  toggle: ToggleTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
