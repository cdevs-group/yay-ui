import React from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { Link } from "react-router-dom";

const NavColumn = ({ data }: { data: { title: string; links: { name: string; url: string; out: boolean }[] } }) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Flex flexDirection="column">
        {data.links.map((link) =>
          link.out ? (
            <LinkOut key={link.name} target="_blank" as="a" href={link.url}>
              {link.name}
            </LinkOut>
          ) : (
            <LinkItem key={link.name} to={link.url}>
              {link.name}
            </LinkItem>
          )
        )}
      </Flex>
    </Wrapper>
  );
};

export default NavColumn;

const Wrapper = styled.div``;
const Title = styled(Text)`
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
`;
const LinkItem = styled(Link)`
  font-size: 14px;
  line-height: 30px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.text};
`;
const LinkOut = styled(LinkItem)``;
