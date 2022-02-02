import React from "react";
import { Flex, Box } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import InputSearch from "../../../../components/InputSearch/InputSearch";
import { TextStyle, TabsWrapBlock, Tab, InputWrap } from "./styles";
import { IText } from "./types";
import { useTheme } from "styled-components";

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const TransactionSettings = ({
  deadlineInput,
  handleDeadlineInput,
  setTtl,
  ttl,
  texts,
  activeTabSlippage,
  toggleTabSlippage,
  slippageInput,
  handleSlippageInput,
}: {
  deadlineInput: any;
  setTtl: any;
  ttl: any;
  texts: IText;
  handleDeadlineInput: any;
  activeTabSlippage: any;
  toggleTabSlippage: any;
  slippageInput: any;
  handleSlippageInput: any;
}) => {
  const theme = useTheme();
  const parseCustomSlippage = (value: string) => {
    if (value === "" || inputRegex.test(escapeRegExp(value))) {
      handleSlippageInput(value);

      try {
        const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString());
        if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
          toggleTabSlippage(valueAsIntFromRoundedFloat);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const parseCustomDeadline = (value: string) => {
    handleDeadlineInput(value);

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
    <div>
      <Box mb="24px">
        <Flex mb="12px">
          <TextStyle>{texts.slippageTollerance}</TextStyle>
        </Flex>
        <Flex>
          <TabsWrapBlock width="100%" length={3}>
            <Tab
              fontSize="13px"
              colorActive={theme.colors.green}
              paddingTabs="7px"
              className={activeTabSlippage === 10 ? "active" : ""}
              value={10}
              onClick={() => {
                handleSlippageInput("");
                toggleTabSlippage(10);
              }}
            >
              0.1%
            </Tab>
            <Tab
              fontSize="13px"
              colorActive={theme.colors.green}
              paddingTabs="7px"
              className={activeTabSlippage === 50 ? "active" : ""}
              value={50}
              onClick={() => {
                handleSlippageInput("");
                toggleTabSlippage(50);
              }}
            >
              0.5%
            </Tab>
            <Tab
              fontSize="13px"
              colorActive={theme.colors.green}
              paddingTabs="7px"
              className={activeTabSlippage === 100 ? "active" : ""}
              value={100}
              onClick={() => {
                handleSlippageInput("");
                toggleTabSlippage(100);
              }}
            >
              1.0%
            </Tab>
          </TabsWrapBlock>
          <InputWrap>
            <InputSearch
              padding="16px 41px 16px 12px"
              name="slippage"
              value={slippageInput}
              onChange={(event) => {
                if (event.currentTarget.validity.valid) {
                  parseCustomSlippage(event.target.value.replace(/,/g, "."));
                }
              }}
              width="90px"
              height="33px"
              onBlur={() => {
                parseCustomSlippage((activeTabSlippage / 100).toFixed(2));
              }}
              placeholder="0.00"
              icon={
                <Text color="rgba(255,255,255,.7)" fontSize="13px">
                  %
                </Text>
              }
              background={theme.colors.bgOpacity}
              borderRadius="9px"
            />
          </InputWrap>
        </Flex>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb="34px">
        <Flex alignItems="center">
          <TextStyle mb="0 !important">{texts.txDeadline}</TextStyle>
        </Flex>
        <Flex>
          <Box width="fit-content">
            <InputSearch
              padding="16px 50px 16px 12px"
              name="deadline"
              value={deadlineInput}
              width="90px"
              height="33px"
              placeholder="0"
              onBlur={() => {
                parseCustomDeadline((ttl / 60).toString());
              }}
              onChange={(event) => {
                if (event.currentTarget.validity.valid) {
                  parseCustomDeadline(event.target.value);
                }
              }}
              icon={
                <Text color="rgba(255,255,255,.7)" fontSize="13px">
                  min
                </Text>
              }
              background={theme.colors.bgOpacity}
              borderRadius="9px"
            />
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default TransactionSettings;
