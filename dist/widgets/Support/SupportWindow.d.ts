import { ReactNode } from "react";
import { IStateInput, IStateInputError, ITexts } from "./types";
declare const SupportWindow: ({ texts, state, handleInput, product, handleButton, points, networks, inputError, modalOpen, modalClick, noteSuccess, titleSuccess, }: {
    points: ReactNode[];
    handleButton: () => void | Promise<void>;
    texts: ITexts;
    product: string[];
    state: IStateInput;
    handleInput: (e: any) => void;
    inputError?: IStateInputError | undefined;
    networks: string[];
    modalOpen: boolean;
    modalClick: () => void;
    noteSuccess: ReactNode;
    titleSuccess: string;
}) => JSX.Element;
export default SupportWindow;
export declare const StyledSupport: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
