import React, { useState } from "react";
import styled from "styled-components";
import CardIndicator from "./components/CardIndicator";
import CardChoose from "./components/CardChoose";
import { Button } from "../../components/Button";

export default {
  title: "Widgets/LockFuture",
  argTypes: {},
};

export const LockFuture = () => {
  const indicatorsList = [
    {
      title: "1500 SLOTS",
      text: "Available slots for 5k YAY",
    },
    {
      title: "750 SLOTS",
      text: "Available slots for 25k YAY",
    },
    {
      title: "350 SLOTS",
      text: "Available slots for 50k YAY",
    },
  ];

  const texts = {
    title: "Choose your ticket",
    choose: "Choose your ticket for take BPT",
    balance: "Available balance: ",
  };

  const ButtonAprove = () => (
    <StyledButton onClick={() => {}} spin={false} disabled={false} variant="green" width="100%">
      Approve
    </StyledButton>
  );

  const ButtonSwap = () => (
    <StyledButton onClick={() => {}} spin disabled variant="green" width="100%">
      Stake it
    </StyledButton>
  );

  const ButtonConnect = () => (
    <Button onClick={() => {}} variant="green" width="100%">
      Connect
    </Button>
  );

  const tabs = [
    {
      value: 5000,
      disabled: true,
    },
    {
      value: 25000,
      disabled: false,
    },
    {
      value: 50000,
      disabled: false,
    },
  ];
  const [value, onUserInput] = useState<number>(tabs.find((el) => !el.disabled)?.value || 0);

  return (
    <Wrapper>
      {indicatorsList.map((el) => (
        <CardIndicator title={el.title} text={el.text} key={el.title} />
      ))}
      <div />
      <CardChoose
        texts={texts}
        tabs={tabs}
        buttonLeft={<ButtonAprove />}
        buttonRight={<ButtonSwap />}
        onUserInput={onUserInput}
        valueInput={value}
        balance="50,000 YAY"
        buttonConnect={<ButtonConnect />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 41px 17px;
`;

const StyledButton = styled(Button)`
  width: 48%;
  padding: 0 10px;
  &:disabled {
    background: ${({ theme }) => theme.colors.whiteRgba};
    opacity: 1;
  }
`;
