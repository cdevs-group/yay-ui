import React, { useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { Login } from "../../WalletModal/types";
import { TextsConnect } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork, Funds, TextsAccountMarketplace } from "../types";
import { useModal } from "../../Modal";
import ConnectModal from "../../WalletModal/ConnectModal";
import {
  ACHIEVEMENTS,
  ArrowDownIcon,
  Button,
  CollectionIcon,
  FavoritesIcon,
  Flex,
  UserIcon,
  WalletIcon,
} from "../../..";
import DropdownLayout from "../../../components/DropDown/DropDown";
import { ellipsis } from "../../../helpers/ellipsis";
import { CopyToClipboard } from "../../../components/CopyToClipboard";
import { LabelTop } from "../../../components/LabelTop";
import { Link } from "react-router-dom";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccountMarketplace;
  hrefLearnHow?: string;
  network?: BlockChainNetwork;
  totalBalance: string;
  funds: Funds[];
  heightDisclaimer?: number;
}

const AccountMarketplace: React.FC<Props> = ({
  account,
  login,
  logout,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  network,
  totalBalance,
  funds,
  heightDisclaimer,
}) => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} network={network} />
  );
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openFunds, setOpenFunds] = useState<boolean>(false);

  const handleOpenFunds = () => {
    console.log(1);
    setOpenFunds(!openFunds);
  };

  const links = [
    {
      icon: <UserIcon />,
      text: textsAccount.myProfile,
      link: textsAccount.linkMyProfile,
      comingSoon: true,
    },
    {
      icon: <FavoritesIcon />,
      text: textsAccount.favorities,
      link: textsAccount.linkFavorities,
      comingSoon: true,
    },
    {
      icon: <CollectionIcon />,
      text: textsAccount.myCollections,
      link: textsAccount.linkMyCollections,
      comingSoon: true,
    },
    {
      icon: <img src={ACHIEVEMENTS} alt="" />,
      text: textsAccount.achievements,
      link: textsAccount.linkAchievements,
      comingSoon: true,
    },
  ];

  const LinkUser = ({
    icon,
    text,
    link,
    comingSoon,
  }: {
    icon: React.ReactNode;
    text: string;
    link?: string;
    comingSoon?: boolean;
  }) => {
    const Item = () => (
      <Flex alignItems="center">
        {icon}
        <Text style={{ marginLeft: 11 }}>{text}</Text>
      </Flex>
    );

    if (comingSoon)
      return (
        <LabelTop label={textsAccount.comingSoon} mb="19px">
          <Item />
        </LabelTop>
      );
    return (
      <Link to={link || "/"}>
        <Item />
      </Link>
    );
  };

  const FundsItem = (el: Funds & { includesItem?: boolean }) => {
    return (
      <FundsItemStyled
        justifyContent="space-between"
        alignItems="center"
        onClick={el.includes && handleOpenFunds}
        className={el.includesItem ? "includes" : ""}
        style={{ cursor: el.includes ? "pointer" : "auto" }}
      >
        <Flex alignItems="center">
          <img alt="" src={el.icon} style={{ marginRight: 12, width: 37, height: 37 }} />
          <div>
            <TextName>{el.currencyName}</TextName>
            <TextFullName color="textGray">{el.currencyFullName}</TextFullName>
          </div>
        </Flex>
        <Flex alignItems="center">
          <div>
            <TextName textAlign="right">{el.balance}</TextName>
            <TextFullName color="textGray" textAlign="right">
              {el.balanceDollars}
            </TextFullName>
          </div>
          {el.includes && (
            <ArrowIcon alignItems="center" open={openFunds}>
              <ArrowDownIcon />
            </ArrowIcon>
          )}
        </Flex>
      </FundsItemStyled>
    );
  };

  return (
    <>
      {account ? (
        <WrapperDropdown>
          <DropdownLayout
            open={openDropdown}
            setOpen={setOpenDropdown}
            icon={
              <Wrapper>
                <WalletIcon />
              </Wrapper>
            }
            variant="center-behind"
            plusMarginTop={heightDisclaimer}
          >
            <Dropdown>
              <Flex justifyContent="space-between" alignItems="center" mb="14px">
                <StyledTitle fontSize="21px">{textsAccount.title}</StyledTitle>
                <AccountBlock>
                  <CopyToClipboard
                    toCopy={account}
                    textCopied={textsAccount.copied}
                    propsIcon={{ stroke: "#fff" }}
                    propsChildren={{ marginRight: 14 }}
                  >
                    {ellipsis(account)}
                  </CopyToClipboard>
                </AccountBlock>
              </Flex>
              <Flex justifyContent="space-between" mb="20px">
                <Text fontWeight={400}>{textsAccount.totalBalance}</Text>
                <Text color="textGray" fontWeight={400}>
                  {totalBalance}
                </Text>
              </Flex>
              {funds?.length && (
                <>
                  <StyledTitle fontSize="21px" mb="20px">
                    {textsAccount.myFunds}
                  </StyledTitle>
                  <FundsWrapper>
                    {funds?.map((el, i) => (
                      <React.Fragment key={`${el.id}-${i + 1}`}>
                        <FundsItem {...el} />
                        {el.includes && (
                          <FundsHidden open={openFunds}>
                            {el.includes?.map((item, j) => {
                              const a = { includesItem: true, ...item };
                              return <FundsItem key={`${el.id}-${i + 1}-${j + 1}`} {...a} />;
                            })}
                          </FundsHidden>
                        )}
                      </React.Fragment>
                    ))}
                  </FundsWrapper>
                </>
              )}
              <Line />
              {links.map((el: any) => (
                <LinkUser key={el.text} {...el} />
              ))}
              <Button variant="option" onClick={() => logout()} mt="43px">
                {textsAccount.disconnect}
              </Button>
            </Dropdown>
          </DropdownLayout>
        </WrapperDropdown>
      ) : (
        <Wrapper
          as="button"
          onClick={() => {
            onPresentConnectModal();
          }}
          notAuth
        >
          <WalletIcon />
        </Wrapper>
      )}
    </>
  );
};

