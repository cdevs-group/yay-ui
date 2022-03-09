import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const OverlayModal = ({ setOpen, children, open }: { setOpen: any; children: ReactNode; open: boolean }) => {
  const refSelect = useRef<any>(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current === e.target && refSelect.current && refSelect.current.contains(e.target)) {
        setOpen(false);
        console.log(e.target.parentNode);
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

  return (
    <Overlay ref={refSelect} open={open}>
      {children}
    </Overlay>
  );
};

export default OverlayModal;

const Block = styled.div`
  position: relative;
`;

const Overlay = styled.div<{ open?: boolean }>`
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: ${({ open }) => (open ? 15 : -1)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
