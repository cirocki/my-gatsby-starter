import React from "react"
import styled from "styled-components"
import Author from "./Author"
import Copyrights from "./Copyrights"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.dark};
`

export default function Footer() {
  return (
    <StyledFooter>
      <Copyrights />
      <Author />
    </StyledFooter>
  )
}
