import { CardTheme } from "../components/Card/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";
export interface YayTheme {
    siteWidth: number;
    isDark: boolean;
    colors: Colors;
    card: CardTheme;
    modal: ModalTheme;
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
