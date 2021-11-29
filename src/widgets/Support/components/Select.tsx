import React, { useState } from "react";
import DropdownLayout from "../../../components/DropDown/DropDown";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Wrapper, TitleStyle, InputWrapper } from "./styles";
import { ArrowDownIcon } from "../../../components/Svg";
import { Flex } from "../../../components/Box";

const Select = ({
  title,
  margin,
  selectTarget,
  handleSelect,
  optionsList,
  name,
}: {
  name: string;
  margin?: string;
  optionsList: string[];
  title: string;
  selectTarget: string;
  handleSelect: (e: any) => void;
}) => {
  const [selectOpen, setSelectOpen] = useState(false);

  const handleClick = (e: any) => {
    handleSelect(e);
    setSelectOpen(!selectOpen);
  };
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <DropdownLayout open={selectOpen} setOpen={setSelectOpen} icon={<InputWrapper>{selectTarget}</InputWrapper>}>
        <SelectWrapper>
          {optionsList.map((option, i) => (
            <OptionItem name={name} value={option} onClick={handleClick} key={i}>
              {option}
            </OptionItem>
          ))}
        </SelectWrapper>
      </DropdownLayout>
      <ArrowBlock>
        <ArrowDownIcon />
      </ArrowBlock>
    </Wrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  padding: 10px 0;
  background: #1d1d22;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.23);
  border-radius: 12px;
`;
const OptionItem = styled(Button)`
  width: 100%;
  height: fit-content;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.11em;
  background: #1d1d22;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  justify-content: flex-start;
  box-shadow: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
const ArrowBlock = styled(Flex)`
  width: 30px;
  height: 30px;
  position: absolute;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  right: 15px;
  bottom: 7px;
`;
