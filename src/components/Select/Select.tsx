import React, { ReactNode, useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import DropdownLayout from "../DropDown/DropDown";
import { Text } from "../Text";
import { CheckIcon2 } from "../Svg";
import { Flex } from "../Box";

export interface SelectProps extends SpaceProps, LayoutProps {
  selectItem: ReactNode;
  value: string | number;
  setValue: (e: any) => void;
  options: {
    name: ReactNode | string | number;
    value: string | number;
  }[];
  nameInputOptions: string;
  propsDropdown?: LayoutProps;
  propsOption?: SpaceProps & LayoutProps;
  optionsSpacing?: string;
  openDropdown?: boolean;
  setOpenDropdown?: (val: boolean) => void;
}

const Select = ({
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
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper {...props}>
      <DropdownLayout
        icon={selectItem}
        open={openDropdown || open}
        setOpen={setOpenDropdown || setOpen}
        variant="visible"
      >
        <Dropdown {...propsDropdown}>
          {options?.map((el) => (
            <Option optionsSpacing={optionsSpacing}>
              <Input
                type="radio"
                name={nameInputOptions}
                value={el.value}
                onChange={handleChange}
                checked={el.value === value}
              />
              <Item {...propsOption}>
                <Text>{el.name}</Text>
                <CheckIcon2 />
              </Item>
            </Option>
          ))}
        </Dropdown>
      </DropdownLayout>
    </Wrapper>
  );
};

export default Select;

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
  ${Input}:checked ~ & {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.bgOpacitY3};
    & svg {
      display: block;
    }
  }
  &:hover {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.bgOpacitY3};
  }
  ${layout}
  ${space}
`;
