import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledListLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function ListLogo({
  logoURI,
  style,
  size = '24px',
  alt,
  srcs
}: {
  logoURI: string
  size?: string
  style?: React.CSSProperties
  alt?: string
  srcs: string[]
}) {

  return <StyledListLogo alt={alt} size={size} srcs={srcs} style={style} />
}