import React from "react";
import { HelpIcon2 } from "../Svg";
import { useTooltip } from "../../hooks/useTooltip";
import { Box, BoxProps } from "../Box";
import { Placement } from "@popperjs/core";
import styled from "styled-components";

interface Props extends BoxProps {
  text: string | React.ReactNode;
  placement?: Placement;
}

const QuestionWrapper = styled.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

const QuestionHelper: React.FC<Props> = ({ text, placement = "right-end", ...props }) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, { placement, trigger: "hover" });

  return (
    <Box {...props}>
      {tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef}>
        <HelpIcon2 color="textSubtle" width="16px" />
      </QuestionWrapper>
    </Box>
  );
};

export default QuestionHelper;
