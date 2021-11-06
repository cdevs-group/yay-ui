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
  widthWrapper?: string;
  fontSize?: string;
  hoursHide?: boolean;
  withTime?: boolean;
}
interface MyLoaderProps {
  height?: string;
  borderRadius?: string;
  width?: string;
  marginPoint?: string;
  margin?: string;
  background?: string;
  widthWrapper?: string;
  fontSize?: string;
  hoursHide?: boolean;
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
  widthWrapper,
  fontSize,
  hoursHide,
  withTime,
}: MyTimerProps) {
  const hours = Math.floor(expiryTimestamp / 3600);
  const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
  const seconds = expiryTimestamp - hours * 3600 - minutes * 60;

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = hoursHide ? [minutes, seconds] : [hours, minutes, seconds];
  const timeShow = ["h", "m", "s"];
  const pointsAfter = hoursHide ? 1 : 2;

  return (
    <Wrapper widthWrapper={widthWrapper} margin={margin}>
      <BlockWithoutBg
        fontSize={fontSize}
        borderRadius={borderRadius}
        background={background}
        width={width}
        height={height}
        color={color}
      >
        {timeArray.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg withTime={withTime} fontSize={fontSize} color={color}>
              {handleDigit(item).leftDigit}
              {handleDigit(item).rightDigit} {withTime && timeShow[i]}
            </ItemWithoutBg>
            {i === pointsAfter ? null : (
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

const LoadingTimer = ({
  margin,
  height,
  width,
  borderRadius,
  background,
  marginPoint,
  widthWrapper,
  fontSize,
  hoursHide,
}: MyLoaderProps) => {
  const LoadIcons = hoursHide
    ? [<CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />]
    : [<CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />];
  const pointsAfter = hoursHide ? 1 : 2;

  return (
    <Wrapper margin={margin} widthWrapper={widthWrapper}>
      <BlockWithoutBg
        fontSize={fontSize}
        borderRadius={borderRadius}
        background={background}
        width={width}
        height={height}
        hoursHide={hoursHide}
      >
        {LoadIcons.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg>{item}</ItemWithoutBg>
            {i === pointsAfter ? null : <DotsWithoutBg marginPoint={marginPoint}>:</DotsWithoutBg>}
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
  widthWrapper,
  fontSize,
  hoursHide,
  withTime,
}) => {
  return (
    <div style={{ width: `${widthWrapper ? widthWrapper : "auto"}` }}>
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
          widthWrapper={widthWrapper}
          fontSize={fontSize}
          hoursHide={hoursHide}
          withTime={withTime}
        />
      ) : (
        <LoadingTimer
          borderRadius={borderRadius}
          width={width}
          background={background}
          height={height}
          marginPoint={marginPoint}
          margin={margin}
          widthWrapper={widthWrapper}
          fontSize={fontSize}
          hoursHide={hoursHide}
        />
      )}
    </div>
  );
};
export default TimerNotSolidWithoutBg;

const Wrapper = styled(Wrap)<{ margin?: string; widthWrapper?: string }>`
  margin: ${({ margin }) => (margin ? margin : 0)};
  width: ${({ widthWrapper }) => (widthWrapper ? widthWrapper : "auto")};
`;

const BlockWithoutBg = styled(Block)<TimerColorProps>`
  margin: ${({ margin }) => (margin ? margin : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "50px")};
  background: ${({ background }) => (background ? background : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "none")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "11px")};
`;

const ItemWithoutBg = styled(Item)<{ color?: string; fontSize?: string; withTime?: boolean }>`
  box-shadow: none;
  background: none;
  margin: 0;
  height: auto;
  width: 15px;
  display: ${({ withTime }) => (withTime ? "contents" : "flex")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "11px")};
  color: ${({ color }) => (color ? color : "#fff")};
`;

const DotsWithoutBg = styled(Dots)<{ marginPoint?: string; color?: string }>`
  margin: ${({ marginPoint }) => (marginPoint ? marginPoint : "0 6px")};
  color: ${({ color }) => (color ? color : "#fff")};
`;
