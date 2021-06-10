import React from "react";
import Card from "./Card";
import LastCard from "./LastCard";
import LoaderCard from "./LoaderCard/LoaderCard";
import MainCard from "./MainCard";
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
      <Card >
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

