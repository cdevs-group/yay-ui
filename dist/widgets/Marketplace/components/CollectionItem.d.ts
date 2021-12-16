/// <reference types="react" />
declare const CollectionItem: ({ data }: {
    data: {
        index: number;
        img: string;
        name: string;
        price: string;
    };
}) => JSX.Element;
export default CollectionItem;
