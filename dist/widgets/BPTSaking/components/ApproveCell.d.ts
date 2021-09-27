/// <reference types="react" />
interface ApproveCellProps {
    textButton: string;
    isLoad: boolean;
    textWaiting: string;
    handleApprove: () => void;
}
declare const ApproveCell: ({ textButton, isLoad, textWaiting, handleApprove }: ApproveCellProps) => JSX.Element;
export default ApproveCell;
