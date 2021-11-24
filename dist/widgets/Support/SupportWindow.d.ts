import { ReactNode } from "react";
import { IStateInput, ITexts } from "./types";
declare const SupportWindow: ({ texts, state, handleInput, product, handleButton, points, }: {
    points: ReactNode[];
    handleButton: () => void | Promise<void>;
    texts: ITexts;
    product: string[];
    issues: string[];
    state: IStateInput;
    handleInput: (e: any) => void;
}) => JSX.Element;
export default SupportWindow;
export declare const StyledSupport: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
