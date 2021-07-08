import React from "react";
import ClosedPrice from "./ClosedPrice";

export default {
  title: "Components/ClosedPrice",
  component: [ClosedPrice],
  argTypes: {},
};

export const ClosedPriceBlock: React.FC = () => {
  return (
    <>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPrice
            price="$ 400`597"
            rightText="$1,57"
            result=""
            negative
            roundFailed={false}
            textPrice="Closed Price"
          />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPrice price="$ 400`597" rightText="$1,57" result="" textPrice="Closed Price" />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPrice price="$ 400`597" rightText="$1,57" result="$0.391" textPrice="Your Result" />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPrice price="$ 400`597" rightText="$1,57" result="" roundFailed textPrice="Closed Price" />
        </div>
      </div>
    </>
  );
};
