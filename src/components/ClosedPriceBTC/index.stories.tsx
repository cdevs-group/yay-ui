import React from "react";
import ClosedPriceBTC from "./ClosedPriceBTC";

export default {
  title: "Components/ClosedPriceBTC",
  component: [ClosedPriceBTC],
  argTypes: {},
};

export const ClosedPriceBlock: React.FC = () => {
  return (
    <>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPriceBTC price="$ 400`597" rightText="$1,57" negative roundFailed={false} textPrice="Closed Price" lockedPrice="$ 3200" />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPriceBTC price="$ 400`597" rightText="$1,57" isBTCWon textPrice="Closed Price" />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPriceBTC price="$ 400`597" rightText="$1,57" isBTCWon={false} textPrice="Closed Price" />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 20, maxWidth: 300 }}>
          <ClosedPriceBTC price="$ 400`597" rightText="$1,57" textPrice="Closed Price" roundFailed />
        </div>
      </div>
          
    </>
  );
};
