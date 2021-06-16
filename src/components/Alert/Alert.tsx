import React from "react";
import styled, { DefaultTheme } from "styled-components";
import Text from '../Text/Text';
import { CloseIcon, CercleIcon, CompleteIcon } from "../Svg";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";
import LinkExternal from '../Link/LinkExternal';

const StyledAlert = styled(Flex) <{ showAlert?: boolean }>`
width:fit-content;
position: fixed;
z-index: 5;
top:100px;
right:${({ showAlert }) => showAlert ? '50px' : '-100%'};
transition: .3s ease;
padding:15px 90px 15px 23px;
background: ${({ theme }) => theme.colors.buttonBg};
box-shadow: inset ${({ theme }) => theme.colors.textShadow};
border-radius: 12px;
align-items: self-end;
justify-content:space-between;
`;

const getIcon = (variant: AlertProps["variant"] = variants.COLLECTION) => {
  switch (variant) {
    case variants.COLLECTION:
      return <CercleIcon spin={true} />;
    case variants.WINNING:
      return <CloseIcon />;
    case variants.SUCCESS:
      return <CompleteIcon fill='#47DA3B' />;
    default:
      return <CercleIcon spin />;
  }
};

const Button = styled.button`
  position:absolute;
  background:none;
  border:none;
  top: 4px;
  right: 10px;
  cursor:pointer;
  &:disabled{
    cursor:default;
  }
`;

const SetContent = ({ title, value, variant, subtitle, }: AlertProps) => {
  return (
    <>
      <Text fontWeight={400}><b>{title}</b> {value}</Text>
      {variant === 'winning' ? <><Text fontSize='13px'>{subtitle}</Text>
        <LinkExternal fontSize='13px' color='#47DA3B' small href={`https://bscscan.com/address/`} mr="16px">
          View on BscScan
      </LinkExternal> </> : null}
    </>
  )
}
const SetButton = ({ variant, onClick }: AlertProps) => {
  const Icon = getIcon(variant);
  return (
    <Button disabled={variant !== 'winning'} onClick={onClick}>
      {Icon}
    </Button>
  )
}

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <StyledAlert showAlert={props.showAlert}>
      <div>
        <SetContent {...props} />
      </div>
      <SetButton {...props} />
    </StyledAlert>
  );
};

export default Alert;

