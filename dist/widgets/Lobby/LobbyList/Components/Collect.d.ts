/// <reference types="react" />
import { ButtonProps } from "../../../../components/Button";
declare const Collect: ({ title, titleMob, handleButton, propsButton }: CollectInterface) => JSX.Element;
interface CollectInterface {
    title?: string;
    titleMob?: string;
    handleButton?: (param: any) => void;
    propsButton?: ButtonProps;
}
export default Collect;
