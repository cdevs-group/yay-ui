import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { StyledModal } from "../../../Modal/Modal";
import { CloseIcon } from "../../../../components/Svg";
import { Button } from "../../../../components/Button";
import { Flex } from "../../../../components/Box";
import { Pagination } from "../../../../components/Pagination";
import { IChooseModalProps } from "../types";
import NftsTable from "./NftsTable";

const ChooseAvatarModal = ({
  togglePage,
  currentPage,
  length,
  nftsList,
  onDismiss,
  handleImgSelect,
}: IChooseModalProps) => {
  return (
    <Wrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Title>Choose your avaiable NFTs</Title>
        <ButtonClose onClick={onDismiss}>
          <CloseIcon />
        </ButtonClose>
      </Flex>
      <NftsTable handleSelectValue={handleImgSelect} nftsList={nftsList} />
      {length && (
        <Flex mt={20} justifyContent="flex-end">
          <Pagination currentPage={currentPage} length={length} togglePage={togglePage} />
        </Flex>
      )}
    </Wrapper>
  );
};

export default ChooseAvatarModal;

const Wrapper = styled(StyledModal)`
  max-width: 568px;
  padding: 17px 19px 19px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 27px 30px 22px;
  }
`;
const Title = styled(Text)`
  font-size: 16px;
  line-height: 27px;
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 21px;
  }
`;
const ButtonClose = styled(Button)`
  padding: 0;
  background: none;
  box-shadow: none;
`;
