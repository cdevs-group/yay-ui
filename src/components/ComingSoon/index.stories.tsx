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
        <ComingSoon
          href=""
          text="Coming soon. The function will be available very soon, we are already working on it"
          backText="Back home page"
        />
      </div>
    </div>
  );
};
