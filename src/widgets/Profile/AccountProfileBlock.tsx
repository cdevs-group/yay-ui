import React, { useState } from "react";
import styled from "styled-components";
import { EyeCloseIcon, EyeOpenIcon, ArrowTopRight } from "../../components/Svg";
import { Flex, Box } from "../../components/Box";
import { Text } from "../../components/Text";
import { ellipsis } from "../../helpers/ellipsis";
import YAY_TOKEN_CIRCLE2 from "./images/logo-circle2.png";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

interface IProps extends LayoutProps, SpaceProps {
  token?: string;
  account: string;
  linkAccount?: string;
  texts: {
    title: string;
  };
}

const AccountProfileBlock: React.FC<IProps> = ({ token, texts, account, linkAccount, ...props }) => {
  const [isVisibleAccount, setIsVisibleAccount] = useState(true);

  const handleClickEye = () => {
    setIsVisibleAccount(!isVisibleAccount);
  };

  return (
    <Card {...props}>
      <Token src={token || YAY_TOKEN_CIRCLE2} alt="token1" />
      <Title>{texts.title}</Title>
      <AccountLine>
        <Input readOnly value={ellipsis(account, 10)} type={isVisibleAccount ? "text" : "password"} />
        <Eye onClick={handleClickEye}>
          {!isVisibleAccount && <EyeCloseIcon />}
          {isVisibleAccount && <EyeOpenIcon fill="whiteRgba" />}
        </Eye>
        <Link href={linkAccount}>
          <ArrowTopRight />
        </Link>
      </AccountLine>
    </Card>
  );
};

export default AccountProfileBlock;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
  ${layout}
  ${space}
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
