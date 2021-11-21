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
    <div>
      <CurrencyInputPanel
        value={value}
        onUserInput={onUserInput}
        onMax={onMax}
        showMaxButton
        label="Input"
        currency={{ decimals: 18, name: "BNB", symbol: "BNB" }}
        disableCurrencySelect={false}
        pair={null}
        hideInput={false}
        id="id"
        account="lndvjkdnvjud3rt45532"
        onPresentCurrencyModal={onPresentCurrencyModal}
        сurrencyLogo={<img src={BNB} style={{ marginRight: "8px" }} />}
        doubleCurrencyLogo={<img src={BNB} style={{ marginRight: "8px" }} />}
        texts={{
          translatedLabel: "From",
          balance: "Balance: 0.0345151",
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
