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
      {network || "Binance"}
      <AvatarNetwork>
        <img src={network === "Binance" ? BNB2 : Avalanche} />
      </AvatarNetwork>
    </NetworkBlock>
  );
};

const NetworkBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  min-width: 90px;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
  font-size: 11px;
  line-height: 14px;
  padding: 0 26px 0 10px;
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
    min-width: 130px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 56px 0 20px;
    border-radius: 12px;
  }
`;
const AvatarNetwork = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  & img {
    width: 26px;
    height: 26px;
  }
  &.notAuth {
    width: calc(100% - 4px);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 4px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Network;
