import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { IReferralListItem, ITextsReferralList } from "../types";
import { ellipsis } from "../../../../helpers/ellipsis";

const ReferralListItems = ({ data, texts }: { data: IReferralListItem[]; texts: ITextsReferralList }) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <Item key={i}>
          <ItemContent>
            <Column>
              <Name>{texts.itemRef}</Name>
              <Value>{ellipsis(item.ref, 7)}</Value>
            </Column>
            <Column>
              <Name>{texts.itemType}</Name>
              <Value>{item.type}</Value>
            </Column>
            <Column>
              <Name>{texts.itemEarn}</Name>
              <Value>{item.earn}</Value>
            </Column>
            <Column>
              <Name>{texts.itemTime}</Name>
              <Value>{item.time}</Value>
            </Column>
          </ItemContent>
        </Item>
      ))}
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
