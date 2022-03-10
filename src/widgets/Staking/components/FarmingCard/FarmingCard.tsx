import React, { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import PairToken from "./PairToken";
import { Button } from "../../../../components/Button";
import { ButtonProps } from "../../../../components/Button/types";
import { TextWithTooltip } from "../../../../components/TextWithTooltip";

interface IProps {
  logoToken0: string | ReactNode;
  logoToken1: string | ReactNode;
  texts: {
    total: string;
    farming: string;
    network: string;
    startDate: string;
    endDate: string;
    yourStake: string;
    reward: string;
    deposit: string;
    claim: string;
    withdraw: string;
    exit: string;
    withdrawAndClaim: string;
    andEarn: string;
    getLp: string;
    tooltip: string;
  };
  tokenReward: string | ReactNode;
  network: string[];
  startDate: string | ReactNode;
  endDate: string | ReactNode;
  yourStake: string | ReactNode;
  reward: string | ReactNode;
  lp: string | ReactNode;
  pair: string | ReactNode;
  total: string | ReactNode;
  apy: string | ReactNode;
  buttonsFooter?: ReactNode;
  depositButtonProps?: ButtonProps;
  claimButtonProps?: ButtonProps;
  withdrawButtonProps?: ButtonProps;
  exitButtonProps?: ButtonProps;
  depositHandleClick: () => void | Promise<void>;
  claimHandleClick: () => void | Promise<void>;
  widthDrawHandleClick: () => void | Promise<void>;
  exitHandleClick: () => void | Promise<void>;
  getLpHandleClick: () => void | Promise<void>;
  getLPTokenNode?: ReactNode;
}

const FarmingCard = ({
  logoToken0,
  logoToken1,
  texts,
  tokenReward,
  network,
  startDate,
  endDate,
  yourStake,
  reward,
  lp,
  pair,
  total,
  apy,
  buttonsFooter,
  exitButtonProps,
  withdrawButtonProps,
  claimButtonProps,
  depositButtonProps,
  depositHandleClick,
  claimHandleClick,
  widthDrawHandleClick,
  exitHandleClick,
  getLpHandleClick,
  getLPTokenNode,
}: IProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <HeadLine>
        {texts.deposit} {pair} {texts.andEarn} {tokenReward}
      </HeadLine>
      <Card style={{ fontWeight: 400 }}>
        <TopBlock>
          <Flex justifyContent="space-between">
            <Text>{texts.total}</Text>
            <Text>{texts.farming}</Text>
          </Flex>
          <Flex mt={13} justifyContent="space-between">
            <Text>{total}</Text>
            <Text>{apy}</Text>
          </Flex>
          <Pair>
            <PairToken token0={logoToken0} token1={logoToken1} />
          </Pair>
        </TopBlock>
        <Content>
          {getLPTokenNode ? (
            getLPTokenNode
          ) : (
            <ButtonWrap>
              <Button
                style={{ fontWeight: 400 }}
                onClick={getLpHandleClick}
                fontSize="11px"
                padding="3px"
                variant="option"
                height="30px"
                width="100%"
                maxWidth="125px"
              >
                {texts.getLp} <TextWithTooltip preLine={true} textTooltip={texts.tooltip} />
              </Button>
            </ButtonWrap>
          )}
          <Flex mt={15} justifyContent="space-between">
            <LeftText style={{ alignItems: "center", marginTop: "3px" }}>{texts.network}</LeftText>
            <RightText style={network?.length > 1 ? { marginRight: "5px" } : {}}>
              <Network>
                {network &&
                  network.map((src, index) => (
                    <img key={index} alt="" src={src} style={network?.length > 1 ? { marginRight: "-5px" } : {}} />
                  ))}
              </Network>
            </RightText>
          </Flex>
          <Flex mt={25} justifyContent="space-between">
            <LeftText>{texts.yourStake}</LeftText>
            <RightText>{yourStake}</RightText>
          </Flex>
          <Flex mt={15} justifyContent="space-between">
            <LeftText>{texts.reward}</LeftText>
            <RightText>{reward}</RightText>
          </Flex>

          <Flex mt={15} justifyContent="space-between">
            <LeftText>{texts.startDate}</LeftText>
            <RightText>{startDate}</RightText>
          </Flex>
          <Flex mt={15} justifyContent="space-between">
            <LeftText>{texts.endDate}</LeftText>
            <RightText>{endDate}</RightText>
          </Flex>
          {buttonsFooter ? (
            buttonsFooter
          ) : (
            <Buttons>
              <Button onClick={depositHandleClick} padding="5px" variant="green" width="100%" {...depositButtonProps}>
                <div>
                  <Text style={{ fontWeight: 400 }} fontSize="13px">
                    {texts.deposit}
                  </Text>
                  {!depositButtonProps?.spin && (
                    <Text style={{ fontWeight: 400 }} fontSize="11px">
                      {lp}
                    </Text>
                  )}
                </div>
              </Button>
              <Button onClick={claimHandleClick} padding="5px" variant="green" width="100%" {...claimButtonProps}>
                <div>
                  <Text style={{ fontWeight: 400 }} fontSize="13px">
                    {texts.claim}
                  </Text>
                  {!claimButtonProps?.spin && (
                    <Text style={{ fontWeight: 400 }} fontSize="11px">
                      {tokenReward} {texts.reward}
                    </Text>
                  )}
                </div>
              </Button>
              <Button
                onClick={widthDrawHandleClick}
                padding="5px"
                variant="green"
                width="100%"
                style={{ fontWeight: 400 }}
                {...withdrawButtonProps}
              >
                <div>
                  <Text style={{ fontWeight: 400 }} fontSize="13px">
                    {texts.withdraw}
                  </Text>
                  {!withdrawButtonProps?.spin && (
                    <Text style={{ fontWeight: 400 }} fontSize="11px">
                      {lp}
                    </Text>
                  )}
                </div>
              </Button>
              <Button onClick={exitHandleClick} padding="5px" variant="green" width="100%" {...exitButtonProps}>
                <div>
                  <Text style={{ fontWeight: 400 }} fontSize="13px">
                    {texts.exit}
                  </Text>
                  {!exitButtonProps?.spin && (
                    <Text style={{ fontWeight: 400 }} fontSize="11px">
                      {texts.withdrawAndClaim}
                    </Text>
                  )}
                </div>
              </Button>
            </Buttons>
          )}
        </Content>
      </Card>
    </Flex>
  );
};

export default FarmingCard;

const HeadLine = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.5px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
    max-width: 308px;
  }
`;
const Card = styled.div`
  max-width: 375px;
  width: 100%;
  padding: 7px 7px 25px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
`;
const TopBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 12px;
`;
const Pair = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: translate(-50%, -10px);
  }
`;
const Content = styled.div`
  padding: 45px 10px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 45px 20px 0;
  }
`;

const RightText = styled(Text)`
  font-size: 11px;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
  }
`;
const LeftText = styled(RightText)`
  color: ${({ theme }) => theme.colors.textGray};
`;
const Buttons = styled.div`
  margin-top: 25px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 17px 23px;
  }
`;
const ButtonWrap = styled.div`
  text-align: center;
`;

const Network = styled.div`
  display: flex;
  & img {
    width: 24px;
    height: 24px;
    box-shadow: ${({ theme }) => theme.colors.textShadow};
  }
`;
