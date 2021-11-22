import { ElementType } from "react";
import { ButtonProps } from "../../../components/Button";
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    history?: boolean | undefined;
}, never>;
export declare const TextTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Text").TextProps, never>;
export declare const BetWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Time: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const WinWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    win?: boolean | undefined;
}, never>;
export declare const WinWrapperCollect: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    win?: boolean | undefined;
}, never>;
export declare const ImgWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    claimed?: boolean | undefined;
    hide?: boolean | undefined;
}, never>;
export declare const ButtonStyle: import("styled-components").StyledComponent<{
    <E extends ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, import("../../../components/Button").BaseButtonProps & import("../../../components/Button/types").AsProps<ElementType<any>> & Omit<any, "as">, never>;
export declare const TextStyle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Text").TextProps, never>;
export declare const BetValue: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Text").TextProps & {
    lose?: boolean | undefined;
}, never>;
export declare const TextButton: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Text").TextProps, never>;
export declare const TextButtonMob: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Text").TextProps, never>;
export declare const LoadResult: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LoaderWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimerMob: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    show?: boolean | undefined;
}, never>;
export declare const WaitingBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Box").BoxProps & import("../../../components/Box").FlexProps, never>;
export declare const ScroreBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LoseBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Box").BoxProps & import("../../../components/Box").FlexProps, never>;
export declare const Icons: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PlayerWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../components/Box").BoxProps & import("../../../components/Box").FlexProps, never>;
