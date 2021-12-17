import React, { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";

export default {
  title: "Components/CopyToClipboard",
  component: CopyToClipboard,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <CopyToClipboard
        toCopy="nkjfnvbkjfnb"
        textCopied="copied"
        propsIcon={{ stroke: "red" }}
        propsChildren={{ marginRight: 14 }}
      >
        Click me
      </CopyToClipboard>
    </div>
  );
};
