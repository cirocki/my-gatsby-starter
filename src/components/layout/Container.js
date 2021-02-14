import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  @media (max-width: 1024px) {
    padding: 0;
  }
`

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}
