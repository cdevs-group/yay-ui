import React from "react";
import styled from "styled-components";
import { HelpIcon } from "../../../../components/Svg";
import { Box } from "../../../../components/Box";

const QuestionWrapper = styled.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

const QuestionHelper = ({
  text,
  placement = "right-end",
  tooltipVisible,
  targetRef,
  tooltip,
  ...props
}: {
  targetRef?: any;
  tooltip?: any;
  tooltipVisible?: any;
  text?: any;
  placement?: any;
  ml: string;
}) => {
  // const { targetRef, tooltip, tooltipVisible } = useTooltip(text, { placement, trigger: 'hover' })

  return (
    <Box {...props}>
      {tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef}>
        <HelpIcon color="textSubtle" width="16px" />
      </QuestionWrapper>
    </Box>
  );
};

export default QuestionHelper;
