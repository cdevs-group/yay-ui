import React, { useState } from "react";
import IGOCardV2 from "./Cards/IGOCard2";
import { StatusType } from "./types";
import { BSC_ICON, DESU_TOKEN } from "../../constants/images";
import IGODetailCardV2 from "./Cards/IGODeatailCardV2";
import IGODetailProgressCard2 from "./Cards/IGODetailProgressCard2";

export default {
  title: "Widgets/IGOPlatformV2.0",
  argTypes: {},
};

export const IGOPCardV2Block = () => {
  const networksTab = [{ value: "BSC", img: BSC_ICON }];
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
          propsButtonStake={{ spin: true }}
          disabledButtonStake={false}
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
        />
      </div>
    </div>
  );
};

export const IGODetailCardV2Block = () => {
  const networksTab = [{ value: "AVAX", img: BSC_ICON }];
  const [network, setNetwork] = useState<string>("AVAX");

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
    copied: "Copied",
  };

  const linkView = "https://www.yay.games/";

  return (
    <div>
      <IGODetailCardV2
        texts={texts}
        site="DEXSPORT.io"
        token="DESU Token"
        statusTitle="Before sale"
        tokenImg={DESU_TOKEN}
        width={500}
        balance="282,689,372.1176 DESU"
        address="0x524df384bffb18c0c8f3f43d012011f8f9795579"
        currentNetwork={network}
        handleTab={handleChangeNetwork}
        networksTab={networksTab}
        externalLink="/"
        tperiodText="Sale phase in:"
        time={2342234}
        linkView={linkView}
      />
    </div>
  );
};

export const IGODetailProgressCard2Block = () => {
  const texts = {
    title: "Progress",
    stakeButton: "Stake now",
    tier: "Your tier:",
    chance: "Your chance:",
    allocation: "Your allocation:",
    summary: "Project summary:",
    buttonBuy: "Buy",
    buttonClaim: "Claim tokens",
  };

  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla ultrices mi venenatis etiam . Vulputate sed semper blandit vitae ut lectus sed pulvinar. Mi neque tempor, lobortis adipiscing consectetur proin varius orci adipiscing semper venenatis etiam.";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px" }}>
      <div>
        <IGODetailProgressCard2
          status={StatusType.BEFORE_SALE}
          texts={texts}
          textBaseProgress="Time to end of Lottery"
          baseProgress={0}
          isStaked={false}
          tierStatus="Stake YAY to get in"
          handleStake={() => console.log("stake")}
          chance={0}
          // allocation,
          inPool={false}
          summary={summary}
          disabledClaim
          disabledBuy
          handleBuy={() => console.log("buy")}
          handleClaim={() => console.log("claim")}
        />
      </div>
      <div>
        <IGODetailProgressCard2
          status={StatusType.BEFORE_SALE}
          texts={texts}
          textBaseProgress="Time to end of Lottery"
          baseProgress={0}
          isStaked
          tierStatus="Hercules"
          handleStake={() => console.log("stake")}
          chance={100}
          // allocation,
          inPool={false}
          summary={summary}
          disabledClaim
          disabledBuy
          handleBuy={() => console.log("buy")}
          handleClaim={() => console.log("claim")}
        />
      </div>
      <div>
        <IGODetailProgressCard2
          status={StatusType.SALE}
          texts={texts}
          textBaseProgress="Time to end of Lottery"
          baseProgress={30}
          isStaked
          tierStatus="Hercules"
          handleStake={() => console.log("stake")}
          chance={100}
          allocation="100,000 CRAFT"
          inPool={false}
          summary={summary}
          disabledClaim
          disabledBuy={false}
          handleBuy={() => console.log("buy")}
          handleClaim={() => console.log("claim")}
        />
      </div>
      <div>
        <IGODetailProgressCard2
          status={StatusType.SALE}
          texts={texts}
          textBaseProgress="Time to end of Lottery"
          baseProgress={30}
          isStaked
          tierStatus="Hercules"
          handleStake={() => console.log("stake")}
          chance={0}
          // allocation='100,000 CRAFT'
          inPool={false}
          summary={summary}
          disabledClaim
          disabledBuy={false}
          handleBuy={() => console.log("buy")}
          handleClaim={() => console.log("claim")}
        />
      </div>
      <div>
        <IGODetailProgressCard2
          status={StatusType.WAITING_FOR_TGE}
          texts={texts}
          textBaseProgress="Time to end of Lottery"
          baseProgress={30}
          isStaked={false}
          tierStatus="Muses (Kicked off)"
          handleStake={() => console.log("stake")}
          chance={0}
          // allocation='100,000 CRAFT'
          inPool={false}
          summary={summary}
          disabledClaim
          disabledBuy={false}
          handleBuy={() => console.log("buy")}
          handleClaim={() => console.log("claim")}
        />
      </div>
    </div>
  );
};
