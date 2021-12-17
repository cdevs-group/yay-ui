import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDropdown from "./StyledDropdown";
import { DropDownProps } from "./types";

const DropdownLayout = ({ children, open, setOpen, icon, variant, plusMarginTop }: DropDownProps) => {
  const refSelect = useRef<any>(null);
  
  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    if (document && refSelect && refSelect.current) {
      document.addEventListener("mouseup", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("mouseup", handleClickOutside, false);
    };
  }, [refSelect, handleClickOutside]);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Block ref={refSelect}>
      <StyledButton onClick={handleClickOpen} variant={variant}>
        {icon}
      </StyledButton>
      <StyledDropdown className={open ? "open" : ""} variant={variant} plusMarginTop={plusMarginTop}>
        {children}
      </StyledDropdown>
    </Block>
  );
};

export default DropdownLayout;

const Block = styled.div`
  position: relative;
`;
