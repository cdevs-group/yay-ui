import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }
  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.bgGray};
    border-bottom: 1px solid #606060;
    border-left: 1px solid #606060;
  }
`;

export const StyledTooltip = styled.div`
  padding: 11px;
  font-size: 11px;
  line-height: 16px;
  border-radius: 8px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.colors.bgGray};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #606060;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -5px;
  }
  &[data-popper-placement^="top"] > ${Arrow}::before {
    border-left: none;
    border-right: 1px solid #606060;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -5px;
  }
  &[data-popper-placement^="bottom"] > ${Arrow}::before {
    border-bottom: none;
    border-top: 1px solid #606060;
  }
  &[data-popper-placement^="left"] > ${Arrow} {
    right: -5px;
  }
  &[data-popper-placement^="left"] > ${Arrow}::before {
    border-bottom: none;
    border-top: 1px solid #606060;
    border-left: none;
    border-right: 1px solid #606060;
  }
  &[data-popper-placement^="right"] > ${Arrow} {
    left: -5px;
  }
`;
