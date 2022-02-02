import React from "react";
import { ButtonProps } from "../../components/Button";
interface IProps {
    data: {
        totalRaised: string;
        total: string;
        left?: string;
    };
    texts: {
        title: string;
        button: string;
        totalRaised: string;
        total: string;
        left?: string;
    };
    disabledCardClaimTokens?: boolean;
    progress: string | number;
    propsBtnClaimTokens?: ButtonProps;
}
declare const ClaimTokens: ({ data, texts, propsBtnClaimTokens, disabledCardClaimTokens, progress }: IProps) => JSX.Element;
export declare const Wrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Blur: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabledCard?: boolean | undefined;
}, never>;
export declare const Card: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabledCard?: boolean | undefined;
}, never>;
export declare const StyledTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Text").TextProps, never>;
export declare const StyledButton: import("styled-components").StyledComponent<{
    <E extends React.ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, import("../../components/Button").BaseButtonProps & import("../../components/Button/types").AsProps<React.ElementType<any>> & Omit<any, "as">, never>;
export default ClaimTokens;
