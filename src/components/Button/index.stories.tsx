import { capitalize } from "lodash";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

import IconButton from "./IconButton";
import Button from "./Button";
import { scales, variants } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Row = styled.div`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Default: React.FC = () => {
  return (
    <>
      <div>
        <button type="button">Unstyled Button</button>
      </div>
      <div>
        {Object.values(variants).map((variant) => {
          return (
            <div key={variant}>
              {Object.values(scales).map((scale) => {
                return (
                  <Button key={scale} variant={variant} scale={scale} mr="8px">
                    {`${capitalize(variant)} ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <Button mr="8px" disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </>
  );
};

export const Anchors: React.FC = () => {
  return (
    <>
      <div>
        {Object.values(variants).map((variant) => {
          return (
            <div key={variant}>
              {Object.values(scales).map((scale) => {
                return (
                  <Button
                    as="a"
                    href="https://pancakeswap.finance"
                    key={scale}
                    variant={variant}
                    scale={scale}
                    external
                    mr="8px"
                  >
                    {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <Button as="a" href="https://pancakeswap.finance" mr="8px" external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://pancakeswap.finance" variant="secondary" external disabled>
          Disabled
        </Button>
      </div>
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="secondary">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          {/* <Button isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
            Approving
          </Button> */}
          <Button isLoading variant="success">
            Approving
          </Button>
        </Row>
        <Row>
          {/* <Button startIcon={<LogoIcon />}>Start Icon</Button>
          <Button endIcon={<LogoIcon />}>End Icon</Button>
          <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
            Start & End Icon
          </Button> */}
        </Row>
        <Row>
          <IconButton>
            {/* <LogoIcon /> */}
          </IconButton>
          <IconButton variant="secondary">
            {/* <AddIcon /> */}
          </IconButton>
        </Row>
        <Row>
          <IconButton scale="sm" variant="danger">
            {/* <LogoIcon /> */}
          </IconButton>
          <IconButton scale="sm" variant="success">
            {/* <AddIcon color="currentColor" /> */}
          </IconButton>
        </Row>
      </BrowserRouter>
    </div>
  );
};
