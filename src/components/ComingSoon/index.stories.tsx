import React from "react";
import ComingSoon from "./ComingSoon";
import ComingSoonWithButton from "./ComingSoonWithButton";

export default {
  title: "Components/ComingSoon",
  component: [ComingSoon, ComingSoonWithButton],
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
      <div style={{ marginTop: 20 }}>
        <ComingSoonWithButton
          text="Coming soon. The function will be available very soon, we are already working on it"
          buttonText="Back home page"
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};
