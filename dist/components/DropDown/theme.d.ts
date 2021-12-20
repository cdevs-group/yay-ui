export declare const styleVariants: {
    menu: {
        position: string;
        overflow: string;
        marginTop: number;
        maxHeight: number;
        "&.open": {
            marginTop: number;
            marginBottom: number;
            maxHeight: number;
        };
        "@media screen and (min-width: 1080px)": {
            position: string;
            left: number;
            marginTop: number;
            overflow: string;
            "&.open": {
                marginTop: number;
                marginBottom: number;
            };
        };
    };
    behind: {
        position: string;
        overflow: string;
        marginTop: number;
        borderRadius: number;
        maxHeight: number;
        "&.open": {
            maxHeight: number;
            marginTop: number;
            marginBottom: number;
            overflow: string;
        };
        "@media screen and (min-width: 1080px)": {
            position: string;
            left: number;
            top: number;
            borderRadius: string;
            transform: string;
            "&.open": {
                transform: string;
                position: string;
                maxHeight: string;
                marginBottom: number;
                marginTop: number;
            };
        };
        "@media screen and (min-width: 1300px)": {
            left: number;
        };
    };
    "center-behind": {
        position: string;
        right: number;
        overflow: string;
        marginTop: number;
        borderRadius: string;
        maxWidth: number;
        transform: string;
        "&.open": {
            marginTop: number;
            marginBottom: number;
            overflow: string;
            overflowY: string;
            transform: string;
        };
        "@media screen and (min-width: 1440px)": {
            position: string;
            top: number;
            right: string;
            left: string;
            maxWidth: string;
            minWidth: number;
            transform: string;
            "&.open": {
                transform: string;
                marginBottom: number;
                marginTop: number;
            };
        };
    };
    visible: {
        overflow: string;
    };
};
export declare const styleVariantsButton: {
    menu: {
        justifyContent: string;
        "@media screen and (min-width: 1080px)": {
            justifyContent: string;
        };
    };
    behind: {
        justifyContent: string;
    };
};
