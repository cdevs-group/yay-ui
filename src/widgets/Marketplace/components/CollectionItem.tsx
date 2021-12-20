import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { baseColors, lightColors } from "../../../theme/colors";

const CollectionItem = ({
  data,
}: {
  data: { index?: number; img: string; name: string | React.ReactNode; price?: string | React.ReactNode };
}) => {
  return (
    <Flex alignItems="center">
      {data.index && (
        <Text marginRight="15px" fontSize="17px" color={baseColors.textGray}>
          {data.index}
        </Text>
      )}
      <Logo>
        <img src={data.img} alt="logo" />
      </Logo>
      <div>
        <Text fontSize="17px" color={lightColors.text}>
          {data.name}
        </Text>
        {data.price && (
          <Text fontSize="13px" color={baseColors.textGray}>
            {data.price}
          </Text>
        )}
      </div>
    </Flex>
  );
};

export default CollectionItem;

const Logo = styled.div`
  width: 53px;
  height: 53px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
  }
`;
