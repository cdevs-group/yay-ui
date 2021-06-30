import React from "react";
import { Box, Flex } from "../../components/Box";
import { Button } from "../../components/Button";
import { LinkExternal } from "../../components/Link";
import { Text } from "../../components/Text";
import { Modal } from "../Modal";

interface ChartDisclaimerProps {
  handleConfirm?: () => void;
  topText: string;
  bottomText: string;
  btnText: string;
  href: string;
  linkText: string;
}

const ChartDisclaimer: React.FC<ChartDisclaimerProps> = ({
  handleConfirm,
  topText,
  bottomText,
  btnText,
  href,
  linkText,
}) => {
  return (
    <Modal title="" hideCloseButton>
      <Box paddingRight="40px" paddingLeft="40px" paddingBottom="40px">
        <Text as="p" mb="16px">
          {topText}
        </Text>
        <Text as="p" mb="16px">
          {bottomText}
        </Text>
        <Button width="100%" onClick={handleConfirm} mb="16px" variant="green">
          {btnText}
        </Button>
        <Flex justifyContent="center" alignItems="center">
          <LinkExternal href={href} external>
            {linkText}
          </LinkExternal>
        </Flex>
      </Box>
    </Modal>
  );
};

export default ChartDisclaimer;
