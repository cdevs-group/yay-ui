/// <reference types="react" />
declare const Burger: ({ open, onClick, colorTheme }: {
    open: boolean;
    onClick: () => void;
    colorTheme?: string | undefined;
}) => JSX.Element;
export default Burger;
