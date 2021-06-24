import React from "react";
import ExpiredCard from "./ExpiredCard";
import LiveCard from "./LiveCard";
import LoaderCard from "./Loader";
import Card from "./Card";
import { IconCircle } from "../Svg";
import { Button } from "../Button";

export default {
  title: "Components/Card",
  component: [ExpiredCard, LiveCard, LoaderCard],
  argTypes: {},
};

export const ExpiredNAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} negative time={2000}>
        <ExpiredCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const ExpiredAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CollectWinnings: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        showBtnWinnings
        time={2000}
        btnWinnings={
          <Button variant="green" width="100%">
            Collect Winnings
          </Button>
        }
      >
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const ResultUpDownCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        hasEnteredUp
        hasEnteredDown
        time={2000}
      >
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLiveNAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card live negative leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLiveAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card live leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const LiveUpDownCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        negative
        leftContent="LIVE"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        hasEnteredUp
        time={2000}
      >
        <LiveCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLoader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        leftContent={<IconCircle />}
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        displayNone
        colorNone
        time={2000}
      >
        <LoaderCard />
      </Card>
    </div>
  );
};
