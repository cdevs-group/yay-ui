/// <reference types="react" />
import { BackgroundProps } from "styled-system";
import { CardProductProp } from "../../types";
interface WrapProps extends BackgroundProps {
    closed?: boolean;
    bg?: string;
    small?: boolean;
}
export declare const setColor: (param: {
    bg?: string;
}) => "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);" | "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);" | "linear-gradient(180deg, #BDFF00 0%, #95CA00 100%);" | "linear-gradient(180deg, #CA61FB 0%, #B255DE 100%);" | "#9361FF" | "#ECC2DD;";
declare const CardProduct: ({ title, img, bg, backgroundImage, closed, href, externalLink, isNotLink, small, propsWrapperCard, ...props }: CardProductProp) => JSX.Element;
export default CardProduct;
export declare const CardWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapProps, never>;
export declare const CardTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../Text").TextProps & {
    small?: boolean | undefined;
}, never>;
