import React from "react";
import styled from "styled-components";
import { RowBetween } from "../../../components/Layouts/Row";
import { AutoColumn } from "../../../components/Layouts/Column";

const Grouping = styled(RowBetween)`
  width: 50%;
`;

const Circle = styled.div<{ confirmed?: boolean; disabled?: boolean }>`
  min-width: 20px;
  min-height: 20px;
  background-color: ${({ theme, confirmed, disabled }) =>
    disabled ? theme.colors.bgOpacitY3 : confirmed ? theme.colors.green : theme.colors.bgOpacitY3};
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
  font-size: 12px;
`;

const CircleRow = styled.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
`;

const Connector = styled.div<{ prevConfirmed?: boolean; disabled?: boolean }>`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${({ theme, prevConfirmed, disabled }) =>
        disabled ? theme.colors.bgOpacitY3 : prevConfirmed ? theme.colors.green : theme.colors.bgOpacitY3}
      0%,
    ${({ theme, prevConfirmed, disabled }) =>
        disabled ? theme.colors.bgOpacitY3 : prevConfirmed ? theme.colors.green : theme.colors.bgOpacitY3}
      80%
  );
  opacity: 0.6;
`;

export interface ProgressCirclesProps {
  steps: boolean[];
  disabled?: boolean;
}

export default function ProgressCircles({ steps, disabled = false, ...rest }: ProgressCirclesProps) {
  return (
    <AutoColumn justify="center" {...rest}>
      <Grouping>
        {steps.map((step, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <CircleRow key={i}>
              <Circle confirmed={step} disabled={disabled || (!steps[i - 1] && i !== 0)}>
                {step ? "✓" : i + 1}
              </Circle>
              <Connector prevConfirmed={step} disabled={disabled} />
            </CircleRow>
          );
        })}
        <Circle disabled={disabled || !steps[steps.length - 1]}>{steps.length + 1}</Circle>
      </Grouping>
    </AutoColumn>
  );
}
