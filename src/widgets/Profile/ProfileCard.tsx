import React, { useState } from "react";
import styled from "styled-components";
import { ArrowTopRight, CopyIcon3, CompleteIcon } from "../../components/Svg";
import { Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { ellipsis } from "../../helpers/ellipsis";
import YAY_TOKEN_CIRCLE from "./images/logo-circle.png";
import { ProfileCardProps } from "./types";
import { CopyToClipboard } from "../../components/CopyToClipboard";
import TextWithTooltip from "../../components/TextWithTooltip/TextWithTooltip";
import { USER_ICON } from "../..";

const ProfileCard: React.FC<ProfileCardProps> = ({
  token,
  texts,
  account,
  linkAccount,
  linkRefferal,
  games,
  wins,
  losses,
  awards,
  sponsor,
  verified,
}) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <Card>
      <Token src={token || YAY_TOKEN_CIRCLE} alt="token1" />
      <Title>{texts.title}</Title>
      <AccountLine>
        <Input readOnly value={ellipsis(account, 10)} type="text" />
        <Link href={linkAccount} target="_blank">
          <ArrowTopRight />
        </Link>
      </AccountLine>
      <Flex justifyContent="space-between" alignItems="center" width="100%" mb="31px">
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
      <Text fontSize="16px" textAlign="left" width="100%">
        {texts.refferal}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" width="100%" mb="17px">
        <TextLinkRefferal color="textGray" fontSize="13px">
          {linkRefferal}
        </TextLinkRefferal>
        <CopyToClipboard
          toCopy={linkRefferal}
          textCopied=""
          icon={isTooltipDisplayed ? <CompleteIcon /> : <CopyIcon3 />}
          isTooltip={isTooltipDisplayed}
          setIsTooltip={setIsTooltipDisplayed}
        />
      </Flex>
      <Text fontSize="16px" textAlign="left" width="100%" mb="10px">
        {texts.sponsor}
      </Text>
      <Text color="textGray" fontSize="13px" textAlign="left" width="100%" mb="32px">
        {sponsor}
      </Text>
      <Flex mb="10px" justifyContent="flex-start" width="100%">
        <Text fontSize="16px" textAlign="left">
          {texts.kyc}
        </Text>
        <TextWithTooltip textTooltip={texts.tooltip} />
      </Flex>
      <Flex justifyContent="flex-start" alignItems="center" width="100%" mb="13px">
        <User verified={verified}>
          <img src={USER_ICON} />
        </User>
        <Text color={verified ? "green" : "textGray"} fontSize="13px" textAlign="left" width="100%">
          {verified ? texts.kycVerified : texts.kycNotVerified}
        </Text>
      </Flex>
      <AwardsLine>
        {awards?.map((el) => (
          <img alt="" src={el} key={el} />
        ))}
      </AwardsLine>
      {/* <Button width="100%" variant="option">
        {texts.edit}
      </Button> */}
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
  margin-bottom: 3px;
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
  margin-bottom: 19px;
`;

const AwardsLine = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 250px;
  margin: 0 auto 35px;
`;

const TextLinkRefferal = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;

const User = styled.div<{ verified?: boolean }>`
  padding: 3px;
  margin-right: 11px;
  background: ${({ theme, verified }) => (verified ? theme.colors.green : theme.colors.whiteRgba)};
  border-radius: 7px;
`;
