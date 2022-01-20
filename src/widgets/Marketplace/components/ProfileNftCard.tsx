import React from "react";
import styled from "styled-components";
import { Text, GreenHollowHeartIcon, GreenFilledHeartIcon, HeartIcon } from "../../..";
import { CardHover, CardWrapper } from "../styled";
import { IProfileCardProps } from "./types";

const ProfileNftCard: React.FC<IProfileCardProps> = ({ title, picUrl, price, likes, isLiked, onLike }) => {
  return (
    <CardWrapper maxWidth={233}>
      <Card>
        <Picture src={picUrl} alt={title} />
        <Title>{title}</Title>
        <FooterContainer>
          <PriceText>{price} YAY</PriceText>
          {/* <Likes>
          <CenteredContainer>
            <IconWrapper onClick={() => onLike()}>
              <HeartIcon fill={isLiked ? "#4BE43E" : "none"} stroke="#4BE43E" />
            </IconWrapper>
            <LikesText>{likes}</LikesText>
          </CenteredContainer>
        </Likes> */}
        </FooterContainer>
      </Card>
      <CardHover />
    </CardWrapper>
  );
};

export default ProfileNftCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  background: ${({ theme }) => theme.colors.dark3};
  border-radius: 10px;
  transition: 0.3s;
  z-index: 1;
  padding: 10px 10px 22px;
  ${CardWrapper}:hover & {
    background: ${({ theme }) => theme.colors.dark3};
    transition: 0.3s;
  }
`;

const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  height: 230px;
  border-radius: 16px;
`;

const Title = styled(Text)`
  margin: 15px 0 5px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 261px;
`;

const PriceText = styled(Text)`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  margin: 2px 5px 0 0;
`;

const Likes = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const LikesText = styled(Text)`
  font-size: 12px;
  letter-spacing: 0.03em;
`;
