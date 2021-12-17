import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const PropertieItem = ({ name, value }: { name: string; value: string }) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Value>{value}</Value>
    </Item>
  );
};

export default PropertieItem;

const Item = styled.div`
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.whiteRgba3};
  padding: 10px 15px;
  border-radius: 12px;
`;
const Name = styled(Text)`
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  opacity: 0.5;
`;
const Value = styled(Text)`
  font-size: 15px;
  line-height: 19px;
`;
