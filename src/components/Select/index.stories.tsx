import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import Text from "../Text/Text";
import Select from "./Select";
import { Flex } from "../Box";
import { ArrowDownIcon } from "../Svg";
import { Avalanche, BNB, DESU_TOKEN, GREEN_ELLIPSE } from "../../constants/images";
import InjectedSelect from "./InjectSelect";
import SelectSearch from "./SelectSearch";
import styled from "styled-components";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("BSC");

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
        nameInputOptions="price"
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

export const InjectedDropDownBlock = () => {
  const options2 = [
    {
      name: (
        <Flex alignItems="center">
          <img src={BNB} alt="" />
          <Text ml={10}>BSC</Text>
        </Flex>
      ),
      value: "BNB",
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
    {
      name: (
        <Flex alignItems="center">
          <img src={BNB} alt="" />
          <Text ml={10}>YAY</Text>
        </Flex>
      ),
      value: "YAY",
    },
  ];

  const [value2, setValue2] = useState(options2[0].value);
  const [open, setOpen] = useState<boolean>(true);
  const [inputsValue, setInputsValue] = useState({ from: "", to: "" });

  const inputHandler = (e: any) => {
    const { name, value } = e.target;
    console.log(name);
    setInputsValue({ ...inputsValue, [name]: value });
  };

  return (
    <Flex>
      <InjectedSelect
        selectItem={
          <Flex width="156px" alignItems="center">
            <Text mr="15px">Price</Text>
          </Flex>
        }
        value={value2}
        setValue={setValue2}
        nameInputOptions="Price"
        options={options2}
        propsDropdown={{
          minWidth: 170,
        }}
        propsOption={{
          padding: "0 15px 0 3px",
        }}
        width="220px"
        mr={100}
        optionsSpacing="12px"
        openDropdown={open}
        setOpenDropdown={setOpen}
        buttonHandler={() => console.log("buy")}
        inputsValue={inputsValue}
        inputsName={{ from: "From", to: "To" }}
        inputHandler={inputHandler}
        buttonText="Applay"
      />
    </Flex>
  );
};

export const InjectedDropDownBlock2 = () => {
  const options2 = [
    {
      name: (
        <Flex alignItems="center">
          <img src={BNB} alt="" />
          <Text ml={10}>BSC</Text>
        </Flex>
      ),
      value: "BNB",
    },
  ];

  const [value2, setValue2] = useState(options2[0].value);
  const [open, setOpen] = useState<boolean>(true);
  const [inputsValue, setInputsValue] = useState({ from: "", to: "" });

  const inputHandler = (e: any) => {
    const { name, value } = e.target;
    console.log(name);
    setInputsValue({ ...inputsValue, [name]: value });
  };

  return (
    <Flex>
      <InjectedSelect
        selectItem={
          <Flex width="156px" alignItems="center">
            <Text mr="15px">Price</Text>
          </Flex>
        }
        value={value2}
        setValue={setValue2}
        nameInputOptions="Price"
        singleOption
        options={options2}
        propsDropdown={{
          minWidth: 170,
        }}
        propsOption={{
          padding: "0 15px 0 3px",
        }}
        width="220px"
        mr={100}
        optionsSpacing="12px"
        openDropdown={open}
        setOpenDropdown={setOpen}
        buttonHandler={() => console.log("buy")}
        inputsValue={inputsValue}
        inputsName={{ from: "From", to: "To" }}
        inputHandler={inputHandler}
        buttonText="Applay"
      />
    </Flex>
  );
};

export const SelectSearchBlock = () => {
  const [value, setValue] = useState("Collection");

  const options = [
    {
      name: "All",
      value: "All",
      img: GREEN_ELLIPSE,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
    {
      name: "Passage",
      value: "Passage",
      img: DESU_TOKEN,
    },
  ];
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Flex>
      <SelectSearch
        selectItem={
          <Flex alignItems="center">
            <Text mr="15px">{options.find((el) => el.value === value)?.name}</Text>
            <ArrowDownIcon />
          </Flex>
        }
        valueInput=""
        inputHandler={(e: any) => null}
        inputPlaceholder="dearch"
        inputName="serch"
        value={value}
        setValue={setValue}
        nameInputOptions="price"
        options={options}
        propsDropdown={{
          minWidth: 219,
        }}
        width="fit-content"
        mr={100}
      />
    </Flex>
  );
};
