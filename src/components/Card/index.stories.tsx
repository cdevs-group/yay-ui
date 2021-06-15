import React from "react";
import Card from "./deprecated/Card";
import LoaderCard from "./LoaderCard/LoaderCard";
import NewMainCard from "./NewMainCard";
import NewRateCard from "./NewRateCard";
import NewThirdCard from "./NewThirdCard";
import NewUpDownCard from "./NewUpDownCard";
import NewWinCard from "./NewWinCard";
import PositionCard from "./PositionCard";

export default {
  title: "Components/Card",
  component: [NewMainCard, NewThirdCard, PositionCard, NewWinCard, NewRateCard, NewUpDownCard, LoaderCard],
  argTypes: {},
};

export const MainCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <NewMainCard/>
      </Card>
    </div>
  );
};

export const ThirdCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <NewThirdCard/>
      </Card>
    </div>
  );
};

export const CardPosition: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <PositionCard/>
      </Card>
    </div>
  );
};

export const WinCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <NewWinCard/>
      </Card>
    </div>
  );
};

export const RateCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <NewRateCard/>
      </Card>
    </div>
  );
};

export const UpDownCardNew: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <NewUpDownCard/>
      </Card>
    </div>
  );
};

export const Loader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <LoaderCard/>
      </Card>
    </div>
  );
};
