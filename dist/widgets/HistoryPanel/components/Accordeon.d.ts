/// <reference types="react" />
import { ICardAccordeon } from '../types';
interface IAccordeon {
    value?: number | null | undefined;
    setValue?: (value: any) => void;
    cards: Array<ICardAccordeon>;
}
declare const Accordeon: ({ value, setValue, cards }: IAccordeon) => JSX.Element;
export default Accordeon;
