import React from "react";
import styled from "styled-components";
import { TimerProps, TimerColorProps } from "./types";
import { CercleIcon } from "../Svg";
import { Block, Dots, Item, Wrap } from "./TimerNotSolid";

interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
  height?: string;
  borderRadius?: string;
  width?: string;
  background?: string;
  marginPoint?: string;
  margin?: string;
}
interface MyLoaderProps {
  height?: string;
  borderRadius?: string;
  width?: string;
  marginPoint?: string;
  margin?: string;
  background?: string;
}

function MyTimer({
  expiryTimestamp,
  color,
  height,
  width,
  marginPoint,
  background,
  borderRadius,
  margin,
}: MyTimerProps) {
  const hours = Math.floor(expiryTimestamp / 3600);
  const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
  const seconds = expiryTimestamp - hours * 3600 - minutes * 60;

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = [hours, minutes, seconds];

  return (
    <Wrapper margin={margin}>
      <BlockWithoutBg borderRadius={borderRadius} background={background} width={width} height={height} color={color}>
        {timeArray.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg color={color}>
              {handleDigit(item).leftDigit}
              {handleDigit(item).rightDigit}{" "}
            </ItemWithoutBg>
            {i === 2 ? null : (
              <DotsWithoutBg color={color} marginPoint={marginPoint}>
                :
              </DotsWithoutBg>
            )}
          </React.Fragment>
        ))}
      </BlockWithoutBg>
    </Wrapper>
  );
}

const LoadIcons = [<CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />];

const LoadingTimer = ({ margin, height, width, borderRadius, background, marginPoint }: MyLoaderProps) => {
  return (
    <Wrapper margin={margin}>
      <BlockWithoutBg borderRadius={borderRadius} background={background} width={width} height={height}>
        {LoadIcons.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg>{item}</ItemWithoutBg>
            {i === 2 ? null : <DotsWithoutBg marginPoint={marginPoint}>:</DotsWithoutBg>}
          </React.Fragment>
        ))}
      </BlockWithoutBg>
    </Wrapper>
  );
};

const TimerNotSolidWithoutBg: React.FC<TimerProps> = ({
  time,
  color,
  isLoad,
  height,
  borderRadius,
  width,
  background,
  marginPoint,
  margin,
}) => {
  return (
    <div>
      {(time || time === 0) && !isLoad ? (
        <MyTimer
          marginPoint={marginPoint}
          borderRadius={borderRadius}
          width={width}
          background={background}
          height={height}
          expiryTimestamp={time}
          color={color || "text"}
          margin={margin}
        />
      ) : (
        <LoadingTimer
          borderRadius={borderRadius}
          width={width}
          background={background}
          height={height}
          marginPoint={marginPoint}
          margin={margin}
        />
      )}
    </div>
  );
};
export default TimerNotSolidWithoutBg;

const Wrapper = styled(Wrap)<{ margin?: string }>`
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

const BlockWithoutBg = styled(Block)<TimerColorProps>`
  margin: ${({ margin }) => (margin ? margin : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "50px")};
  background: ${({ background }) => (background ? background : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "none")};
`;

const ItemWithoutBg = styled(Item)<{ color?: string }>`
  box-shadow: none;
  background: none;
  margin: 0;
  height: auto;
  width: 15px;
  display: flex;
  font-size: 11px;
  color: ${({ color }) => (color ? color : "#fff")};
`;

const DotsWithoutBg = styled(Dots)<{ marginPoint?: string; color?: string }>`
  margin: ${({ marginPoint }) => (marginPoint ? marginPoint : "0 6px")};
  color: ${({ color }) => (color ? color : "#fff")};
`;
