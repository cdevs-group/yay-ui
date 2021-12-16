/// <reference types="react" />
declare const NavColumn: ({ data }: {
    data: {
        title: string;
        links: {
            name: string;
            url: string;
        }[];
    };
}) => JSX.Element;
export default NavColumn;
