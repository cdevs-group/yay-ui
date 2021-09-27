import React from "react";
import styled from "styled-components";
import BaseCell from "./BaseCell";
import { Button } from "../../../components/Button";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { Loader } from "../../../components/Loader";

interface ApproveCellProps {
  textButton: string;
  isLoad: boolean;
  textWaiting: string;
  handleApprove: () => void;
}

const ApproveCell = ({ textButton, isLoad, textWaiting, handleApprove }: ApproveCellProps) => {
  return (
    <StyledCell>
      {!isLoad ? (
        <Button onClick={handleApprove} width="100%" variant="green">
          {textButton}
        </Button>
      ) : (
        <Flex alignItems="center">
          <Text mr="15px">{textWaiting}</Text>
          <LoaderBlock>
            <Loader />
          </LoaderBlock>
        </Flex>
      )}
    </StyledCell>
  );
};

export default ApproveCell;

const LoaderBlock = styled.div`
  margin-top: -15px;
  height: 20px;
  width: 20px;
  position: relative;
  transform: scale(0.3);
  & div {
    position: absolute;
  }
`;
const StyledCell = styled(BaseCell)`
  padding: 0 9px 0 16px;
  height: 40px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 221px;
    padding: 0;
    margin-bottom: 0;
    text-align: center;
  }
`;
