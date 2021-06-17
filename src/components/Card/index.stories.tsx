import React from "react";
import Card from "./Card";
import LoaderCard from "./LoaderCard/LoaderCard";
import ExpiredCard from "./ExpiredCard";
import NewRateCard from "./NewRateCard";
import NewThirdCard from "./NewThirdCard";
import NewUpDownCard from "./NewUpDownCard";
import NewWinCard from "./NewWinCard";
import ArrowSlider from "../ArrowSlider/ArrowSlider";
import { ChartIcon, HistoryIcon } from "../Svg";
import { Flex } from "../Box";

export default {
  title: "Components/Card",
  component: [ExpiredCard, NewThirdCard, NewWinCard, NewRateCard, NewUpDownCard, LoaderCard],
  argTypes: {},
};

export const MainCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <ExpiredCard
          round={{ epoch: 45 }}
          lockPrice="244"
          prizePool="445"
          payot="lfndjvndf"
          up
          closePrice="45"
          priceDifference="45f"
        />
      </Card>
      <Flex alignItems="center" marginTop="37px">
        <ChartIcon color="" />
        <Flex marginRight="53px" marginLeft="53px">
          <ArrowSlider />
        </Flex>
        <HistoryIcon color="" />
      </Flex>
    </div>
  );
};

export const ThirdCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <NewThirdCard />
      </Card>
    </div>
  );
};

export const WinCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <NewWinCard />
      </Card>
    </div>
  );
};

export const RateCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <NewRateCard />
      </Card>
    </div>
  );
};

export const UpDownCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <NewUpDownCard />
      </Card>
    </div>
  );
};

export const Loader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <LoaderCard />
      </Card>
    </div>
  );
};
