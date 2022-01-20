import React, { ReactNode, useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import DropdownLayout from "../DropDown/DropDown";
import { Text } from "../Text";
import { ArrowDownIcon } from "../Svg";
import { Flex } from "../Box";
import Select from "./Select";
import Input from "./components/Input";
import { Button } from "../Button";

export interface SelectProps extends SpaceProps, LayoutProps {
  selectItem: ReactNode;
  value: string | number;
  setValue: (e: any) => void;
  options: {
    name: ReactNode | string | number;
    value: string | number;
  }[];
  singleOption?: boolean;
  nameInputOptions: string;
  propsDropdown?: LayoutProps;
  propsOption?: SpaceProps & LayoutProps;
  optionsSpacing?: string;
  openDropdown?: boolean;
  setOpenDropdown?: (val: boolean) => void;
  buttonHandler: () => void | Promise<void>;
  inputsValue: { from: string; to: string };
  inputsName: { from: string; to: string };
  inputHandler: (e: any) => void;
  buttonText: string;
}

const InjectedSelect = ({
  selectItem,
  value,
  setValue,
  options,
  singleOption,
  nameInputOptions,
  propsDropdown,
  propsOption,
  optionsSpacing,
  openDropdown,
  setOpenDropdown,
  buttonHandler,
  inputsValue,
  inputsName,
  inputHandler,
  buttonText,
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Wrapper {...props}>
      <DropdownLayout
        icon={selectItem}
        open={openDropdown || open}
        setOpen={setOpenDropdown || setOpen}
        variant="visible"
      >
        <Dropdown {...propsDropdown}>
          <Select
            singleOption={singleOption}
            selectItem={
              <Currency>
                <Text mr="15px">{options.find((el) => el.value === value)?.name}</Text>
                {!singleOption && <ArrowDownIcon />}
              </Currency>
            }
            value={value}
            setValue={setValue}
            nameInputOptions="Currency"
            options={options}
            propsDropdown={{
              minWidth: 160,
            }}
            width="100%"
            mr={100}
          />
          <Inputs>
            <Input margin="0 2px  0 0 " value={inputsValue.from} onChange={inputHandler} name={inputsName.from} />
            <Input margin="0 0 0 2px" value={inputsValue.to} onChange={inputHandler} name={inputsName.to} />
          </Inputs>
          <Button variant="green" height="30px" marginTop="15px" width="100%" onClick={buttonHandler}>
            {buttonText}
          </Button>
        </Dropdown>
      </DropdownLayout>
    </Wrapper>
  );
};

export default InjectedSelect;

const Wrapper = styled.div`
  cursor: pointer;
  ${layout}
  ${space}
`;
const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
  background: ${({ theme }) => theme.colors.dark3};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 12px;
  border: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.textGray)}`};
  ${layout}
`;

const Currency = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 9px;

  & img {
    width: 28px;
    height: 28px;
  }

  & svg {
    right: 10px;
  }
`;
const Inputs = styled(Flex)`
  margin-top: 15px;
  justify-content: space-between;
`;
