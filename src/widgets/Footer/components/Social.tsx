import React from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";

const Social = ({ data }: { data: { title: string; links: { img: string; url: string }[] } }) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Flex justifyContent="space-between">
        {data.links.map((link) => (
          <LinkItem key={link.url} target="_blank" href={link.url}>
            <img src={link.img} alt="socail" />
          </LinkItem>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Social;

const Wrapper = styled.div`
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
`;
const Title = styled(Text)`
  margin-bottom: 22px;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
`;
const LinkItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 30px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.text};
`;
