import React from 'react';
import styled from 'styled-components';
import { ArrowPanel, BtnPanel } from '../../components/Svg';
import { InjectedProps } from './types';

interface Props extends InjectedProps {}

const HistoryPanel: React.FC<Props> = ({ setOpen, open,children }) => (
  <Panel open={open}>
    <ButtonToggle onClick={() => setOpen(!open)} open={open}>
      <BtnPanel className="button" />
      <ArrowPanel className="arrow" />
    </ButtonToggle>
    {children}
  </Panel>
);

export default HistoryPanel;

const Panel = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  padding: ${({ open }) => (open ? '25px 20px 20px' : '0px')};
  background: ${({ theme }) => theme.colors.panel};
  width: ${({ open }) => (open ? '436px' : '8px')};
  transition: 0.3s;
`;

const ButtonToggle = styled.button<{open: boolean }>`
  position: absolute;
  left: -20px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 10px 8px 10px;
  background: none;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  & .arrow {
    transform: ${({ open }) => (open ? 'scale(-1,1)' : 'scale(1,1)')};
    transition: 0.3s;
    margin-left: 5px;
  }
  & .button {
    position: absolute;
    left: 4px;
    & path {
      fill: ${({ theme }) => theme.colors.panel};
    }
  }
`;
