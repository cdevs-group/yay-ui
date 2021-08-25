/// <reference types="react" />
interface IProps {
    data: {
        text: string;
        value: string;
    };
    canClaim: boolean;
}
declare const CardIndicator: ({ data, canClaim }: IProps) => JSX.Element;
export default CardIndicator;
