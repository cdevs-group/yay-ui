import React from "react";
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
  SearchIcon,
  SquaresIcon,
  PenIcon,
  DownArrow,
  ArrowLeft,
  BnbIcon,
  BtnPanel,
  CopyIcon,
  HelpIcon,
  OpenNewIcon,
  PlayIcon,
  WatchIcon,
  ArrowCardDown,
} from ".";
import Flex from "../Box/Flex";
import Text from "../Text/Text";

export default {
  title: "Components/Svg New",
  component: [
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
    SearchIcon,
    SquaresIcon,
    PenIcon,
    DownArrow,
    ArrowLeft,
    BnbIcon,
    BtnPanel,
    CopyIcon,
    HelpIcon,
    OpenNewIcon,
    PlayIcon,
    WatchIcon,
  ],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 20 }}>
          <ArrowRight fill="none" stroke="#4BE43E" />
        </div>
        <div style={{ marginRight: 20 }}>
          <EyeOpen />
        </div>
        <div style={{ marginRight: 20 }}>
          <EyeClose />
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
          <DownArrow />
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
          <HelpIcon />
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
      </div>
    </div>
  );
};

const context = require.context("./Icons", true, /.tsx$/);
const components = context.keys().reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: context(path),
  };
}, {});

// export const Icons: React.FC = () => {
//   return (
//     <Flex justifyContent="start" alignItems="center" flexWrap="wrap" style={{ maxWidth: "800px" }}>
//       {Object.keys(components).map((file) => {
//         const Icon = components[file].default;
//         return (
//           <Flex key={file} flexDirection="column" alignItems="center" py="4px" px="8px" mb="32px">
//             <Icon size="32px" />
//             <Text color="textSubtle" fontSize="12px">
//               {file}
//             </Text>
//           </Flex>
//         );
//       })}
//     </Flex>
//   );
// };
