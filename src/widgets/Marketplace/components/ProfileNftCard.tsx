import React from "react";
import styled from "styled-components";
import { Text, GreenHollowHeartIcon, GreenFilledHeartIcon, HeartIcon } from "../../..";
import { IProfileCardProps } from "./types";

const ProfileNftCard: React.FC<IProfileCardProps> = ({ title, picUrl, price, likes, isLiked, onLike }) => {
  return (
    <Card>
      <Picture src={picUrl} alt={title} />
      <Title>{title}</Title>
      <FooterContainer>
        <PriceText>{price} YAY</PriceText>
        <Likes>
          <CenteredContainer>
            <IconWrapper onClick={() => onLike()}>
              <HeartIcon fill={isLiked ? "#4BE43E" : "none"} stroke="#4BE43E" />
            </IconWrapper>
            <LikesText>{likes}</LikesText>
          </CenteredContainer>
        </Likes>
      </FooterContainer>
    </Card>
  );
};

export default ProfileNftCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 233px;
  min-height: 320px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bgCard5};
  border-radius: 10px;
`;

const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  height: 230px;
  padding-top: 12px;
  border-radius: 16px;
`;

const Title = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  margin: 20px 10px 5px 10px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 10px 22px 10px;
  width: 100%;
  max-width: 261px;
`;

const PriceText = styled(Text)`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin-top: 10px;
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
