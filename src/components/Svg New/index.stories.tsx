import React from "react";
import {
  ArrowRight,
  EyeOpen,
  ArrowTopRight,
  AddIcon,
  StrikeIcon,
  ArrowDown,
  CloseIcon,
  MenuIcon,
  StrikesWideIcon,
  ChartIcon,
  HistoryIcon,
  CompleteIcon,
  CircleIcon,
} from ".";
import Flex from "../Box/Flex";
import Text from "../Text/Text";
// import Svg from "./Svg";

export default {
  title: "Components/Svg New",
  component: [
    ArrowRight,
    EyeOpen,
    ArrowTopRight,
    AddIcon,
    StrikeIcon,
    ArrowDown,
    CloseIcon,
    MenuIcon,
    StrikesWideIcon,
    ChartIcon,
    HistoryIcon,
    CompleteIcon,
    CircleIcon,
  ],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <div>
        {/* <Svg viewBox="0 0 18 13">
          <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
        </Svg>
        <Svg color="red" viewBox="0 0 18 13">
          <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
        </Svg>
        <Svg color="primary" width="50px" viewBox="0 0 18 13">
          <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
        </Svg> */}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 20 }}>
          <ArrowRight fill="none" />
        </div>
        <div style={{ marginRight: 20 }}>
          <EyeOpen />
        </div>
        <div style={{ marginRight: 20 }}>
          <ArrowTopRight />
        </div>
        <div style={{ marginRight: 20 }}>
          <AddIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <StrikeIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <ArrowDown />
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
        <div style={{ marginRight: 20 }}>
          <ChartIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <HistoryIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <CompleteIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <CircleIcon />
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
