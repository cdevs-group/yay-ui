/// <reference types="react" />
export declare const ButtonStyle: import("styled-components").StyledComponent<{
    <E extends import("react").ElementType<any> = "button">(props: import("../..").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Network: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {}, never>;
export declare const Reward: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps & {
    loading?: boolean | undefined;
}, never>;
export declare const ButtonTextMob: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps & {
    loading?: boolean | undefined;
} & {
    loading?: boolean | undefined;
}, never>;
export declare const TitleStyle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps, never>;
export declare const DescriptionStyle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps, never>;
