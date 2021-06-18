import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const NoHistory = () => (
  <NoHistoryBlock>
    <Text mb={15}>No prediction history available</Text>
    <Text size="sm" fontWeight={400} letterSpacing="0.05em">
      If you are sure you should see history here, make sure you`re connected to the correct wallet and try again
    </Text>
  </NoHistoryBlock>
);

export default NoHistory;

const NoHistoryBlock = styled.div`
  max-width: 340px;
  margin: 0 auto;
  padding: 170px 20px;
  text-align: center;
`;
