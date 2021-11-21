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
  function getTimeRemaining(expiryTimestamp: number) {
    const seconds = Math.floor(expiryTimestamp % 60);
    const minutes = Math.floor((expiryTimestamp / 60) % 60);
    const hours = Math.floor((expiryTimestamp / (60 * 60)) % 24);
    const days = Math.floor(expiryTimestamp / (60 * 60 * 24));

    return {
      expiryTimestamp,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // const hours = Math.floor(expiryTimestamp / 3600);
  // console.log(hours)
  // const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
  // const seconds = expiryTimestamp - hours * 3600 - minutes * 60;

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  // const timeArray = hoursHide ? [minutes, seconds] : [hours, minutes, seconds];
  const timeShow = ["h", "m", "s"];
  const pointsAfter = hoursHide ? 1 : 2;
  const date = getTimeRemaining(expiryTimestamp);

  const renderTime = (date: number, longName: string, shortName: string) => {
    return date > 0 ? (
      <>
        <span>
          {date} <Mob> {shortName}</Mob>
          <Desk> {longName}</Desk>
        </span>
        <span>:</span>
      </>
    ) : (
      <>
        <span>
          00 <Mob> {shortName}</Mob>
          <Desk> {longName}</Desk>
        </span>
        <span>:</span>
      </>
    );
  };
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
        {/*{timeArray.map((item, i) => (*/}
        {/*  <React.Fragment key={`item-${i}`}>*/}
        {/*    <ItemWithoutBg withTime={withTime} fontSize={fontSize} color={color}>*/}
        {/*    /!*  {handleDigit(item).leftDigit}*!/*/}
        {/*    /!*  {handleDigit(item).rightDigit} {withTime && timeShow[i]}*!/*/}
        {/*    </ItemWithoutBg>*/}
        {/*    /!*{i === pointsAfter ? null : (*!/*/}
        {/*    /!*  <DotsWithoutBg color={color} marginPoint={marginPoint}>*!/*/}
        {/*    /!*    :*!/*/}
        {/*    /!*  </DotsWithoutBg>*!/*/}
        {/*    /!*)}*!/*/}
        {/*  </React.Fragment>*/}
        {/*))}*/}
        {renderTime(date.days, "days", "d")}
        {renderTime(date.hours, "hours", "h")}
        {renderTime(date.minutes, "minutes", "m")}
        {/*{date.days > 0 ? <><span>{date.days} <Mob> d</Mob><Desk> days</Desk></span><span>:</span></>: <><span>00 <Mob> d</Mob><Desk> days</Desk></span><span>:</span></>}*/}
        {/*{date.hours > 0 ? <><span>{date.hours} <Mob> h</Mob><Desk> hours</Desk></span><span>:</span></> : <><span>00 <Mob> h</Mob><Desk> hours</Desk></span><span>:</span></>}*/}
        {/*{date.minutes > 0 ? <><span>{date.minutes} <Mob> m</Mob><Desk> minutes</Desk></span><span>:</span></> : <><span>00 <Mob> m</Mob><Desk> minutes</Desk></span><span>:</span></>}*/}
        <span>
          {" "}
          {date.seconds} <Mob> s</Mob>
          <Desk> seconds</Desk>{" "}
        </span>
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
          color={color || "#fff"}
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
const Mob = styled.span`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;
const Desk = styled.span`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: inline;
  }
`;
const BlockWithoutBg = styled(Block)<TimerColorProps>`
  display: flex;
  padding: 12px 15px;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "50px")};
  background: ${({ background }) => (background ? background : "none")};
  //border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "none")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "11px")};
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  & span {
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 15px 40px;
    & span {
      font-size: 15px;
      text-align: center;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.colors.text};
    }
  }
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
