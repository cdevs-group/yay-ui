import styled from "styled-components";

const StyledCard = styled.div`
  width: 404px;
  height: 470px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;

export default StyledCard;
