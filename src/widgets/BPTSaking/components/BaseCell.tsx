import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";

const BaseCell = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CellContent = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  ${Text} {
    line-height: 1;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  } ;
`;

export default BaseCell;
