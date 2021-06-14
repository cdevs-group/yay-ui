import React from "react";
import styled, { DefaultTheme } from "styled-components";
import Text from '../Text/Text';
import { IconButton } from "../Button";
import { CloseIcon,CercleIcon,CompleteIcon } from "../Svg";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";
import LinkExternal from '../Link/LinkExternal';

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ theme, variant = variants.COLLECTION }: ThemedIconLabel) => {
  switch (variant) {
    case variants.COLLECTION:
      return theme.colors.failure;
    case variants.WINNING:
      return theme.colors.warning;
    case variants.SUCCESS:
    default:
      return theme.colors.secondary;
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.COLLECTION) => {
  switch (variant) {
    case variants.COLLECTION:
      return <CercleIcon spin={true}/>;
    case variants.WINNING:
      return <CloseIcon/>;
    case variants.SUCCESS:
      return <CompleteIcon fill='#47DA3B'/>;
    default:
      return <CercleIcon spin/>;
  }
};

const StyledAlert = styled(Flex)`
  width:fit-content;
  position: relative;
  padding:15px 90px 15px 23px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: inset ${({ theme }) => theme.colors.textShadow};
  border-radius: 12px;
  align-items: self-end;
  justify-content:space-between;
`;
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

const SetContent = ({title,value,variant, subtitle, isLoad, onClick}:AlertProps) => {
  return (  
    <>
      <Text fontWeight={400}><b>{title}</b> {value}</Text>
        {variant==='winning'?<><Text fontSize='13px'>{subtitle}</Text>
        <LinkExternal  fontSize='13px' color='#47DA3B' small href={`https://bscscan.com/address/`} mr="16px">
        View on BscScan
      </LinkExternal> </>:null}
    </>
  )
}
  const SetButton = ({variant, subtitle, isLoad, onClick}:AlertProps) =>{
    const Icon = getIcon(variant);
    return (
      <Button disabled={variant!=='winning'} onClick={onClick}>
        {Icon}
      </Button>
    ) 
  }

const Alert: React.FC<AlertProps> = (props) => {
  
  return (
    <StyledAlert>
      <div>
        <SetContent {...props}/>
      </div>
      <SetButton {...props}/>
    </StyledAlert>
  );
};

export default Alert;
