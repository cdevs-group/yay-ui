export interface IText {
    stayLoop: string;
    enterEmail: string;
    buyYAY: string;
    signUp: string;
    joinOur: string;
    reserved: string;
}
export interface IDataLinks {
    title: string;
    links: {
        name: string;
        url: string;
        out: boolean;
    }[];
}
export interface IDataSocial {
    title: string;
    links: {
        img: any;
        url: string;
    }[];
}
