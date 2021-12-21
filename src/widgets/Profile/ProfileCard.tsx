import React, { useState } from "react";
import styled from "styled-components";
import { EyeCloseIcon, EyeOpenIcon, ArrowTopRight } from "../../components/Svg";
import { Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { ellipsis } from "../../helpers/ellipsis";
import YAY_TOKEN_CIRCLE from "./images/logo-circle.png";
import { ProfileCardProps } from "./types";
import { Button } from "../..";

const ProfileCard: React.FC<ProfileCardProps> = ({
  token,
  texts,
  account,
  linkAccount,
  linkRefferal,
  coins,
  games,
  wins,
  losses,
  awards,
}) => {
  const [isVisibleAccount, setIsVisibleAccount] = useState(true);

  const handleClickEye = () => {
    setIsVisibleAccount(!isVisibleAccount);
  };

  return (
    <Card>
      <Token src={token || YAY_TOKEN_CIRCLE} alt="token1" />
      <Title>{texts.title}</Title>
      <AccountLine>
        <Input readOnly value={ellipsis(account, 10)} type={isVisibleAccount ? "text" : "password"} />
        {/* <Eye onClick={handleClickEye}>
          {!isVisibleAccount && <EyeCloseIcon />}
          {isVisibleAccount && <EyeOpenIcon fill="whiteRgba" />}
        </Eye> */}
        <Link href={linkAccount}>
          <ArrowTopRight />
        </Link>
      </AccountLine>
      <Flex justifyContent="space-between" alignItems="center" width="100%" mb="38px">
        <div>
          <Text fontSize="21px" lineHeight="27px" letterSpacing="0.05em" mb="7px">
            {coins || 0}
          </Text>
          <Text fontSize="13px" lineHeight="16px" letterSpacing="0.05em" color="greyText">
            {texts.coins}
          </Text>
        </div>
        <div>
          <Text fontSize="21px" lineHeight="27px" letterSpacing="0.05em" mb="7px">
            {games || 0}
          </Text>
          <Text fontSize="13px" lineHeight="16px" letterSpacing="0.05em" color="greyText">
            {texts.games}
          </Text>
        </div>
        <div>
          <Text fontSize="21px" lineHeight="27px" letterSpacing="0.05em" mb="7px">
            {wins || 0}
          </Text>
          <Text fontSize="13px" lineHeight="16px" letterSpacing="0.05em" color="greyText">
            {texts.wins}
          </Text>
        </div>
        <div>
          <Text fontSize="21px" lineHeight="27px" letterSpacing="0.05em" mb="7px">
            {losses || 0}
          </Text>
          <Text fontSize="13px" lineHeight="16px" letterSpacing="0.05em" color="greyText">
            {texts.losses}
          </Text>
        </div>
      </Flex>
      <Text mb="3px" fontSize="16px" textAlign="left" width="100%">
        {texts.refferal}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" width="100%" mb="36px">
        <Text color="textGray" fontSize="13px">
          {linkRefferal}
        </Text>
        <Link href={linkRefferal}>
          <ArrowTopRight />
        </Link>
      </Flex>
      <AwardsLine>
        {awards?.map((el) => (
          <img alt="" src={el} key={el} />
        ))}
      </AwardsLine>
      <Button width="100%" variant="option">
        {texts.edit}
      </Button>
    </Card>
  );
};

export default ProfileCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 14px 16px 14px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 27px 29px 27px;
  }
`;

const Title = styled(Text)`
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.03em;
  margin-bottom: 9px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 20px;
    line-height: 25px;
  }
`;
const Token = styled.img`
  margin-top: -30px;
  margin-bottom: 8px;
  width: 127px;
  height: 87px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: -33px;
    margin-bottom: 16px;
    width: auto;
    height: auto;
  }
`;

const Eye = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const Input = styled.input`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 13px;
  letter-spacing: 0.05em;
  border: none;
  background: none;
  outline: none;
  width: 100%;
`;

const Link = styled.a`
  & rect {
    fill: ${({ theme }) => theme.colors.whiteRgba};
  }
`;

const AccountLine = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 40px;
  }
`;

const AwardsLine = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 250px;
  margin: 0 auto 35px;
`;
