import React from "react";
import ChartDisclaimer from "./ChartDisclaimer";

export default {
  title: "Widgets/ChartDisclaimer",
  argTypes: {},
};

export const DisclaimerChart: React.FC = () => {
  return (
    <div>
      <ChartDisclaimer
        topText="Charts are provided for reference only and do not reflect rounds’ final outcome."
        bottomText="Please refer to the prices shown on the cards for the final outcome."
        btnText="I understand"
        href="https://docs.pancakeswap.finance/products/prediction/prediction-faq#what-are-you-using-for-your-price-feed"
        linkText="Learn More"
      />
    </div>
  );
};
