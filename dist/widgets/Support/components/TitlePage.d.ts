import React, { ReactNode } from "react";
declare const TitlePage: ({ title, note, points }: {
    points?: React.ReactNode[] | undefined;
    note: string | ReactNode;
    title: string;
}) => JSX.Element;
export default TitlePage;
