import React from "react";
import Step from "./components/Step";
import styled from "styled-components";
import { StatusKYC } from "./types";

const KYCSteps = ({
  texts,
  status1,
  status2,
  status3,
}: {
  texts: {
    step: string;
    description1: string;
    description2: string;
    description3: string;
  };
  status1: StatusKYC;
  status2: StatusKYC;
  status3: StatusKYC;
}) => {
  return (
    <Wrapper>
      <Step status={status1} title={texts.step} number={1} description={texts.description1} />
      <Step status={status2} title={texts.step} number={2} description={texts.description2} />
      <Step status={status3} title={texts.step} number={3} description={texts.description3} />
    </Wrapper>
  );
};

export default KYCSteps;

const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  gap: 17px;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 1150px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
