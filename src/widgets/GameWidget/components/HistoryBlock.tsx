import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";

interface Props {
  children: React.ReactNode;
}

const HistoryBlock: React.FC<Props> = ({ children }) => {
  const tabsList = ["Live", "Round", "Your History"];
  const [tabActive, setTabActive] = useState<number>(0);
  const [prevTabActive, setPrevTabActive] = useState<number>(1);

  const handleToggleTab = (e: any) => {
    setPrevTabActive(tabActive);
    setTabActive(+e.target.value);
  };

  console.log(prevTabActive);
  return (
    <Block>
      <TopLine>
        <Title>History</Title>
        <Tabs>
          {tabsList.map((el, i) => (
            <Tab
              active={tabActive === i}
              value={i}
              prev={prevTabActive}
              valueActive={tabActive}
              key={i}
              onClick={handleToggleTab}
            >
              {el}
            </Tab>
          ))}
        </Tabs>
      </TopLine>
      {children}
    </Block>
  );
};

export default HistoryBlock;

const Block = styled.div`
  padding: 21px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.bgCard2};
`;

const TopLine = styled(Flex)``;
const Title = styled(Text)`
  flex-grow: 1;
  margin-right: 20px;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
`;

const Tabs = styled(Flex)``;

const Tab = styled.button<{ active: boolean; value: number; prev: number; valueActive: number }>`
  position: relative;
  padding: 0 13px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme, active }) => (active ? theme.colors.green : theme.colors.textGray)};
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    display: block;
    left: ${({ value, valueActive, prev, active }) =>
      (active && prev < value) || (!active && valueActive < value) ? 0 : "auto"};
    right: ${({ value, prev, active }) => ((active && value < prev) || (!active && prev === value) ? 0 : "auto")};

    bottom: -19px;
    width: ${({ active }) => (active ? "100%" : 0)};
    height: 1.5px;
    background: ${({ theme }) => theme.colors.green};
    transition: 0.3s;
  }
`;
