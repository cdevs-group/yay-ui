import React from "react";
import styled from "styled-components";
import Card from "./Card";
import LastCard from "./LastCard";
import LoaderCard from "./LoaderCard/LoaderCard";
import MainCard from "./MainCard";
import NewMainCard from "./NewMainCard";
import NewRateCard from "./NewRateCard";
import NewThirdCard from "./NewThirdCard";
import NewUpDownCard from "./NewUpDownCard";
import NewWinCard from "./NewWinCard";
import PositionCard from "./PositionCard";
import ThirdCard from "./ThirdCard";

export default {
  title: "Components/Card",
  component: [Card, LoaderCard, ThirdCard],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card >
        <MainCard/>
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

export const CardThird: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <ThirdCard/>
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

export const CardLast: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active>
        <LastCard/>
      </Card>
    </div>
  );
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
