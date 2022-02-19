import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { baseColors } from "../../theme/colors";
import { ButtonStyle, Reward, Network, ButtonText, ButtonTextMob, TitleStyle, AddressStyle } from "./StyledCards";

interface IRefferalCardProps {
  id?: string | number;
  image: string;
  title: string;
  description: string;
  collectText?: string;
  handleCollect?: (val?: string | number) => void;
  collectTextMob?: string;
  disabledButton?: boolean;
  loadingButton?: boolean;
  reward?: string;
  network?: string;
  created?: string;
}

const RefferalCard = ({
  image,
  title,
  description,
  collectText,
  collectTextMob,
  handleCollect,
  disabledButton,
  loadingButton,
  reward,
  network,
  created,
}: IRefferalCardProps) => {
  return (
    <Card>
      {network && <Network src={network} alt="" />}
      <Reward>
        <Text fontWeight={500} letterSpacing="0.05em" fontSize="10px">
          {reward}
        </Text>
      </Reward>
      <ImageBlock>
        <img src={image} />
      </ImageBlock>
      <Text color="textGray" mb="5px" lineHeight="10px" fontWeight={400} fontSize="8px">
        {created}
      </Text>
      <TitleStyle>{title}</TitleStyle>
      <AddressStyle color={baseColors.textGray}>{description}</AddressStyle>
      <ButtonStyle
        padding="0 15px"
        height="30px"
        width="100%"
        variant="green"
        onClick={handleCollect}
        disabled={disabledButton}
        spin={loadingButton}
      >
        <ButtonText loadingButton={loadingButton}>{collectText}</ButtonText>
        <ButtonTextMob loadingButton={loadingButton}>{collectTextMob}</ButtonTextMob>
      </ButtonStyle>
    </Card>
  );
};

export default RefferalCard;

const ImageBlock = styled.div`
  margin: 0 auto 6px;
  & img {
    max-height: 61px;
    max-width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 25px 14px 16px;
  background: ${({ theme }) => theme.colors.bgGray};
  border: 1.5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.boxShadow14};
  }
`;
