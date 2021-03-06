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

export default function Home() {
  return (
    <Layout>
      <StyledMainWrapper>
        <SEO title="Home" description="My custom starter in Gatsby.js" />
        <StyledHeader>My Gatsby Starter Index</StyledHeader>
      </StyledMainWrapper>
    </Layout>
  )
}
