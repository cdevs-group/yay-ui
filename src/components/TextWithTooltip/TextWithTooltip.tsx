import React from "react";
import { useTooltip } from "../..";
import { Flex } from "../Box";
import { HelpIcon2 } from "../Svg";
import { Text } from "../Text";
import { TextWithTooltipProps } from "./types";

const TextWithTooltip = ({ text, textTooltip }: TextWithTooltipProps) => {
  const { tooltipVisible, targetRef, tooltip } = useTooltip(textTooltip, { placement: "top-start", trigger: "hover" });

  return (
    <Flex alignItems="center">
      <Text fontSize="13px" lineHeight="100%" fontWeight={400} color="textGray" mr="5px">
        {text}
      </Text>
      <Flex alignItems="center" ref={targetRef}>
        <HelpIcon2 />
      </Flex>
      {tooltipVisible && tooltip}
    </Flex>
  );
};

export default TextWithTooltip;
