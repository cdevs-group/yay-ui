import { InputProps } from "./types";
import { SpaceProps, BackgroundProps, BoxShadowProps } from "styled-system";
export interface StyledInputProps extends InputProps, SpaceProps, BackgroundProps, BoxShadowProps {
    placeholderOpacity?: boolean;
}
declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyledInputProps, never>;
export default Input;
