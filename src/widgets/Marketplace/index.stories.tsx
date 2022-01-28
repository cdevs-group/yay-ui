import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import CollectionItem from "./components/CollectionItem";
import { NFT_EXAMPLE, BNB, Avalanche } from "../../constants/images";
import NFTCard from "./components/NFTCard";
import NFTCardGames from "./components/NFTCardGames";
import Likes from "./components/Likes";
import MarketTabs from "./components/MarketTabs";
import PropertieItem from "./components/ProretieItem";
import ProfileNftCard from "./components/ProfileNftCard";
import ImportCollection from "./components/ImportCollection";
import { Flex } from "../..";
import { baseColors } from "../../theme/colors";
import OrderModal from "./components/OrderModal";
import OrderConformition from "./components/OrderConformition";
import { ButtonProps } from "../../components/Button/types";
import { Text } from "../../components/Text";

export default {
  title: "Widgets/Marketplace",
};

export const CollectionItemBlock = () => (
  <>
    <CollectionItem data={{ name: "Passage", price: "$3,512,645", index: 1, img: NFT_EXAMPLE }} />
    {/* <CollectionItem data={{ name: "Passage", img: NFT_EXAMPLE }} /> */}
    <CollectionItem data={{ name: "Passage", img: NFT_EXAMPLE }} isLoading />
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
    onLikeAdd={() => console.log("Liked")}
    wrapperStyle={{ backgroundColor: "grey", borderRadius: "10px" }}
    textStyle={{ fontWeight: "bold" }}
  />
);

export const NFTCardBlock = () => {
  return (
    <Flex>
      <NFTCard
        // isLoading
        title="The Amazing Game"
        author="Rostislav Berezhnoy"
        description="View in-game Asset"
        assets="for 5 assets"
        picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
        avatarUrl="https://64.media.tumblr.com/4027ba285822c2e0255415eb81a54901/49f64d2b415f8d60-ed/s540x810/dc649d2b437724f9c0ba385443dff85b6238e89d.png"
        price="800 yay"
        color={baseColors.purple}
        likes={350}
        onShare={() => console.log("share NFT")}
        onFavoritesAdd={() => console.log("Add to Favorites")}
        onAuthorClick={() => console.log("Go to Author Page")}
        onNftClick={() => console.log("Go to Nft Page")}
        onLikeAdd={() => console.log("Liked")}
        network={BNB}
        onGameClick={() => console.log("onGameClick")}
        onSeeNowClick={() => console.log("see")}
      />
      <NFTCardGames
        color={baseColors.purple}
        title="Bold Point"
        description="Total NFTs: 1920"
        picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
        avatarUrl="https://64.media.tumblr.com/4027ba285822c2e0255415eb81a54901/49f64d2b415f8d60-ed/s540x810/dc649d2b437724f9c0ba385443dff85b6238e89d.png"
        textSeeNow="See now"
        onShare={() => console.log("share NFT")}
        onNftClick={() => console.log("Go to Nft Page")}
        network1={BNB}
        network2={Avalanche}
        onSeeNowClick={() => console.log("onSeeNowClick")}
        onGameClick={() => console.log("onGameClick")}
      />
    </Flex>
  );
};

export const ProfileNftCardBlock = () => {
  return (
    <ProfileNftCard
      color={baseColors.purple}
      title="BabyYoda #1687"
      picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
      price="0.25 YAY"
      likes={32029}
      isLiked={true}
      onLike={() => console.log("Liked")}
      onNftClick={() => console.log("onNftClick")}
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

export const ImportCollectionBlock1 = () => {
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
      handleClick={() => null}
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

export const OrderModalBlock = () => {
  const [openModal, setOpen] = useState(true);
  const [inputState, setInputState] = useState({
    price: "",
    count: "",
  });

  const handleInput = (e: any) => {
    console.log(e);
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  };
  const texts = {
    title: "Make order",
    placeholder1: "Enter price in YAY",
    placeholder2: "Enter count",
    fee: "Service fee",
    receive: "You will receive",
    button: "Approve",
    titleInput1: "Enter price",
    titleInput2: "Count",
  };
  return (
    <>
      <Overlay open={openModal} />
      <Modal open={openModal}>
        <OrderModal
          texts={texts}
          onDismiss={() => setOpen(!openModal)}
          count
          fee="5%"
          receive="-"
          buttonProps={{ spin: true, disabled: true }}
          handleClick={() => console.log("a")}
          handleInput={handleInput}
          inputValues={inputState}
        />
      </Modal>
    </>
  );
};

export const OrderConformitionBlock = () => {
  const [openModal, setOpen] = useState(true);
  const texts = {
    title: "Order confirmation",
    balance: "Balance",
    pay: "You will pay",
    button: "Approve",
  };
  return (
    <>
      <Overlay open={openModal} />
      <Modal open={openModal}>
        <OrderConformition
          onDismiss={() => setOpen(!openModal)}
          texts={texts}
          description={
            <TextStyle>
              You are about to purchase a<span>Phunk #609</span> from <span>0x583C3..ff4c5cc7999</span>
            </TextStyle>
          }
          balance="10 YAY"
          pay="12 YAY"
          handleClick={() => console.log("click")}
          buttonProps={{ spin: true, disabled: true }}
        />
      </Modal>
    </>
  );
};

const TextStyle = styled(Text)`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.whiteRgba4};

  & span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
const Modal = styled.div<{ open: boolean }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ open }) => (open ? 16 : -1)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
`;
const Overlay = styled.div<{ open?: boolean }>`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: ${({ open }) => (open ? 15 : -1)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
