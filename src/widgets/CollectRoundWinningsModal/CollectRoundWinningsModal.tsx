import React from "react";
import { Modal } from "../Modal";
import { Box, Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { CercleIcon } from "../../components/Svg";
import { WINNER2 } from "../../constants/images";

interface CollectRoundWinningsModalProps {
  onDismiss?: () => void;
  isLoading?: boolean;
  handleClick?: () => void;
  title: string;
  collectText?: string;
  bnbText?: string;
  convert?: string;
  buttonText: string;
}

const CollectRoundWinningsModal: React.FC<CollectRoundWinningsModalProps> = ({
  isLoading,
  handleClick,
  onDismiss,
  title,
  collectText,
  bnbText,
  convert,
  buttonText,
}) => {
  return (
    <Modal title={title} onDismiss={onDismiss}>
      <Box display="flex" style={{ justifyContent: "center" }} marginTop="-40px" marginBottom="-20px">
        <img src={WINNER2} alt="" />
      </Box>
      <Box padding="20px">
        <Flex alignItems="start" justifyContent="space-between" mb="24px">
          <Text>{collectText}</Text>
          <Box style={{ textAlign: "right" }}>
            <Text>{bnbText}</Text>
            <Text fontSize="12px" color="grayText">
              {convert}
            </Text>
          </Box>
        </Flex>
        <Button
          width="100%"
          mb="8px"
          onClick={handleClick}
          isLoading={isLoading}
          endIcon={isLoading ? <CercleIcon spin fill="none" /> : null}
          variant="green"
        >
          {buttonText}
        </Button>
      </Box>
    </Modal>
  );
};

export default CollectRoundWinningsModal;
