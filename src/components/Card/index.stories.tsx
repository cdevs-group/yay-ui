import React from "react";
import Card from "./Card";
import LoaderCard from "./LoaderCard";
import MainCard from "./MainCard";

export default {
  title: "Components/Card",
  component: [Card, LoaderCard],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
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

