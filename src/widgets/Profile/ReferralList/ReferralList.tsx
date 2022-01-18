import React from "react";
import TopBlock from "./components/TopBlock";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { ArrowDownIcon } from "../../../components/Svg";
import { IReferralListProps } from "./types";
import ReferralListItems from "./components/ReferralListItems";
import { Pagination } from "../../../components/Pagination";

const ReferralList = ({
  handleBack,
  data,
  texts,
  earnValue,
  miniValue,
  predictionValue,
  nftValue,
  length,
  togglePage,
  currentPage,
}: IReferralListProps) => {
  return (
    <div>
      <Flex alignItems="center">
        <ButtonBackButton onClick={handleBack}>
          <ArrowDownIcon />
        </ButtonBackButton>
        <ButtonBackText>{texts.buttonBack}</ButtonBackText>
      </Flex>
      <TopLine>
        <TopBlock title={earnValue} value={texts.topRef} />
        <TopBlock title={miniValue} value={texts.topMini} />
        <TopBlock title={predictionValue} value={texts.topPrediction} />
        <TopBlock title={nftValue} value={texts.topNft} />
      </TopLine>
      <TitleList>{texts.referralTitle}</TitleList>
      <ReferralListItems data={data} texts={texts} />
      {length && (
        <Flex mt={20} justifyContent="flex-end">
          <Pagination currentPage={currentPage} length={length} togglePage={togglePage} />
        </Flex>
      )}
    </div>
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
