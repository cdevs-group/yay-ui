import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../../../components/Input";
import { Box, Flex } from "../../../../components/Box";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import QuestionHelper from "../../../../components/QuestionHelper";
import { IText } from "./types";

enum SlippageError {
  InvalidInput = "InvalidInput",
  RiskyLow = "RiskyLow",
  RiskyHigh = "RiskyHigh",
}

enum DeadlineError {
  InvalidInput = "InvalidInput",
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

interface SlippageTabsProps {
  texts: IText;
  userSlippageTolerance: number;
  setUserSlippageTolerance: Dispatch<SetStateAction<number>>;
  ttl: number;
  setTtl: Dispatch<SetStateAction<number>>;
  slippageInput: string;
  setSlippageInput: Dispatch<SetStateAction<string>>;
  deadlineInput: string;
  setDeadlineInput: Dispatch<SetStateAction<string>>;
}

const SlippageTabs = ({
  texts,
  userSlippageTolerance,
  setUserSlippageTolerance,
  ttl,
  setTtl,
  slippageInput,
  setSlippageInput,
  deadlineInput,
  setDeadlineInput,
}: SlippageTabsProps) => {
  // const [userSlippageTolerance, setUserSlippageTolerance] = useState(100);
  // const [ttl, setTtl] = useState(100);
  // const [slippageInput, setSlippageInput] = useState("");
  // const [deadlineInput, setDeadlineInput] = useState("");

  const slippageInputIsValid =
    slippageInput === "" || (userSlippageTolerance / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2);
  const deadlineInputIsValid = deadlineInput === "" || (ttl / 60).toString() === deadlineInput;

  let slippageError: SlippageError | undefined;
  if (slippageInput !== "" && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput;
  } else if (slippageInputIsValid && userSlippageTolerance < 50) {
    slippageError = SlippageError.RiskyLow;
  } else if (slippageInputIsValid && userSlippageTolerance > 500) {
    slippageError = SlippageError.RiskyHigh;
  } else {
    slippageError = undefined;
  }

  let deadlineError: DeadlineError | undefined;
  if (deadlineInput !== "" && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput;
  } else {
    deadlineError = undefined;
  }

  const parseCustomSlippage = (value: string) => {
    // if (value === '' || inputRegex.test(escapeRegExp(value))) {
    if (value === "" || inputRegex.test(value)) {
      setSlippageInput(value);

      try {
        const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString());
        if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
          setUserSlippageTolerance(valueAsIntFromRoundedFloat);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const parseCustomDeadline = (value: string) => {
    setDeadlineInput(value);

    try {
      const valueAsInt: number = Number.parseInt(value) * 60;
      if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
        setTtl(valueAsInt);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" mb="24px">
        <Flex mb="12px">
          <Text>Slippage Tolerance</Text>
          <QuestionHelper text={texts.settingsHightSplippage} placement="top-start" ml="4px" />
        </Flex>
        <Flex flexWrap="wrap">
          <Button
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setSlippageInput("");
              setUserSlippageTolerance(10);
            }}
            variant={userSlippageTolerance === 10 ? "primary" : "tertiary"}
          >
            0.1%
          </Button>
          <Button
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setSlippageInput("");
              setUserSlippageTolerance(50);
            }}
            variant={userSlippageTolerance === 50 ? "primary" : "tertiary"}
          >
            0.5%
          </Button>
          <Button
            mr="4px"
            mt="4px"
            scale="sm"
            onClick={() => {
              setSlippageInput("");
              setUserSlippageTolerance(100);
            }}
            variant={userSlippageTolerance === 100 ? "primary" : "tertiary"}
          >
            1.0%
          </Button>
          <Flex alignItems="center">
            <Box width="76px" mt="4px">
              <Input
                scale="sm"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]{0,2}$"
                placeholder={(userSlippageTolerance / 100).toFixed(2)}
                value={slippageInput}
                onBlur={() => {
                  parseCustomSlippage((userSlippageTolerance / 100).toFixed(2));
                }}
                onChange={(event) => {
                  if (event.currentTarget.validity.valid) {
                    parseCustomSlippage(event.target.value.replace(/,/g, "."));
                  }
                }}
                isWarning={!slippageInputIsValid}
                isSuccess={![10, 50, 100].includes(userSlippageTolerance)}
              />
            </Box>
            <Text color="primary" bold ml="2px">
              %
            </Text>
          </Flex>
        </Flex>
        {!!slippageError && (
          <Text fontSize="14px" color={slippageError === SlippageError.InvalidInput ? "red" : "#F3841E"} mt="8px">
            {slippageError === SlippageError.InvalidInput
              ? texts.enterValidSlippage
              : slippageError === SlippageError.RiskyLow
              ? texts.transactionMayFail
              : texts.transactionMayFront}
          </Text>
        )}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="24px">
        <Flex alignItems="center">
          <Text>{texts.txDeadline}</Text>
          <QuestionHelper text={texts.yourTransactionRevent} placement="top-start" ml="4px" />
        </Flex>
        <Flex>
          <Box width="52px" mt="4px">
            <Input
              scale="sm"
              inputMode="numeric"
              pattern="^[0-9]+$"
              color={deadlineError ? "red" : undefined}
              onBlur={() => {
                parseCustomDeadline((ttl / 60).toString());
              }}
              placeholder={(ttl / 60).toString()}
              value={deadlineInput}
              onChange={(event) => {
                if (event.currentTarget.validity.valid) {
                  parseCustomDeadline(event.target.value);
                }
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SlippageTabs;
