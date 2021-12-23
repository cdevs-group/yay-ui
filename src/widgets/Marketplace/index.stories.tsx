import React, { useState } from "react";
import styled from "styled-components";
import CollectionItem from "./components/CollectionItem";
import { NFT_EXAMPLE } from "../../constants/images";
import NFTCard from "./components/NFTCard";
import Likes from "./components/Likes";
import MarketTabs from "./components/MarketTabs";
import PropertieItem from "./components/ProretieItem";
import ProfileNftCard from "./components/ProfileNftCard";
import ImportCollection from "./components/ImportCollection";

export default {
  title: "Widgets/Marketplace",
};

export const CollectionItemBlock = () => (
  <>
    <CollectionItem data={{ name: "Passage", price: "$3,512,645", index: 1, img: NFT_EXAMPLE }} />
    <CollectionItem data={{ name: "Passage", img: NFT_EXAMPLE }} />
  </>
);

export const PropertieItemBlock = () => {
  return (
    <div>
      <PropertieItem name="Health" value="+5" />
    </div>
  );
};

export const LikesBlock = () => (
  <Likes
    likes={322}
    wrapperStyle={{ backgroundColor: "grey", borderRadius: "10px" }}
    textStyle={{ fontWeight: "bold" }}
  />
);

export const NFTCardBlock = () => {
  return (
    <NFTCard
      title="The Amazing Game"
      author="Rostislav Berezhnoy"
      description="Highest bid 1/20"
      picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
      avatarUrl="https://64.media.tumblr.com/4027ba285822c2e0255415eb81a54901/49f64d2b415f8d60-ed/s540x810/dc649d2b437724f9c0ba385443dff85b6238e89d.png"
      price={2500.5}
      likes={350}
      onShare={() => console.log("share NFT")}
      onFavoritesAdd={() => console.log("Add to Favorites")}
    />
  );
};

export const ProfileNftCardBlock = () => {
  return (
    <ProfileNftCard
      title="BabyYoda #1687"
      picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
      price={0.25}
      likes={32029}
      isLiked={true}
      onLike={() => console.log("Liked")}
    />
  );
};

export const MarketTabsBlock = () => {
  const tabsList = ["Details", "Bids", "History"];
  const [tabActive, setTabActive] = useState<number>(0);

  const handleToggleTab = (e: any) => {
    setTabActive(+e.target.value);
  };

  const firstTabBody = <Paragraph>Details Body</Paragraph>;
  const secondTabBody = <Paragraph>Bids Body</Paragraph>;
  const thirdTabBody = <Paragraph>History Body</Paragraph>;

  const tabBodyList = [firstTabBody, secondTabBody, thirdTabBody];

  return (
    <Block>
      <MarketTabs
        tabsList={tabsList}
        tabActive={tabActive}
        handleToggleTab={handleToggleTab}
        tabBodyList={tabBodyList}
      />
    </Block>
  );
};

export const ImportCollectionBlock = () => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <ImportCollection
      title="Import your collection"
      description="What is the address of your ERC721 or ERC1155 contract on the Mainnet Network? "
      inputTitle="Collection address"
      placeholder="Enter your ERC721 or ERC1155 collection address"
      inputValue={inputValue}
      inputHandler={inputHandler}
      inputError="Invalid address or ENS name"
      button="Submit"
      buttonHandler={() => console.log("log")}
      buttonProps={{}}
    />
  );
};

const Block = styled.div`
  padding: 21px;
  max-width: 230px;
  background: ${({ theme }) => theme.colors.bgCard2};
`;

const Paragraph = styled.p`
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.whiteText};
`;
