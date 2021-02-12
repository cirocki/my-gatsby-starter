import React from "react"
import SEO from "../seo/seo"
import styled from "styled-components"
import Layout from "../components/layout/Layout"

const StyledHeader = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.accent};
  font-size: 3rem;
`

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="My custom starter in Gatsby.js" />
      <StyledHeader>My Gatsby Starter Index</StyledHeader>
    </Layout>
  )
}
