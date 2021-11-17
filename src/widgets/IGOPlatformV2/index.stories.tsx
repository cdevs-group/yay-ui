import React, { useState } from "react";
import IGOCardV2 from "./Cards/IGOCard2";
import { StatusType } from "./types";
import { BSC_ICON, DESU_TOKEN, MAIN_GAME } from "../../constants/images";
import { flex } from "styled-system";

export default {
  title: "Widgets/IGOPlatformV2.0",
  argTypes: {},
};

export const IGOPlatformV2Block = () => {
  const networksTab = [
    { value: "BSC", img: BSC_ICON },
    // { value: "AVAX", img: BSC_ICON },
  ];
  const [network, setNetwork] = useState<string>("BSC");

  const handleChangeNetwork = (e: any) => {
    setNetwork(e.target.value);
  };

  const texts = {
    available: "Available",
    availableNetwork: "Available networks:",
    button: "View more",
    tier: "Your tier:",
    stakeButton: "Stake now",
    chance: "Your chance:",
    timer: "Sale phase in:",
    allocation: "Unclaimed allocation:",
    claimed: "Completed",
  };

  const handleView = () => {
    console.log("view");
  };
  const handleStake = () => {
    console.log("stake");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "50px" }}>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Before sale"
          texts={texts}
          token="DESU Token"
          status={StatusType.BEFORE_SALE}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Stake YAY to get in"
          chance={0}
          time={11237}
          tperiodText="Sale phase in:"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Sale"
          texts={texts}
          token="DESU Token"
          status={StatusType.SALE}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Perseus"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Sale phase ends in:"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Processing results"
          texts={texts}
          token="DESU Token"
          status={StatusType.PROCESSING_RESULTS}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Hercules"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Sale phase ends in:"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Waiting for TGE"
          texts={texts}
          token="DESU Token"
          status={StatusType.WAITING_FOR_TGE}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Perseus"
          chance={95}
          time={11237}
          isStaked
          tperiodText="TGE phase in:"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Claiming"
          texts={texts}
          token="DESU Token"
          status={StatusType.CLAIMING}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Perseus"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="190,000 CRAFT"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Claiming"
          texts={texts}
          token="DESU Token"
          status={StatusType.CLAIMING}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Perseus"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="190,000 CRAFT"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Completed"
          texts={texts}
          token="DESU Token"
          status={StatusType.COMPLETED}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Perseus"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="190,000 CRAFT"
          inPool
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Claiming"
          texts={texts}
          token="DESU Token"
          status={StatusType.CLAIMING}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Hercules (Haven’t bought allocation)"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="190,000 CRAFT"
          inPool={false}
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Completed"
          texts={texts}
          token="DESU Token"
          status={StatusType.COMPLETED}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Muses (Kicked off)"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="190,000 CRAFT"
          inPool={false}
          isClaimed={false}
        />
      </div>
      <div style={{ margin: "50px auto", width: "360px" }}>
        <IGOCardV2
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Completed"
          texts={texts}
          token="DESU Token"
          status={StatusType.COMPLETED}
          networksTab={networksTab}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          handleView={handleView}
          handleStake={handleStake}
          tierStatus="Hercules"
          chance={95}
          time={11237}
          isStaked
          tperiodText="Next claim in:"
          allocation="0 CRAFT"
          inPool
          isClaimed
        />
      </div>
    </div>
  );
};
