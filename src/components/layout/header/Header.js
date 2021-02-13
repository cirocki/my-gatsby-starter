import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.accent};
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>Starter Theme</h1>
    </StyledHeader>
  )
}
