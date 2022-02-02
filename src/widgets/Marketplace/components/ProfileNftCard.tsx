import React from "react";
import styled, { useTheme } from "styled-components";
import { Text, HeartIcon } from "../../..";
import { CardHover, CardWrapper } from "../styled";
import { IProfileCardProps } from "./types";
import { Skeleton } from "../../../components/Skeleton";

const ProfileNftCard: React.FC<IProfileCardProps> = ({
  isLoading,
  title,
  picUrl,
  price,
  likes,
  isLiked,
  onLike,
  onNftClick,
  onTitleClick,
  color,
}) => {
  const theme = useTheme();
  return (
    <CardWrapper maxWidth={233}>
      <Card>
        {!isLoading && (
          <>
            <Picture src={picUrl} alt={title} onClick={() => onNftClick()} />
            <Title onClick={() => (onTitleClick ? onTitleClick() : null)}>{title}</Title>
            <FooterContainer>
              <PriceText>{price}</PriceText>
              {/* <Likes>
          <CenteredContainer>
            <IconWrapper onClick={() => onLike()}>
              <HeartIcon fill={isLiked ? theme.colors.green : "none"} stroke={theme.colors.green} />
            </IconWrapper>
            <LikesText>{likes}</LikesText>
          </CenteredContainer>
        </Likes> */}
            </FooterContainer>
          </>
        )}
        {isLoading && (
          <>
            <Skeleton width={210} height={230} />
            <Title>
              {" "}
              <Skeleton width={150} />
            </Title>
            <FooterContainer>
              <PriceText>
                <Skeleton width={75} />
              </PriceText>
            </FooterContainer>
          </>
        )}
      </Card>
      <CardHover colorTheme={color} />
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
  cursor: pointer;
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
  font-weight: 400;
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
