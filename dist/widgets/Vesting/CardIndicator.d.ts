/// <reference types="react" />
interface IProps {
    data: {
        text: string;
        value: string;
    };
    canClaim: boolean;
    disabledTopCards?: boolean;
}
declare const CardIndicator: ({ data, canClaim, disabledTopCards }: IProps) => JSX.Element;
export default CardIndicator;
