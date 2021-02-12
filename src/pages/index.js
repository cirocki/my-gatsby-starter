import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/Layout"

const StyledHeader = styled.h2`
  color: lime;
  font-size: 3rem;
`

export default function Home() {
  return (
    <Layout>
      <StyledHeader>Starter!</StyledHeader>
    </Layout>
  )
}
