import React, { useState } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { CloseIcon } from "../Svg";
import TimerNotSolid from "../Timer/TimerNotSolid";

export interface ProgressAVAXProps {
  blockFrom: number;
  blockTo: number;
  blockCurrent: number;
  time: number;
  isLoad: boolean;
  texts: {
    start: string;
    end: string;
    note: string;
    currentBlock: string;
  };
}

const ProgressAVAX = ({ blockFrom, blockCurrent, blockTo, texts, time, isLoad }: ProgressAVAXProps) => {
  const [noteOpen, setNoteOpen] = useState(true);

  const progressHandler = () => {
    const from = blockCurrent - blockFrom;
    const to = blockTo - blockFrom;
    return Math.floor((100 * from) / to);
  };

  return (
    <Wrapper>
      <BlocksAndTimer>
        <Block>
          <Text size="xs">{blockFrom}</Text>
        </Block>
        <Timer>
          <p>≈</p>
          <TimerNotSolid isLoad={isLoad} time={time} avax />
        </Timer>
        <Block>
          <Text size="xs">{blockTo}</Text>
        </Block>
      </BlocksAndTimer>
      <Indicator progress={progressHandler()}>
        <RoundCurrentBlock progress={progressHandler()}>
          <Round />
          <TextUnderRound>
            <Text fontSize="10px">{texts.currentBlock}</Text>
            <CurrentBlockText fontSize="10px">{blockCurrent}</CurrentBlockText>
          </TextUnderRound>
        </RoundCurrentBlock>
      </Indicator>
      <Note>
        <UnderProgress open={noteOpen}>
          <Text fontSize="10px">{texts.start}</Text>
          <Text fontSize="10px">{texts.end}</Text>
        </UnderProgress>
        <NoteContent open={noteOpen}>
          <Text fontSize="10px">{texts.note}</Text>
          <CloseButton onClick={() => setNoteOpen(!noteOpen)}>
            <CloseIcon />
          </CloseButton>
        </NoteContent>
      </Note>
    </Wrapper>
  );
};

export default ProgressAVAX;

const Wrapper = styled.div`
  position: relative;
  max-width: 360px;
`;
const UnderProgress = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  opacity: ${({ open }) => (open ? 0 : 1)};
  transition: 0.3s;
`;
const BlocksAndTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
`;
const Timer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  line-height: 14px;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  & p {
    width: auto;
    margin: 0 5px 0 10px;
  }
`;
const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 24px;
  max-width: 109px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 6px;
`;

const RoundCurrentBlock = styled.div<{ progress?: number }>`
  position: absolute;
  z-index: 3;
  top: -4px;
  left: ${({ progress }) => (progress ? `${progress}%` : 0)};
`;
const Round = styled.div`
  position: relative;
  margin-bottom: 5px;
  right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.text};
  &:before {
    content: "";
    display: block;
    top: -5px;
    left: -5px;
    position: absolute;
    border: 9px solid ${({ theme }) => theme.colors.greeanRgba2};
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
`;
const Note = styled.div`
  position: relative;
  width: 100%;
`;
const NoteContent = styled.div<{ open: boolean }>`
  width: 100%;
  padding: 12px 57px 12px 20px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  z-index: 4;
  transition: 0.3s;
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
`;
const TextUnderRound = styled.div`
  display: none;
  position: relative;
  white-space: nowrap;
  opacity: 0;
  transition: 0.3s;
`;
const CurrentBlockText = styled(Text)`
  color: ${({ theme }) => theme.colors.greyText};
`;
const Indicator = styled.div<{ progress?: number }>`
  position: relative;
  width: 100%;
  height: 8px;
  margin-bottom: 13px;
  background: ${({ theme }) => theme.colors.greenRgba};
  //box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 6px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: calc(100% - 5px);
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.greenText2};
    border-radius: 2px;
    width: ${({ progress }) => (progress ? `${progress}%` : 0)};
    box-shadow: ${({ theme }) => theme.colors.boxShadow9};
    border-radius: 6px;
  }
  &:hover ${TextUnderRound} {
    left: ${({ progress }) => (progress && progress > 50 ? "-100%" : 0)};
    display: block;
    opacity: 1;
    transition: 0.3s;
  }
  &:hover ~ ${NoteContent} {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover ~ ${UnderProgress} {
    opacity: 0;
    transition: 0.3s;
  }
`;
