import React from "react";
import styled from "styled-components";
import { ICardProps } from "./types";
import { Text, NFTShareIcon, StarIcon, HeartIcon } from "../../..";

const NFTCard: React.FC<ICardProps> = ({
  title,
  picUrl,
  author,
  avatarUrl,
  description,
  price,
  likes,
  onShare,
  onFavoritesAdd,
}) => {
  return (
    <Card>
      <LikesWrapper>
        <HeartIcon />
        <LikesText>{likes}</LikesText>
      </LikesWrapper>
      <Picture src={picUrl} alt={title} />
      <CenteredContainer>
        <Avatar src={avatarUrl} alt={author} />
        <div>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </div>
      </CenteredContainer>
      <DescriptionContainer>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionContainer>
      <FooterContainer>
        <PriceText>{price} YAY</PriceText>
        <CenteredContainer>
          <IconWrapper style={{ padding: "10px 8px" }} onClick={() => onShare()}>
            <NFTShareIcon />
          </IconWrapper>
          <IconWrapper style={{ padding: "8px" }} onClick={() => onFavoritesAdd()}>
            <StarIcon />
          </IconWrapper>
        </CenteredContainer>
      </FooterContainer>
    </Card>
  );
};

export default NFTCard;

const Card = styled.div`
  position: relative;
  width: 261px;
  height: 422px;
  background: ${({ theme }) => theme.colors.bgCard5};
  border-radius: 16px;
`;

const Title = styled(Text)`
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.03em;
  margin-top: 15px;
`;
const Author = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.greyText};
`;

const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 251px;
  height: 251px;
  padding-top: 5px;
  border-radius: 16px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  padding: 25px 22px;
`;

const DescriptionText = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.greyText};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 12px 20px;
`;

const PriceText = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.green};
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bgGrey3};
`;

const LikesWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 15px;
  right: 20px;
  width: 67px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.bgCard6};
  color: white;
  padding 8px 10px;
  border-radius: 8px;
`;

const LikesText = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.whiteText};
`;
