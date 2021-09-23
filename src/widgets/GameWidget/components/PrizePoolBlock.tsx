import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";

interface PrizePoolBlockProps {
  title: string;
  value: string;
  cardData1: CardProps;
  cardData2: CardProps;
  versus?: string;
  leftContent: string;
  rightContent: React.ReactNode;
  time?: number;
  disabled: boolean;
}
interface CardProps {
  name: string;
  coefficient: string;
  price: string;
  priceValue: string;
  margin?: string;
}
const PrizePoolBlock = ({
  title,
  value,
  cardData1,
  cardData2,
  versus,
  leftContent,
  rightContent,
  time,
  disabled,
}: PrizePoolBlockProps) => {
  const Card = ({ name, coefficient, price, priceValue, margin }: CardProps) => {
    return (
      <CardWrapper margin={margin}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="14px">{name}</Text>
          <Text fontSize="14px">{coefficient}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="14px">{price}</Text>
          <Text fontSize="14px">{priceValue}</Text>
        </Flex>
      </CardWrapper>
    );
  };

  return (
    <Wrapper>
      <TopContent>
        <LeftContent>{leftContent}</LeftContent>
        <TimerNotSolidWithoutBg
          marginPoint="0 12px"
          fontSize="21px"
          width="100%"
          widthWrapper="100%"
          background="#232323"
          time={time}
          color="#fff"
          disabled={disabled}
        />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <BlockWrapper>
        <TopLine>
          <Text fontSize="17px">{title}</Text>
          <Text fontSize="17px">{value}</Text>
        </TopLine>
        <Content>
          <Card
            margin="0 5px 0 0"
            name={cardData1.name}
            coefficient={cardData1.coefficient}
            price={cardData1.coefficient}
            priceValue={cardData1.priceValue}
          />
          <Card
            margin="0 0 0 5px"
            name={cardData2.name}
            coefficient={cardData2.coefficient}
            price={cardData2.coefficient}
            priceValue={cardData2.priceValue}
          />
          <RoundVS>{versus || "VS"}</RoundVS>
        </Content>
      </BlockWrapper>
    </Wrapper>
  );
};

export default PrizePoolBlock;

const Wrapper = styled.div`
  max-width: 366px;
  width: 100%;
`;
const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  flex: none;
  display: flex;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 50px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-right: 12px;
  background: ${({ theme }) => theme.colors.bgCard2};
  color: ${({ theme }) => theme.colors.text};
`;

const RightContent = styled(LeftContent)`
  margin-left: 12px;
  margin-right: 0;
  & svg rect {
    fill: none;
    stroke-width: 2px;
  }
  & svg mask rect {
    fill: #fff;
  }
`;
const BlockWrapper = styled.div`
  width: 100%;
  padding: 21px 21px 27px;
  margin-top: 15px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
`;
const TopLine = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  ${Text} {
    color: ${({ theme }) => theme.colors.green};
  }
`;
const Content = styled(Flex)`
  position: relative;
  margin-top: 15px;
  width: 100%;
`;
const CardWrapper = styled(Flex)`
  width: 100%;
  min-height: 269px;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 19px 14px;
  background: ${({ theme }) => theme.colors.bgCard3};
  border-radius: 10px;
`;
const RoundVS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.dark2};
  border: 5px solid ${({ theme }) => theme.colors.bgCard3};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.colors.textShadow};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;
