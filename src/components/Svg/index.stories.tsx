import React from "react";
import { ThemeProvider } from "styled-components";
import { purple } from "../../theme";
import { Text } from "../Text";
import {
  ArrowRight,
  EyeOpen,
  ArrowTopRight,
  AddIcon,
  StrikeIcon,
  ArrowDownIcon,
  CloseIcon,
  MenuIcon,
  StrikesWideIcon,
  ChartIcon,
  HistoryIcon,
  CompleteIcon,
  CercleIcon,
  EyeClose,
  EyeCloseIcon,
  SearchIcon,
  SearchIcon2,
  SquaresIcon,
  PenIcon,
  ArrowLeft,
  BnbIcon,
  BtnPanel,
  CopyIcon,
  CopyIcon2,
  CopyIcon3,
  HelpIcon,
  HelpIcon2,
  OpenNewIcon,
  PlayIcon,
  WatchIcon,
  ArrowCardDown,
  ArrowBigDownIcon,
  ArrowSingl,
  ArrowDouble,
  CheckIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
  AvalancheIcon,
  ReverseArrowsIcon,
  ClipIcon,
  YAYIcon,
  CalculateIcon,
  PlusIcon,
  MinusIcon,
  VerifideIcon,
  ComunityIcon,
  CloseRed,
  CloseIcon2,
  ControllerMouse,
  ArrowBorder,
  CheckIcon2,
  CloseIcon3,
  ArrowBack2,
  ArrowBackIcon,
  WalletIcon,
  UserIcon,
  FavoritesIcon,
  CollectionIcon,
  CategoryIcon,
  BlockchainIcon,
  DollarIcon,
  JoystickIcon,
  ArrowDownRightIcon,
  LineIcon,
} from ".";

export default {
  title: "Components/Svg",
  component: [
    ArrowRight,
    EyeOpen,
    ArrowTopRight,
    AddIcon,
    StrikeIcon,
    ArrowDownIcon,
    CloseIcon,
    CloseIcon2,
    MenuIcon,
    StrikesWideIcon,
    ChartIcon,
    HistoryIcon,
    CompleteIcon,
    CercleIcon,
    EyeClose,
    EyeCloseIcon,
    SearchIcon,
    SquaresIcon,
    PenIcon,
    ArrowLeft,
    BnbIcon,
    BtnPanel,
    CopyIcon,
    CopyIcon2,
    CopyIcon3,
    HelpIcon,
    HelpIcon2,
    OpenNewIcon,
    PlayIcon,
    WatchIcon,
    ArrowDownIcon,
    ArrowSingl,
    ArrowDouble,
    AvalancheIcon,
    ReverseArrowsIcon,
    ClipIcon,
    YAYIcon,
    CalculateIcon,
    PlusIcon,
    MinusIcon,
    VerifideIcon,
    ComunityIcon,
    CloseRed,
    ControllerMouse,
    ArrowBorder,
    WalletIcon,
    UserIcon,
    FavoritesIcon,
    CollectionIcon,
    CategoryIcon,
    BlockchainIcon,
    DollarIcon,
    JoystickIcon,
    ArrowDownRightIcon,
  ],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <ThemeProvider theme={purple}>
      <Text>Change the theme to see the color change</Text>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <ArrowRight fill="none" stroke="#4BE43E" />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowRight />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowBack2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowBackIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <EyeOpen />
          </div>
          <div style={{ marginRight: 20 }}>
            <EyeClose />
          </div>
          <div style={{ marginRight: 20 }}>
            <EyeCloseIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowTopRight />
          </div>
          <div style={{ marginRight: 20 }}>
            <AddIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CompleteIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <SearchIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <SquaresIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <StrikeIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CloseIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CloseIcon2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <CloseIcon3 />
          </div>
          <div style={{ marginRight: 20 }}>
            <MenuIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <StrikesWideIcon />
          </div>
          <div style={{ marginRight: 20, marginTop: 6 }}>
            <CercleIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <PenIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowDownIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ChartIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <HistoryIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowBigDownIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowLeft />
          </div>
          <div style={{ marginRight: 20 }}>
            <BnbIcon />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <BtnPanel />
          </div>
          <div style={{ marginRight: 20 }}>
            <CopyIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CopyIcon2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <CopyIcon3 />
          </div>
          <div style={{ marginRight: 20 }}>
            <HelpIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <HelpIcon2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <OpenNewIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <PlayIcon />
          </div>
          <div style={{ marginRight: 20, marginTop: -3 }}>
            <WatchIcon />
          </div>
          <div style={{ marginRight: 20, marginTop: -3 }}>
            <ArrowCardDown color="green" />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowDouble />
          </div>
          <div style={{ marginRight: 20 }}>
            <SearchIcon2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowSingl />
          </div>
          <div style={{ marginRight: 20 }}>
            <CheckIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CheckIcon2 />
          </div>
          <div style={{ marginRight: 20 }}>
            <TwitterIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <TelegramIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <InstagramIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <AvalancheIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ReverseArrowsIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ClipIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <YAYIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CalculateIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <PlusIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <MinusIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <VerifideIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ComunityIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CloseRed />
          </div>
          <div style={{ marginRight: 20 }}>
            <ControllerMouse />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowBorder />
          </div>
          <div style={{ marginRight: 20 }}>
            <WalletIcon />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <UserIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <FavoritesIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CollectionIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <CategoryIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <BlockchainIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <DollarIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <JoystickIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <ArrowDownRightIcon />
          </div>
          <div style={{ marginRight: 20 }}>
            <LineIcon />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
