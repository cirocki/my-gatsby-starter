import React from "react"
import styled from "styled-components"
import Container from "../Container"
import Author from "./Author"
import Copyrights from "./Copyrights"

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.dark};
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledWrapper>
          <Copyrights />
          <Author />
        </StyledWrapper>
      </Container>
    </StyledFooter>
  )
}
