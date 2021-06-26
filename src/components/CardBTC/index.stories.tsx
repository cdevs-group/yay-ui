import React from "react";
import ExpiredCardBTC from "./ExpiredCardBTC";
import CardBTC from "./components/CardBTC";
import LiveCardBTC from "./LiveCardBTC";
import GhostCard from "../Card/GhostCard/GhostCard";
import Loader from "../Card/Loader";
import Card from "../Card/Card";
import { CercleIcon } from "../Svg";

export default {
  title: "Components/CardBTC",
  component: [ExpiredCardBTC, LiveCardBTC],
  argTypes: {},
};

export const ExpiredCardBTCBlockETH: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        time={2000}
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};
export const ExpiredCardBTCBlockCheck: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        live
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        hasEnteredUp
        time={2000}
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};
export const ExpiredCardBTCBlockETрCheck: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        live
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        hasEnteredDown
        time={2000}
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlock: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlockWin: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000} btcWon>
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlocETHkWin: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        live
        negative
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
        ethWon
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const LiveCardBTCBlock: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const LiveCardBTCBlockETH: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live negative leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};

export const CancelCardBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        live
        colorNone
        displayNone
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <GhostCard href="#" />
      </CardBTC>
    </div>
  );
};

export const LaterCardBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        colorNone
        displayNone
        hide
        leftContent={<CercleIcon fill="none" spin />}
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <Loader textTooltip="This round`s closing transactions has been submitted to the blockchain, and is awaiting confirmation" />
      </Card>
    </div>
  );
};
export const LaterCardTextBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        colorNone
        displayNone
        hide
        leftContent="LATER"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <Loader />
      </Card>
    </div>
  );
};
