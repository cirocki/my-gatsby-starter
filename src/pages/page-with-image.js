import React from "react"
import SEO from "../seo/seo"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledMainWrapper = styled.main`
  padding-top: 80px;
`
const StyledHeader = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.accent};
  font-size: 3rem;
`

export default function PageWithImage() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/example/dog.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  const image = data.image1.childImageSharp.fluid

  return (
    <Layout>
      <StyledMainWrapper>
        <SEO title="Page Title" description="Page description." />
        <StyledHeader>Page Header</StyledHeader>
        <Img fluid={image} alt="Image description" />
      </StyledMainWrapper>
    </Layout>
  )
}
