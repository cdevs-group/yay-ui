import React, { useState } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { CopyIcon2 } from "../..";
import { Box } from "../Box";
import { Text } from "../Text";

interface Props extends SpaceProps {
  toCopy: string;
  textCopied: string;
  icon?: React.ReactNode;
  left?: string;
  propsIcon?: any;
  propsChildren?: SpaceProps;
  isTooltip?: boolean;
  setIsTooltip?: (val: boolean) => void;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  ${space}
`;

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  opacity: 0.7;
`;

const StyleBox = styled(Box)`
  line-height: 1;
  ${space}
`;

const CopyToClipboard: React.FC<Props> = ({
  toCopy,
  textCopied,
  children,
  icon,
  propsIcon,
  propsChildren,
  isTooltip,
  setIsTooltip,
  ...props
}) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <StyleButton
      as="button"
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(toCopy);
          if (setIsTooltip) {
            setIsTooltip(true);
          } else setIsTooltipDisplayed(true);
          setTimeout(() => {
            if (setIsTooltip) {
              setIsTooltip(false);
            } else setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
      {...props}
    >
      <StyleBox {...propsChildren}>{children}</StyleBox>
      {icon || <CopyIcon2 {...propsIcon} />}
      <Tooltip isTooltipDisplayed={isTooltip || isTooltipDisplayed}>{textCopied}</Tooltip>
    </StyleButton>
  );
};

export default CopyToClipboard;
