import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import Alert from "./Alert";
import AlertBlur from "./AlertBlur";
import { Text } from "../Text";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

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
        <Alert onClick={closeAlert} variant="winning" title="Winnings collected!">
          Your prizes have been sent to your wallet
        </Alert>
      </Row>
      <Row>
        <AlertBlur title="STEP 1">
          <Text fontSize="14px" color="#8B8B8B">
            You have{" "}
            <Text fontSize="14px" as="span" color="green">
              9.000 e.Yay
            </Text>{" "}
            in AVAX. <br /> you want stake it?
          </Text>
        </AlertBlur>
      </Row>
    </div>
  );
};
