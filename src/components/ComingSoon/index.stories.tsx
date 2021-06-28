import React from "react";
import ComingSoon from "./ComingSoon";

export default {
  title: "Components/ComingSoon",
  component: [ComingSoon],
  argTypes: {},
};

export const SoonComming: React.FC = () => {
  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <ComingSoon href="" />
      </div>
    </div>
  );
};
