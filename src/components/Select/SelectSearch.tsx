import React, { ReactNode, useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import DropdownLayout from "../DropDown/DropDown";
import { Text } from "../Text";
import { CheckIcon2 } from "../Svg";
import { Flex, Box } from "../Box";
import InputSearch from "./components/InputSerach";

export interface SelectProps extends SpaceProps, LayoutProps {
  selectItem: ReactNode;
  value: string | number;
  setValue: (e: any) => void;
  options: {
    name: ReactNode | string | number;
    value: string | number;
    img: string;
  }[];
  nameInputOptions: string;
  propsDropdown?: LayoutProps;
  propsOption?: SpaceProps & LayoutProps;
  optionsSpacing?: string;
  openDropdown?: boolean;
  setOpenDropdown?: (val: boolean) => void;
  valueInput: string;
  inputHandler: (e: any) => void;
  inputName: string;
  inputPlaceholder?: string;
}

const SelectSearch = ({
  selectItem,
  value,
  setValue,
  options,
  nameInputOptions,
  propsDropdown,
  propsOption,
  optionsSpacing,
  openDropdown,
  setOpenDropdown,
  valueInput,
  inputHandler,
  inputName,
  inputPlaceholder,
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const setOpenFunction = setOpenDropdown || setOpen;

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper {...props}>
      <DropdownLayout icon={selectItem} open={openDropdown || open} setOpen={setOpenFunction} variant="visible">
        <Dropdown {...propsDropdown}>
          <InputSearch
            inputPlaceholder={inputPlaceholder}
            value={valueInput}
            onChange={inputHandler}
            name={inputName}
          />
          <DropdownList>
            {options?.map((el, i) => (
              <Option optionsSpacing={optionsSpacing} key={i + 1} onClick={() => setOpenFunction(false)}>
                <Input
                  type="radio"
                  name={nameInputOptions}
                  value={el.value}
                  onChange={handleChange}
                  checked={el.value === value}
                />
                <Item {...propsOption}>
                  <img src={el.img} />
                  <Text mr="auto">{el.name}</Text>
                  <CheckIcon2 />
                </Item>
              </Option>
            ))}
          </DropdownList>
        </Dropdown>
      </DropdownLayout>
    </Wrapper>
  );
};

export default SelectSearch;

const Wrapper = styled.div`
  cursor: pointer;
  ${layout}
  ${space}
`;
const Dropdown = styled.div`
  max-height: 275px;
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
  background: ${({ theme }) => theme.colors.dark3};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 12px;
  border: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.textGray)}`};
  ${layout}
`;

const Option = styled.label<{ optionsSpacing?: string }>`
  display: flex;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: ${({ optionsSpacing }) => optionsSpacing || 0};
  }

  & svg {
    display: none;
    width: 12px;
    height: 10px;
  }

  & path {
    stroke-width: 3;
  }
`;

const Input = styled.input`
  display: none;
`;

const Item = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0px 15px;
  border-radius: 9px;
  transition: 0.3s;

  & img {
    width: 24px;
    height: 24px;
    margin-right: 17px;
  }

  ${Input}:checked ~ & {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.bgOpacitY3};

    & svg {
      display: block;
      margin-left: 16px;
    }
  }

  &:hover {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.bgOpacitY3};
  }

  ${layout}
  ${space}
`;
const DropdownList = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  height: calc(100% - 80px);
`;
