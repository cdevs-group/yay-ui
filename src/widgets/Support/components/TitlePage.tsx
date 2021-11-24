import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";

const TitlePage = ({ title, description, margin }: { margin?: string, title: string, description: ReactNode }) => {
  return (
    <Wrapper margin={margin}>
      <Title>
        {title}
      </Title>
      {description}
    </Wrapper>
  );
};

export default TitlePage;

const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
  text-align: center;
`;
const Title = styled(Text)`
  margin-bottom: 25px;
  font-size: 42px;
  line-height: 121.8%;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.text};
`;