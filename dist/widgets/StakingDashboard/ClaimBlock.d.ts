/// <reference types="react" />
import { ButtonProps } from "../../components/Button";
interface IProps {
    text: {
        title: string;
        description: string;
        button: string;
    };
    canClaim?: boolean;
    propsBtnClaimBlock?: ButtonProps;
    imageBG?: string;
}
declare const ClaimBlock: ({ text, canClaim, propsBtnClaimBlock, imageBG }: IProps) => JSX.Element;
export default ClaimBlock;
