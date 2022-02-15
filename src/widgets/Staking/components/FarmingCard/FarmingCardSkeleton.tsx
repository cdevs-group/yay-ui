import React from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";
import PairToken from "./PairToken";
import { Skeleton } from "../../../..";

const FarmingCardSkeleton = () => {
  const SkeletonTop = () => <Skeleton height={23} width="100%" borderRadius={12} maxWidth={105} />;
  const SkeletonLeft = () => <Skeleton height={23} width="100%" borderRadius={12} maxWidth={84} />;
  const SkeletonRight = () => <Skeleton height={23} width="100%" borderRadius={12} maxWidth={161} />;

  const BottomBlock = () => (
    <Flex mt={12} justifyContent="space-between">
      <SkeletonLeft />
      <SkeletonRight />
    </Flex>
  );

  return (
    <Flex flexDirection="column" alignItems="center" height="100%">
      <HeadLine />
      <Card>
        <TopBlock>
          <Flex justifyContent="space-between">
            <SkeletonTop />
            <SkeletonTop />
          </Flex>
          <Flex mt={13} justifyContent="space-between">
            <SkeletonTop />
            <SkeletonTop />
          </Flex>
          <Pair>
            <PairToken
              token0={<Skeleton variant="circle" height="100%" width="100%" />}
              token1={<Skeleton variant="circle" height="100%" width="100%" />}
            />
          </Pair>
        </TopBlock>
        <Content>
          <Skeleton variant="rect" height={28} width="100%" borderRadius={12} maxWidth={125} margin="0 auto" />
          <Flex mt={23} justifyContent="space-between">
            <SkeletonLeft />
            <SkeletonRight />
          </Flex>
          <BottomBlock />
          <BottomBlock />
          <BottomBlock />
          <BottomBlock />
        </Content>
      </Card>
    </Flex>
  );
};

export default FarmingCardSkeleton;

const HeadLine = styled.div`
  width: 100%;
  max-width: 250px;
  height: 29px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 308px;
  }
`;
const Card = styled.div`
  max-width: 375px;
  width: 100%;
  height: 100%;
  padding: 7px 7px 25px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
`;
const TopBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 12px;
`;
const Pair = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: translate(-50%, -10px);
  }
`;
const Content = styled.div`
  padding: 45px 10px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 45px 20px 0;
  }
`;
