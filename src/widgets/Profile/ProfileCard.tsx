import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowTopRight, CopyIcon3, CompleteIcon } from "../../components/Svg";
import { Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { ellipsis } from "../../helpers/ellipsis";
import YAY_TOKEN_CIRCLE from "./images/logo-circle.png";
import { ProfileCardProps } from "./types";
import { CopyToClipboard } from "../../components/CopyToClipboard";
import TextWithTooltip from "../../components/TextWithTooltip/TextWithTooltip";
import { Button, USER_ICON } from "../..";

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
  refferal,
  linkRefferalList,
  linkEdit,
  linkKYC,
}) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const VerifiedBlock = () => (
    <Flex justifyContent="flex-start" alignItems="center" width="100%" mb="13px">
      <User verified={verified}>
        <img src={USER_ICON} />
      </User>
      <Text color={verified ? "green" : "textGray"} fontSize="13px" textAlign="left" width="100%">
        {verified ? texts.kycVerified : texts.kycNotVerified}
      </Text>
    </Flex>
  );

  return (
    <Card>
      <Token src={token || YAY_TOKEN_CIRCLE} alt="token1" />
      {refferal && linkRefferalList && (
        <RefferalBtn as={Link} to={linkRefferalList}>
          {texts.refferalListBtn}
        </RefferalBtn>
      )}

      <Title>{texts.title}</Title>
      <AccountLine>
        <Input readOnly value={ellipsis(account, 10)} type="text" />
        <LinkAccount href={linkAccount} target="_blank">
          <ArrowTopRight />
        </LinkAccount>
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
      <TextSponsor color="textGray" fontSize="13px" textAlign="left" width="100%" mb="32px">
        {sponsor}
      </TextSponsor>
      <Flex mb="10px" justifyContent="flex-start" width="100%">
        <Text fontSize="16px" textAlign="left">
          {texts.kyc}
        </Text>
        <TextWithTooltip textTooltip={texts.tooltip} />
      </Flex>
      {verified && <VerifiedBlock />}
      {!verified && (
        <Link to={linkKYC} style={{ width: "100%" }}>
          <VerifiedBlock />
        </Link>
      )}
      <AwardsLine>
        {awards?.map((el) => (
          <img alt="" src={el} key={el} />
        ))}
      </AwardsLine>
      {/* <Button width="100%" variant="option" as={Link} to={linkEdit} mt={20}>
        {texts.edit}
      </Button> */}
    </Card>
  );
};

export default ProfileCard;

const Card = styled.div`
  position: relative;
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
  width: 127px;
  height: 87px;
  margin-top: -30px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    height: auto;
    margin-top: -33px;
    margin-bottom: 16px;
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

const LinkAccount = styled.a`
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

const AwardsLine = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
`;

const TextLinkRefferal = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;
const TextSponsor = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
const User = styled.div<{ verified?: boolean }>`
  padding: 3px;
  margin-right: 11px;
  background: ${({ theme, verified }) => (verified ? theme.colors.green : theme.colors.whiteRgba)};
  border-radius: 7px;
`;

const RefferalBtn = styled(Button)`
  position: absolute;
  right: 12px;
  top: 14px;
  padding: 9px 15px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 7px;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.5px;
  height: auto;
`;
