import React from "react";
import TokenPairImage from "./TokenPairImage";
import { YAY_TOKEN } from "../../constants/images";

export default {
  title: "Components/TokenPairImage",
};

export const TokenPairImageSimple: React.FC = () => {
  return (
    <div>
      <TokenPairImage simpleFarm token1={YAY_TOKEN} token2={YAY_TOKEN} />
    </div>
  );
};

export const TokenPairImageDouble: React.FC = () => {
  return (
    <div>
      <TokenPairImage token1={YAY_TOKEN} token2={YAY_TOKEN} />
    </div>
  );
};
