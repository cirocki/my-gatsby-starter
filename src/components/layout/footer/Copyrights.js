import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 2rem;
  color: ${props => props.theme.colors.light};
`

export default function Copyrights() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const copyrightsOwner = site.siteMetadata.title
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <StyledWrapper>
      <p>
        © {currentYear} {copyrightsOwner} - All rights reserved.
      </p>
    </StyledWrapper>
  )
}
