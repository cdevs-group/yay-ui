export declare const links: {
    name: string;
    url: string;
}[];
export declare const linksSubmenu: ({
    name: string;
    url: string;
    submenu: {
        name: string;
        url: string;
    }[];
    comingSoon?: undefined;
} | {
    name: string;
    url: string;
    submenu?: undefined;
    comingSoon?: undefined;
} | {
    name: string;
    url: string;
    comingSoon: string;
    submenu?: undefined;
})[];
