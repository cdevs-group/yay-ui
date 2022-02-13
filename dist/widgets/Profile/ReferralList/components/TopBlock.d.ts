/// <reference types="react" />
declare const TopBlock: ({ title, value, id, isBlur, loading, }: {
    title: string;
    value: string | number;
    id?: string | undefined;
    isBlur?: boolean | undefined;
    loading: boolean;
}) => JSX.Element;
export default TopBlock;
