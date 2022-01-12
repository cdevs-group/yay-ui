/// <reference types="react" />
import { IReferralListItem, ITextsReferralList } from "./types";
declare const ReferralListItems: ({ data, texts }: {
    data: IReferralListItem[];
    texts: ITextsReferralList;
}) => JSX.Element;
export default ReferralListItems;
