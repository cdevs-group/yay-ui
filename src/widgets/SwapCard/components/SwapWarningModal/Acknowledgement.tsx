import React, { useState } from "react";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { Button } from "../../../../components/Button";

export interface AcknowledgementTexsts {
  buttonText: string;
  understandngText: string;
}

interface AcknowledgementProps extends AcknowledgementTexsts {
  handleContinueClick?: () => void;
}

const Acknowledgement: React.FC<AcknowledgementProps> = ({ handleContinueClick, buttonText, understandngText }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <CheckboxInput
            name="confirmed"
            type="checkbox"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
            scale="sm"
          />
          <Text ml="10px" style={{ userSelect: "none" }}>
            {understandngText}
          </Text>
        </Flex>

        <Button disabled={!isConfirmed} variant="green" scale="sm" onClick={handleContinueClick}>
          {buttonText}
        </Button>
      </Flex>
    </>
  );
};

export default Acknowledgement;
