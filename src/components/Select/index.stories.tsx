import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import Text from "../Text/Text";
import Select from "./Select";
import { Flex } from "../Box";
import { ArrowDownIcon } from "../Svg";
import { Avalanche, BNB } from "../../constants/images";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [value, setValue] = useState("1");

  const options = [
    {
      name: "1 day",
      value: "1",
    },
    {
      name: "7 days",
      value: "7",
    },
    {
      name: "30 days",
      value: "30",
    },
  ];

  const [value2, setValue2] = useState("BSC");
  const options2 = [
    {
      name: "All networks",
      value: "all",
    },
    {
      name: (
        <Flex alignItems="center">
          <img src={BNB} alt="" />
          <Text ml={10}>BSC</Text>
        </Flex>
      ),
      value: "BSC",
    },
    {
      name: (
        <Flex alignItems="center">
          <img src={Avalanche} alt="" />
          <Text ml={10}>AVAX</Text>
        </Flex>
      ),
      value: "AVAX",
    },
  ];

  const [open, setOpen] = useState<boolean>(true);

  return (
    <Flex>
      <Select
        selectItem={
          <Flex alignItems="center">
            <Text mr="15px">{options.find((el) => el.value === value)?.name}</Text>
            <ArrowDownIcon />
          </Flex>
        }
        value={value}
        setValue={setValue}
        nameInputOptions="days"
        options={options}
        propsDropdown={{
          minWidth: 160,
        }}
        width="fit-content"
        mr={100}
      />
      <Select
        selectItem={
          <Flex alignItems="center">
            <Text mr="15px">Blockchain</Text>
          </Flex>
        }
        value={value2}
        setValue={setValue2}
        nameInputOptions="Blockchain"
        options={options2}
        propsDropdown={{
          minWidth: 170,
        }}
        propsOption={{
          padding: "0 15px 0 3px",
        }}
        width="fit-content"
        mr={100}
        optionsSpacing="12px"
        openDropdown={open}
        setOpenDropdown={setOpen}
      />
    </Flex>
  );
};
