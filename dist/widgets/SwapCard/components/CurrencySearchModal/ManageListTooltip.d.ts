/// <reference types="react" />
declare function ManageListTooltip({ tooltipLabel, hrefLink, handleRemoveList, handleAcceptListUpdate, disabledButtonRemove, texts, pending, }: {
    tooltipLabel: any;
    hrefLink: string;
    handleRemoveList: () => void;
    handleAcceptListUpdate: () => void;
    disabledButtonRemove: boolean;
    pending: any;
    texts: {
        see: string;
        remove: string;
        updateList: string;
    };
}): JSX.Element;
export default ManageListTooltip;
