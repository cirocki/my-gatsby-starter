import React from "react"
import SEO from "../seo/seo"
import styled from "styled-components"
import Layout from "../components/layout/Layout"

const StyledMainWrapper = styled.main`
  padding-top: 80px;
`
const StyledHeader = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.accent};
  font-size: 3rem;
`

export default function About() {
  return (
    <Layout>
      <StyledMainWrapper>
        <SEO title="Page Title" description="Page description." />
        <StyledHeader>Page Header</StyledHeader>
      </StyledMainWrapper>
    </Layout>
  )
}
