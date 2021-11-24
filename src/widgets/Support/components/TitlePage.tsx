import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const TitlePage = ({ title, note, points }: { points: ReactNode[]; note: string; title: string }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Note>{note}</Note>
      <Points>
        {points.map((point, i) => (
          <React.Fragment key={i}>{point}</React.Fragment>
        ))}
      </Points>
    </Wrapper>
  );
};

export default TitlePage;

const Wrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
const Title = styled(Text)`
  margin-bottom: 21px;
  font-size: 42px;
  line-height: 121.8%;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.text};
`;
const Note = styled(Text)`
  margin-bottom: 21px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.17em;
  color: ${({ theme }) => theme.colors.text};
`;
const Points = styled.div`
  padding: 0 10px;
  text-align: center;
`;
