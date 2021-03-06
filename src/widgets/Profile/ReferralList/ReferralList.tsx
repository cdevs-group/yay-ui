import React from "react";
import TopBlock from "./components/TopBlock";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { ArrowDownIcon } from "../../../components/Svg";
import { IReferralListProps } from "./types";
import ReferralListItems from "./components/ReferralListItems";

const ReferralList = ({
  handleBack,
  data,
  texts,
  earnValue,
  miniValue,
  predictionValue,
  nftValue,
  pagination,
  keys,
  loading,
}: IReferralListProps) => {
  return (
    <>
      <Flex alignItems="center">
        <ButtonBackButton onClick={handleBack}>
          <ArrowDownIcon />
        </ButtonBackButton>
        <ButtonBackText>{texts.buttonBack}</ButtonBackText>
      </Flex>
      <TopLine>
        <TopBlock loading={loading} title={earnValue} value={texts.topRef} />
        <TopBlock loading={loading} title={miniValue} value={texts.topMini} />
        <TopBlock loading={loading} title={predictionValue} value={texts.topPrediction} />
        <TopBlock loading={loading} title={nftValue} value={texts.topNft} />
      </TopLine>
      <TitleList>{texts.referralTitle}</TitleList>
      <ReferralListItems data={data} keys={keys} texts={texts} pagination={pagination} />
    </>
  );
};

export default ReferralList;

const TopLine = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
    gap: 0 15px;
  }
`;
const ButtonBackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  border-radius: 7px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.whiteRgba};
  transform: rotate(90deg);
`;
const ButtonBackText = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-left: 10px;
`;
const TitleList = styled(Text)`
  margin: 30px 0;
  font-size: 25px;
  line-height: 27px;
  letter-spacing: 0.03em;

  ${({ theme }) => theme.mediaQueries.xmd} {
    font-size: 31px;
    line-height: 39px;
  }
`;
