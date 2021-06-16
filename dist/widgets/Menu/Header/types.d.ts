export declare const sizes: {
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
    readonly XXL: "xxl";
};
export interface LinkHeaderProps {
    name: string;
    url: string;
    size?: string;
    className?: string;
}
export interface AccProps {
    isAuth: boolean;
    accName?: string;
}
