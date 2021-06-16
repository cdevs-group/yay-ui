import React from "react";
import styled from "styled-components";

interface IProps {
  active: boolean;
  children: React.ReactNode;
}

const IconBlock = ({ active, children }: IProps) => <Block active={active}>{children}</Block>;

const Block = styled.div<{ active: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active ? "#47DA3B" : "rgba(255, 255, 255, 0.15)")};
  border-radius: 7px;
`;

IconBlock.defaultProps = {
  // active:true
};

export default IconBlock;
