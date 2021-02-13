import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.accent};
`

export default function Footer() {
  return (
    <StyledFooter>
      <h1>copyrights</h1>
    </StyledFooter>
  )
}
