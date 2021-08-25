import React from "react";
import { TokenInfo } from "./index";

export default {
  title: "Components/TokenInfo",
};

export const TokenInfoBlock: React.FC = () => {
  const textsInfo = {
    token: "3,836.537598 YAY",
    address: "0xe78388b4...6b9ab0e9d0",
    network: "bscan.ru",
    textCopy: "copied",
  };

  return (
    <div>
      <TokenInfo addTokenHandler={() => {}} BSCSkanHandler={() => {}} textsInfo={textsInfo} />
    </div>
  );
};
