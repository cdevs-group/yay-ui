import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "../../../components/Link";
import { Text } from "../../../components/Text";
import { Modal } from "../../Modal";
import { BNB2 } from "../../../constants/images";
import { Avalanche } from "../../../constants/images";

interface Props {
  title?: string;
  linkText?: string;
  linkHref?: string;
  handleToggleNetwork?: (e: any) => void;
  onDismiss?: () => void;
  valuesNetworks?: string[];
  network1Text?: string;
  network2Text?: string;
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  padding: 9px 10px;
  border-radius: 12px;
  background: ${({ theme }) => transparentize(0.85, theme.colors.contrast)};
  cursor: pointer;
  border: none;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
const TextStyled = styled(Text)`
  flex-grow: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
`;

const NetworkModal: React.FC<Props> = ({
  title,
  linkText,
  linkHref,
  handleToggleNetwork = (e) => null,
  onDismiss = () => null,
  valuesNetworks,
  network1Text,
  network2Text,
}) => {
  const handleClick = (e: any) => {
    handleToggleNetwork(e.currentTarget.value);
    onDismiss();
  };

  return (
    <Modal title={title} welcome paddingTopHeader="20px" onDismiss={onDismiss}>
      <Wrap>
        <Buttons>
          <Button value={valuesNetworks?.[0]} onClick={handleClick}>
            <TextStyled>{network1Text || "BSC"}</TextStyled>
            <img src={BNB2} alt="" />
          </Button>
          <Button value={valuesNetworks?.[1]} onClick={handleClick}>
            <TextStyled>{network2Text || "Avalanche"}</TextStyled>
            <img src={Avalanche} alt="" />
          </Button>
        </Buttons>
        <Link href={linkHref} style={{ margin: "0 auto" }}>
          {linkText}
        </Link>
      </Wrap>
    </Modal>
  );
};

export default NetworkModal;
