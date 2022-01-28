import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
  color: ${({ colorTheme, theme }) => colorTheme || theme.colors.green};
  & svg {
    fill: ${({ theme, colorTheme }) => colorTheme || theme.colors.green};
  }
`;

const Link: React.FC<any> = ({ external, colorTheme, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink colorTheme={colorTheme} as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "green",
};

export default Link;
