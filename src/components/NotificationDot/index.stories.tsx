import React from "react";
import styled from "styled-components";
import { NotificationDot } from ".";
import { Button } from "../Button";

export default {
  title: "Components/NotificationDot",
  argTypes: {},
};

const Wrap = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
`;

export const NotificationDotBlock: React.FC = () => (
  <Wrap>
    <NotificationDot>
      <Button>Hi</Button>
    </NotificationDot>
  </Wrap>
);
