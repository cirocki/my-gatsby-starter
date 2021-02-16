import React from "react"
import SEO from "../seo/seo"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const StyledMainWrapper = styled(BackgroundImage)`
  padding-top: 80px;
`

const StyledHeader = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.accent};
  font-size: 3rem;
`

export default function PageWithBackground() {
  const data = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "pages/example/dog.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const image = data.image1.childImageSharp.fluid

  return (
    <Layout>
      <StyledMainWrapper Tag="main" fluid={image} backgroundColor={`#ffffff`}>
        <SEO title="Page Title" description="Page description." />
        <StyledHeader>Page Header</StyledHeader>
      </StyledMainWrapper>
    </Layout>
  )
}
