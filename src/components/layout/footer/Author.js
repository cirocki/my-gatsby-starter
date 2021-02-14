import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 2rem;
`
const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.light};
`
const StyledLink = styled.a`
  color: ${props => props.theme.colors.light};
`

export default function Author() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            authorWebsite
          }
        }
      }
    `
  )
  const author = site.siteMetadata.author
  const website = site.siteMetadata.authorWebsite

  return (
    <StyledWrapper>
      <StyledParagraph>
        Designed and developed by{" "}
        <StyledLink href={website}>{author}</StyledLink>
      </StyledParagraph>
    </StyledWrapper>
  )
}
