import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { useModal } from "../../Modal";
import NetworkModal from "../NetworkModal/NetworkModal";
import { BNB2 } from "../../../constants/images";
import { Avalanche } from "../../../constants/images";

interface Props {
  network?: string;
  titleNetwork?: string;
  linkTextNetwork?: string;
  linkHrefNetwork?: string;
  handleChooseNetwork?: (e: any) => void;
}

const Network: React.FC<Props> = ({ network, handleChooseNetwork, linkTextNetwork, linkHrefNetwork, titleNetwork }) => {
  const [onPresentConnectModal] = useModal(
    <NetworkModal
      title={titleNetwork}
      linkHref={linkHrefNetwork}
      linkText={linkTextNetwork}
      handleChooseNetwork={handleChooseNetwork}
    />
  );

  return (
    <NetworkBlock
      as="button"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      <TextStyled>{network || "Binance"}</TextStyled>
      <AvatarNetwork>
        <img src={network === "Binance" ? BNB2 : Avalanche} />
      </AvatarNetwork>
    </NetworkBlock>
  );
};

const NetworkBlock = styled.button`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  margin-left: 6px;
  padding: 0 2px;
  font-size: 11px;
  line-height: 14px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  &.notAuth {
    background: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 40px;
    margin-right: 11px;
    margin-left: 11px;
    font-size: 15px;
    line-height: 19px;
    border-radius: 12px;
  }
`;

const TextStyled = styled(Text)`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    padding: 0 17px;
    flex-grow: 1;
    text-align: center;
  }
`;

const AvatarNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  & img {
    width: 26px;
    height: 26px;
  }
  &.notAuth {
    width: calc(100% - 4px);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Network;
