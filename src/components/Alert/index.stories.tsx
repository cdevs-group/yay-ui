import React, { useState, useEffect } from "react";
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
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertLoader, setShowAlertLoader] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const closeAlert = () => setShowAlert(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (showAlert) setShowAlert(false);
    }, 2000);
    return () => clearTimeout(t);
  }, [showAlert]);

  useEffect(() => {
    setIsLoad(true);

    const t = setTimeout(() => {
      if (isLoad) setIsLoad(false);
    }, 2000);
    const t2 = setTimeout(() => setShowAlertLoader(false), 4000);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [showAlertLoader]);

  return (
    <div style={{ padding: "32px", width: "1000px" }}>     
      <Row>
        <Alert
          onClick={closeAlert}
          variant="winning"
          title="Winnings collected!"
        >Your prizes have been sent to your wallet</Alert>
      </Row>
      <Row onClick={() => setShowAlert(true)}>
        <button>нажми на меня winning</button>
      </Row>
      <Row onClick={() => setShowAlertLoader(true)}>
        <button>нажми на меня with loader</button>
      </Row>
    </div>
  );
};
