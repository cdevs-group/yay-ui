import React from "react";
import { CopyIcon } from "../../../../components/Svg";
import styled from "styled-components";
import { Button } from "../../../../components/Button";

const CopyButton = ({ textCopy, setIsTooltipDisplayed }: { textCopy: string; setIsTooltipDisplayed: any }) => {
  return (
    <ButtonStyle
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(textCopy);
          setIsTooltipDisplayed(true);
          setTimeout(() => {
            setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
    >
      <CopyIcon />
    </ButtonStyle>
  );
};
export default CopyButton;

const ButtonStyle = styled(Button)`
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  & svg {
    width: 12px;
    height: 12px;
  }
`;
