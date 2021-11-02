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
}
declare const ClaimBlock: ({ text, canClaim, propsBtnClaimBlock }: IProps) => JSX.Element;
export default ClaimBlock;
