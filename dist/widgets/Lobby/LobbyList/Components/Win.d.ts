/// <reference types="react" />
declare const Win: ({ title }: WinInterface) => JSX.Element;
interface WinInterface {
    title?: string;
}
export default Win;
