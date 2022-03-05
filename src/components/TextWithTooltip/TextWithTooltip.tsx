import React from "react";
import { useTooltip } from "../..";
import { Flex } from "../Box";
import { HelpIcon2 } from "../Svg";
import { Text } from "../Text";
import { TextWithTooltipProps } from "./types";
import styled from "styled-components";

const TextWithTooltip = ({ text, textTooltip, preLine }: TextWithTooltipProps) => {
  const { tooltipVisible, targetRef, tooltip } = useTooltip(textTooltip, {
    placement: "top-start",
    trigger: "hover",
    preLine,
  });

  return (
    <Flex alignItems="center">
      <Text fontSize="13px" lineHeight="100%" fontWeight={400} color="textGray" mr="5px">
        {text}
      </Text>
      <Flex alignItems="center" ref={targetRef}>
        <HelpIcon2 />
      </Flex>
      {tooltipVisible && <TooltipText>{tooltip}</TooltipText>}
    </Flex>
  );
};

const TooltipText = styled.div``;

export default TextWithTooltip;
