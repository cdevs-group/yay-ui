import React from "react";
import styled from "styled-components";
import { ICardGamesProps } from "./types";
import { Text, NFTShareIcon, StarIcon, Flex } from "../../..";
import { CardHover, CardWrapper } from "../styled";

const NFTCardGames: React.FC<ICardGamesProps> = ({
  title,
  picUrl,
  avatarUrl,
  description,
  textSeeNow,
  onShare,
  onNftClick,
  network1,
  network2,
  onSeeNowClick,
}) => {
  return (
    <CardWrapper>
      <Card>
        <Network>
          <img alt="" src={network1} />
          {network2 && <img alt="" src={network2} className="network2" />}
        </Network>
        <PictureWrapper>
          <Picture src={picUrl} alt={title} onClick={() => onNftClick()} />
        </PictureWrapper>
        <Body>
          <Flex alignItems="center" mb="24px" onClick={() => onNftClick()}>
            <Avatar src={avatarUrl} alt="" />
            <div style={{ overflow: "hidden" }}>
              <Title>{title}</Title>
            </div>
          </Flex>
          <Text color="textGray" mb="29px" fontWeight={400}>
            {description}
          </Text>
          <FooterContainer>
            <SeeText onClick={() => onSeeNowClick()} role="button">
              {textSeeNow}
            </SeeText>
            <Flex>
              <IconWrapper style={{ padding: "10px 8px" }} onClick={() => onShare()} role="button">
                <NFTShareIcon />
              </IconWrapper>
            </Flex>
          </FooterContainer>
        </Body>
      </Card>
      <CardHover />
    </CardWrapper>
  );
};

export default NFTCardGames;

const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 422px;
  background: ${({ theme }) => theme.colors.dark3};
  border-radius: 16px;
  transition: 0.3s;
  z-index: 1;
  ${CardWrapper}:hover & {
    background: ${({ theme }) => theme.colors.dark3};
    transition: 0.3s;
  }
`;

const Network = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  & img {
    width: 32px;
    height: 32px;
    box-shadow: ${({ theme }) => theme.colors.textShadow};
    border-radius: 9px;
  }
  & .network2 {
    margin-left: -17px;
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

const SeeText = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
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
