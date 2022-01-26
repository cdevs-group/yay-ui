import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { baseColors, lightColors } from "../../../theme/colors";
import { Skeleton } from "../../..";

const CollectionItem = ({
  data,
  isLoading,
}: {
  data: { index?: number; img: string; name: string | React.ReactNode; price?: string | React.ReactNode };
  isLoading?: boolean;
}) => {
  return (
    <Flex alignItems="center">
      {!isLoading && (
        <>
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
        </>
      )}
      {isLoading && (
        <>
          <Skeleton height={53} width={16} marginRight="10px" />
          <Skeleton variant="circle" width={53} height={53} marginRight="10px" />
          <Skeleton height={53} width="100%" />
        </>
      )}
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
    border-radius: 50%;
  }
`;
