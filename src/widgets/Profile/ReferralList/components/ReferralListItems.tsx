import React from "react";
import styled from "styled-components";
import { Pagination } from "../../../../components/Pagination";
import { Flex } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import { ReferralListItemsProps } from "../types";
import { ellipsis } from "../../../../helpers/ellipsis";

const ReferralListItems = ({ data, keys, texts, pagination }: ReferralListItemsProps) => {
  const { txHashKey, loginKey, earnedKey, dateKey } = keys
  const { countPerPage, togglePage, currentPage } = pagination
  return (
    <Wrapper>
      {data?.length &&
        data
          ?.slice(countPerPage * (currentPage - 1), currentPage * countPerPage)
          .map((item, i) => (
            <Item key={i}>
              <ItemContent>
                <Column>
                  <Name>{texts.itemRef}</Name>
                  <Value>{ellipsis(item[txHashKey], 7)}</Value>
                </Column>
                <Column>
                  <Name>{texts.itemLogin}</Name>
                  <Value>{item[loginKey]}</Value>
                </Column>
                <Column>
                  <Name>{texts.itemEarn}</Name>
                  <Value>{item[earnedKey]}</Value>
                </Column>
                <Column>
                  <Name>{texts.itemTime}</Name>
                  <Value>{item[dateKey]}</Value>
                </Column>
              </ItemContent>
            </Item>
          ))}
      <Flex mt={20} justifyContent="flex-end">
        <Pagination currentPage={currentPage} length={data.length / countPerPage} togglePage={togglePage} />
      </Flex>
    </Wrapper>
  );
};

export default ReferralListItems;

const Wrapper = styled.div``;
const Item = styled.div`
  margin-top: 16px;
  padding: 19px 34px 23px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 7px;
  }
`;
const Column = styled.div`
  &:last-child {
    justify-self: flex-end;
  }
`;
const ItemContent = styled.div`
  display: grid;
  gap: 0 30px;
  min-width: 666px;
  grid-template-columns: 1fr 1fr 0.5fr 1fr;
`;
const Name = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
const Value = styled(Text)`
  margin-top: 10px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
`;
