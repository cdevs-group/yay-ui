import React from "react";
import TextWithTooltip from "./TextWithTooltip";

export default {
  title: "Components/TextWithTooltip",
  component: TextWithTooltip,
};

export const Default: React.FC = () => {
  return (
    <div>
      <TextWithTooltip text="text" textTooltip="dfgdggfgdg" />
    </div>
  );
};
