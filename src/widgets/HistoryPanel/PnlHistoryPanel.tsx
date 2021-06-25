import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const PnlHistoryPanel: React.FC<Props> = ({ children }) => <Wrap>{children}</Wrap>;

export default PnlHistoryPanel;

const Wrap = styled.div`
  padding: 0 20px 20px;
  background: ${({ theme }) => theme.colors.panel};
`;
