/// <reference types="react" />
declare const Social: ({ data }: {
    data: {
        title: string;
        links: {
            img: string;
            url: string;
        }[];
    };
}) => JSX.Element;
export default Social;
