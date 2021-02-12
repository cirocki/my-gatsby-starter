import React from "react"
import "./../../styles/reset.css"
import "./../../styles/fonts.css"
import Theme from "../../styles/Theme"
import GlobalStyle from "../../styles/GlobalStyle"

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <h1>header</h1>
        {children}
        <h1>footer</h1>
      </Theme>
    </>
  )
}
