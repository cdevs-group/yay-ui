import React from "react";
declare const CollectionItem: ({ data, }: {
    data: {
        index?: number;
        img: string;
        name: string | React.ReactNode;
        price?: string | React.ReactNode;
    };
}) => JSX.Element;
export default CollectionItem;
