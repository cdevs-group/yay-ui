import React from "react";
import styled from "styled-components";
import { ICardProps } from "./types";
import { Text, NFTShareIcon, StarIcon, Flex } from "../../..";
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
  onAuthorClick,
  onNftClick,
  onLikeAdd,
  network,
}) => {
  return (
    <Card>
      <Network>{network && <img alt="" src={network} />}</Network>
      <Likes
        likes={likes}
        onLikeAdd={onLikeAdd}
        wrapperStyle={{
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      />
      <PictureWrapper>
        <Picture src={picUrl} alt={title} onClick={() => onNftClick()} />
      </PictureWrapper>
      <Body>
        <Flex alignItems="center" mb="24px">
          <Avatar src={avatarUrl} alt={author} onClick={() => onAuthorClick()} />
          <div style={{ overflow: "hidden" }}>
            <Title onClick={() => onNftClick()}>{title}</Title>
            <Author onClick={() => onAuthorClick()}>{author}</Author>
          </div>
        </Flex>
        <Text color="textGray" mb="29px" fontWeight={400}>
          {description}
        </Text>
        <FooterContainer>
          <PriceText>{price}</PriceText>
          <Flex>
            <IconWrapper style={{ padding: "10px 8px" }} onClick={() => onShare()}>
              <NFTShareIcon />
            </IconWrapper>
            <IconWrapper style={{ padding: "8px" }} onClick={() => onFavoritesAdd()}>
              <StarIcon />
            </IconWrapper>
          </Flex>
        </FooterContainer>
      </Body>
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

const Network = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  & img {
    width: 32px;
    height: 32px;
  }
`;

const Title = styled(Text)`
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  cursor: pointer;
`;

const Author = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greyText};
`;

const PictureWrapper = styled.div`
  padding: 5px;
`;

const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 251px;
  border-radius: 16px;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const FooterContainer = styled(Flex)`
  margin-top: auto;
  justify-content: space-between;
`;

const PriceText = styled(Text)`
  font-size: 13px;
  font-weight: 400;
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

const Body = styled(Flex)`
  flex-direction: column;
  padding: 18px 16px 12px 16px;
`;
