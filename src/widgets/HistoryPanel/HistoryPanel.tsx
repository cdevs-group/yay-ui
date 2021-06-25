import React from "react";
import styled from "styled-components";
import { ArrowPanel, BtnPanel } from "../../components/Svg";
import { SimpleTabs } from "../../components/Tabs";

interface Props {
  isHistoryPaneOpen: boolean;
  children: React.ReactNode;
  handleToggle: () => void;
  valueAccordeon?: number | string;
}

const HistoryPanel: React.FC<Props> = ({ isHistoryPaneOpen, children, handleToggle, valueAccordeon }) => {
  return (
    <Panel open={isHistoryPaneOpen}>
      <Wrap>
        <ButtonToggle onClick={handleToggle} open={isHistoryPaneOpen} color={valueAccordeon ? "dark" : "panel"}>
          <BtnPanel className="button" />
          <ArrowPanel className="arrow" />
        </ButtonToggle>
        {children}
      </Wrap>
    </Panel>
  );
};

export default HistoryPanel;

const Panel = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: ${({ open }) => (open ? "100%" : "0px")};
  transition: all 0.3s ease, overflow-y 0ms;
  overflow-y: ${({ open }) => (open ? "auto" : "hidden")};
  z-index: 11;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 20px;
    width: ${({ open }) => (open ? "436px" : "8px")};
  }
`;
const Wrap = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.panel};
  height: 100vh;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 416px;
  }
`;

const ButtonToggle = styled.button<{ open: boolean; color: string }>`
  position: absolute;
  left: -20px;
  top: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 10px 8px 10px;
  background: none;
  border: none;
  cursor: pointer;
  & .arrow {
    display: none;
    transform: ${({ open }) => (open ? "scale(-1,1)" : "scale(1,1)")};
    transition: 0.3s;
    margin-left: 5px;
  }
  & .button {
    display: none;
    position: absolute;
    left: 4px;
    & path {
      transition: 0.3s;
      fill: ${({ theme, color }) => (color === "panel" ? theme.colors.panel : theme.colors.dark)};
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & .arrow {
      display: block;
    }
    & .button {
      display: block;
    }
  }
`;
