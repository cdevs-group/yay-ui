import React from "react";
import { LaterCardProps } from "../types";
import CardForLater from "./Card";
import LoaderCard from "./Loader";

const LaterCard = ({ time, rightContent, color }: LaterCardProps) => {
  return (
    <CardForLater color={color} time={time} rightContent={rightContent}>
      <LoaderCard />
    </CardForLater>
  );
};

export default LaterCard;
