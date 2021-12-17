/// <reference types="react" />
declare const NavColumn: ({ data }: {
    data: {
        title: string;
        links: {
            name: string;
            url: string;
            out: boolean;
        }[];
    };
}) => JSX.Element;
export default NavColumn;
