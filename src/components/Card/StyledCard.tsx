import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 308px;
  height: 400px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;

const StyledCard: React.FC = () => {

  return (
    <Wrap>
        <Up>
    </Wrap>
  );
};

export default StyledCard;
