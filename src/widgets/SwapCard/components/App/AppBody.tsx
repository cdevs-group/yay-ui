import React from "react"
import styled from "styled-components"

export const BodyWrapper = styled.div`
  border-radius: 24px;
  max-width: 404px;
  height: 486px;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.cardBg };
`

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>;
}
