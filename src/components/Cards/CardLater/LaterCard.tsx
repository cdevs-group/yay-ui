import React from "react";
import Card from "../../Card/Card";
import { LaterCardProps } from "../types";
import CardForLater from "./Card";
import LoaderCard from "./Loader";

const LaterCard = ({ time, rightContent, color }: LaterCardProps) => {
  return (
    <Card
      live
      hide
      leftContent="CANCEL"
      rightContent="#001"
      payoutUp={1.03}
      payoutDown={5.03}
      displayNone
      colorNone
      time={2000}
    >
      <LoaderCard />
    </Card>
  );
};

export default LaterCard;
