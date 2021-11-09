import React from "react";
import styled from "styled-components";

const NetworksTabs = ({
  networksTab,
  currentNetwork,
  onClick,
}: {
  networksTab: { value: string | number; img: string }[];
  currentNetwork: string | number;
  onClick: (e: any) => void;
}) => {
  return (
    <div>
      {networksTab.map((item) => (
        <NetworkItem onClick={onClick} value={item.value} active={item.value === currentNetwork} key={item.value}>
          <img src={item.img} />
        </NetworkItem>
      ))}
    </div>
  );
};

export default NetworksTabs;

const NetworkItem = styled.button<{ active: boolean }>`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.25)};
  pointer-events: all;

  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;
