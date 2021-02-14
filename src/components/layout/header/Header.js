import React from "react"
import styled from "styled-components"
import MainNav from "./MainNav"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.dark};
`
const StyledHeading = styled.h1`
  padding: 1rem;
  color: ${props => props.theme.colors.light};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeading>Starter Theme</StyledHeading>
      <MainNav />
    </StyledHeader>
  )
}
