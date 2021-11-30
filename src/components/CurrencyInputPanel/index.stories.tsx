import React, { useState } from "react";
import { BNB } from "../../constants/images";
import CurrencyInputPanel from "./CurrencyInputPanel";
import NumericalInput from "./NumericalInput";

export default {
  title: "Components/CurrencyInputPanel",
  component: CurrencyInputPanel,
  argTypes: {},
};

export const CurrencyInputPanelBlock: React.FC = () => {
  const [value, onUserInput] = useState<string>("");

  const onMax = () => {
    console.log("max");
  };

  const onPresentCurrencyModal = () => {
    console.log("onPresentCurrencyModal");
  };
  return (
    <div style={{ maxWidth: 500 }}>
      <CurrencyInputPanel
        value={value}
        onUserInput={onUserInput}
        onMax={onMax}
        showMaxButton={false}
        label="Input"
        currency={{ decimals: 18, name: "BNB", symbol: "BNB" }}
        disableCurrencySelect
        pair={null}
        hideInput={false}
        id="id"
        account="lndvjkdnvjud3rt45532"
        onPresentCurrencyModal={onPresentCurrencyModal}
        сurrencyLogo={<img src={BNB} />}
        doubleCurrencyLogo={<img src={BNB} />}
        texts={{
          translatedLabel: "From",
          numericalInputTitle: "Title",
          max: "MAX",
          currencySelect: "BNB",
        }}
      />
    </div>
  );
};

export const NumericalInputBlock: React.FC = () => {
  const [value, onUserInput] = useState<string>("");

  return (
    <div style={{ border: "1px solid #fff" }}>
      <NumericalInput
        value={value}
        onUserInput={onUserInput}
        placeholder="Input"
        title="Title"
        style={{ width: "100%" }}
      />
    </div>
  );
};
