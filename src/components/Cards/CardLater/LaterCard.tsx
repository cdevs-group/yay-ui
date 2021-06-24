import React from "react";
import CardForLater from "./Card";
import LoaderCard from "./Loader";

const LaterCard = () => {
  return (
    <CardForLater time={200} rightContent="#003">
      <LoaderCard />
    </CardForLater>
  );
};

export default LaterCard;
