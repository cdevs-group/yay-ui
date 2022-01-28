import { darkColors, lightColors, purpleColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.background,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.background,
};

export const purple: ToggleTheme = {
  handleBackground: purpleColors.background,
};
