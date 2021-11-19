import React from "react"
import styled from "styled-components"
import { Card } from "../../../../components/Card"

export const BodyWrapper = styled.div`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
`

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
