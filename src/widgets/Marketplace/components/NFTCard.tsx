import React from "react";
import styled from "styled-components";
import { ICardProps } from "./types";
import { Text, NFTShareIcon, StarIcon } from "../../..";
import Likes from "./Likes";

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
      <Likes
        likes={likes}
        wrapperStyle={{
          position: "absolute",
          top: "15px",
          right: "20px",
        }}
      />
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
        <Buttons>
          <CenteredContainer>
            <IconWrapper style={{ padding: "10px 8px" }} onClick={() => onShare()}>
              <NFTShareIcon />
            </IconWrapper>
            <IconWrapper style={{ padding: "8px" }} onClick={() => onFavoritesAdd()}>
              <StarIcon />
            </IconWrapper>
          </CenteredContainer>
        </Buttons>
      </FooterContainer>
    </Card>
  );
};

export default NFTCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 261px;
  min-height: 422px;
  margin: 0 auto;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  max-width: 261px;
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

const Buttons = styled.div`
  position: absolute;
  right: 20px;
  bottom: 13px;
`;