const WrapperDropdown = styled.div`
  order: -1;
  ${({ theme }) => theme.mediaQueries.xl} {
    order: 0;
  }
`;
const Wrapper = styled.div<{ notAuth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 6px;
  background: ${({ theme, notAuth }) => (notAuth ? theme.colors.whiteRgba : theme.colors.bgOpacity)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 7px;
  border: none;
  cursor: pointer;
  order: -1;
  & path {
    fill: ${({ theme, notAuth }) => (notAuth ? theme.colors.text : theme.colors.green)};
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 40px;
    height: 40px;
    margin-right: 9px;
    margin-left: 9px;
    border-radius: 9px;
    order: 0;
  }
`;

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  min-width: 120px;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  line-height: 14px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  ${({ theme }) => theme.mediaQueries.xl} {
    min-height: 40px;
    min-width: 160px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 20px;
    border-radius: 12px;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.darkGradient6};
  box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 9px 9px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 33px;
  }
`;

const FundsItemStyled = styled(Flex)`
  margin-bottom: 20px;
`;
const TextName = styled(Text)`
  margin-bottom: 4px;
  font-weight: normal;
  line-height: 19px;
  ${FundsItemStyled}.includes & {
    font-size: 13px;
    line-height: 16px;
  }
`;

const TextFullName = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  ${FundsItemStyled}.includes & {
    font-size: 11px;
    line-height: 14px;
  }
`;

const StyledTitle = styled(Text)`
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  font-weight: 400;
`;

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-bottom: 28px;
  background: ${({ theme }) => transparentize(0.5, theme.colors.bgCard)};
  &::before {
    content: "";
    position: absolute;
    bottom: 1px;
    display: block;
    width: 100%;
    height: 36px;
    background: linear-gradient(180deg, rgba(46, 46, 53, 0) 0%, #2e2e35 100%);
  }
`;

const FundsWrapper = styled.div`
  max-height: 200px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;

const FundsHidden = styled.div<{ open?: boolean }>`
  margin-right: 20px;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "200px" : 0)};
  transition: 0.3s;
`;

const ArrowIcon = styled(Flex)<{ open?: boolean }>`
  margin-left: 10px;
  transition: 0.3s;
  transform: ${({ open }) => (open ? "scale(1, -1)" : "none")};
`;

export default AccountMarketplace;
