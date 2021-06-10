import React from "react";
import {
  AddIcon,
  ArrowIcon,
  CloseIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  PenIcon,
  SearchIcon,
  SquaresIcon,
  StrikeIcon,
  StrikesWideIcon,
  LoadIcon,
  CercleIcon
} from ".";
import Flex from "../Box/Flex";
import Text from "../Text/Text";
// import Svg from "./Svg";

export default {
  title: "Components/Svg Icons",
  component: [AddIcon,
    ArrowIcon,
    CloseIcon,
    EyeCloseIcon,
    EyeOpenIcon,
    PenIcon,
    SearchIcon,
    SquaresIcon,
    StrikeIcon,
    StrikesWideIcon,
    LoadIcon],
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
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 20 }}>
          <EyeCloseIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <EyeOpenIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <ArrowIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <AddIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <SearchIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <StrikeIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <SquaresIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <CloseIcon fill='#47DA3B' />
        </div>
        <div style={{ marginRight: 20 }}>
          <CloseIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <PenIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <StrikesWideIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <CercleIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <CercleIcon />
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
