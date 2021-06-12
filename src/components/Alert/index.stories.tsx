import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { Meta } from "@storybook/react/types-6-0";
import Alert from "./Alert";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

const handleClick = noop;

export const WithHandler: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "1000px" }}>
      <Row>
        <Alert title='Collecting 0,02 BNB' value='$0,544' onClick={handleClick} />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success! UP position entered" variant="success"/>
      </Row>
      <Row>
        <Alert onClick={handleClick} 
          variant='winning' 
          title='Winnings collected!' 
          subtitle='Your prizes have been sent to your wallet'>
        </Alert>
      </Row>
    </div>
  );
};
