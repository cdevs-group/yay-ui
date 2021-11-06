import React, { useState } from "react";
import Toggle from "./Toggle";
import BaseToggle from "./BaseToggle";
import SwapButton from "./SwapButton";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Toggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <Toggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <SwapButton onClick={() => {}} />
      </div>
      <div>
        <BaseToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
