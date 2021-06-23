import React from "react";
interface Props {
    isHistoryPaneOpen: boolean;
    children: React.ReactNode;
    handleToggle: () => void;
    valueAccordeon?: number | string;
}
declare const HistoryPanel: React.FC<Props>;
export default HistoryPanel;
