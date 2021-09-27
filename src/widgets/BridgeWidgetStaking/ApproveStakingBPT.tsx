import React from "react";
import styled from "styled-components";
import NameCell from "./components/NameCell";
import TotalStakedCell from "./components/TotalStakedCell";
import ApproveCell from "./components/ApproveCell";
import { LinkExternal } from "../../components/Link";
import { OpenNewIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import { ApproveStakingBPTProps } from "./types";

const ApproveStakingBPT = ({
  handleAddToken,
  texts,
  isLoad,
  imgToken1,
  imgToken2,
  stakingBalance,
  BPTBalance,
  AVAXBalance,
  handleApprove,
  hrefSeeTokenInfo,
  hrefViewContract,
}: ApproveStakingBPTProps) => {
  return (
    <div>
      <StyledRow>
        <NameCell title={texts.titleToken} tokenName={texts.nameToken} token1={imgToken1} token2={imgToken2} />
        <TotalStakedCell title={texts.totalStake} balance={stakingBalance} />
        <TotalStakedCell title={texts.totalBPT} balance={BPTBalance} />
        <TotalStakedCell title={texts.totalAVAX} balance={AVAXBalance} />
        <ApproveCell
          handleApprove={handleApprove}
          textWaiting={texts.waitingApprove}
          isLoad={isLoad}
          textButton={texts.buttonApprove}
        />
      </StyledRow>
      <StyledActionPanel>
        <LinkItem href={hrefSeeTokenInfo} bold={false} target="_blank">
          {texts.infoLink}
        </LinkItem>
        <LinkItem href={hrefViewContract} bold={false} target="_blank">
          {texts.contactLink}
        </LinkItem>
        <AddToMetamask as="button" onClick={handleAddToken}>
          <Text>{texts.addTokenLink}</Text>
          <OpenNewIcon ml="4px" />
        </AddToMetamask>
      </StyledActionPanel>
    </div>
  );
};

export default ApproveStakingBPT;

const StyledRow = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.greyRgba2};
  gap: 0 20px;
  border-radius: 15px 15px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 19px 22px 23px 15px;
    flex-direction: row;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.cardBg};
    justify-content: space-between;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 19px 40px 23px 35px;
  }
`;

const StyledActionPanel = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 12px 25px;
  border-radius: 0 0 15px 15px;
  background: ${({ theme }) => theme.colors.greyRgba2};
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    padding: 38px 35px 25px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 38px 35px 25px;
    margin-top: -23px;
    //   padding: 46px 12px 12px;
  }
  //   background: ${({ theme }) => theme.colors.greyRgba2};
  // }
  // ${({ theme }) => theme.mediaQueries.lg} {
  //   padding: 46px 32px 25px;
  // }
`;
const LinkItem = styled(LinkExternal)`
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
    margin-right: 56px;
  }
`;
const AddToMetamask = styled(LinkItem)`
  margin-bottom: 0;
  margin-right: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  align-items: center;
  cursor: pointer;
  //color: ${({ theme }) => theme.colors.green};
  & svg path {
    fill: ${({ theme }) => theme.colors.green};
  }
  & div {
    color: ${({ theme }) => theme.colors.green};
  }
`;
