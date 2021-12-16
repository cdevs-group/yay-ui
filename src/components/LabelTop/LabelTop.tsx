import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Text } from "../Text";

interface Props extends SpaceProps {
  children: string | React.ReactNode;
  label: string;
}

const LabelTop: React.FC<Props> = ({ children, label, ...props }) => {
  return (
    <StyledComingSoon {...props}>
      <TextComingSoon>{children}</TextComingSoon>
      <ComingSoon>{label}</ComingSoon>
    </StyledComingSoon>
  );
};

export default LabelTop;

const StyledComingSoon = styled.div`
  display: flex;
  align-items: center;
  ${space}
`;

const ComingSoon = styled.div`
  position: relative;
  top: -13px;
  left: 0px;
  display: flex;
  align-items: center;
  padding: 5px 11px;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.text};
  font-size: 9px;
  line-height: 11px;
  font-weight: normal;
  border-radius: 6px;
`;
const TextComingSoon = styled(Text)`
  opacity: 0.5;
`;
