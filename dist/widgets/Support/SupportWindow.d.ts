import { ReactNode } from "react";
import { IStateInput, IStateInputError, ITexts } from "./types";
declare const SupportWindow: ({ texts, state, handleInput, product, handleButton, points, inputError, modalOpen, href, noteSuccess, titleSuccess, handleInputFile }: {
    points: ReactNode[];
    handleButton: () => void | Promise<void>;
    texts: ITexts;
    product: string[];
    state: IStateInput;
    handleInput: (e: any) => void;
    inputError?: IStateInputError | undefined;
    modalOpen: boolean;
    href: string;
    noteSuccess: ReactNode;
    titleSuccess: string;
    handleInputFile: (e: any) => void;
}) => JSX.Element;
export default SupportWindow;
export declare const StyledSupport: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
