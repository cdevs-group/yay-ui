import React from "react";
import { Flex, Box } from "../Box";
import { SwapVertIcon } from "../Svg";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput, UnitContainer, SwitchUnitsButton } from "./styles";
import { BalanceInputInversionProps } from "./types";

const BalanceInputInversion: React.FC<BalanceInputInversionProps> = ({
  value,
  placeholder = "0.0",
  onUserInput,
  currencyValue,
  inputProps,
  innerRef,
  isWarning = false,
  decimals = 18,
  unit,
  switchEditingUnits,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      onUserInput(e.currentTarget.value.replace(/,/g, "."));
    }
  };

  return (
    <StyledBalanceInput isWarning={isWarning} {...props}>
      <Flex justifyContent="space-between">
        <Box>
          <Flex alignItems="center">
            {unit && <UnitContainer>{unit}</UnitContainer>}
            <StyledInput
              pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
              inputMode="decimal"
              min="0"
              value={value}
              onChange={handleOnChange}
              placeholder={placeholder}
              ref={innerRef}
              {...inputProps}
            />
          </Flex>
          {currencyValue && (
            <Text fontSize="13px" letterSpacing="0.5px" color="greyText3" mt="22px">
              {currencyValue}
            </Text>
          )}
        </Box>
        {switchEditingUnits && (
          <Flex alignItems="center" pl="12px">
            <SwitchUnitsButton scale="sm" variant="text" onClick={switchEditingUnits}>
              <SwapVertIcon />
            </SwitchUnitsButton>
          </Flex>
        )}
      </Flex>
    </StyledBalanceInput>
  );
};

export default BalanceInputInversion;