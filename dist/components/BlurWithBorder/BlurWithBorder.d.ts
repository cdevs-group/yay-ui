import { ReactNode } from "react";
interface IBlurWithBorder {
    noticeType?: NoticeBridgeType;
    children?: ReactNode;
    radiusBlur?: string;
}
export declare enum NoticeBridgeType {
    ERROR = "error",
    SUCCESS = "success"
}
declare const BlurWithBorder: ({ radiusBlur, noticeType, children }: IBlurWithBorder) => JSX.Element;
export default BlurWithBorder;
