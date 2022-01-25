import React from "react";
declare const CollectionItem: ({ data, isLoading, }: {
    data: {
        index?: number;
        img: string;
        name: string | React.ReactNode;
        price?: string | React.ReactNode;
    };
    isLoading?: boolean | undefined;
}) => JSX.Element;
export default CollectionItem;
