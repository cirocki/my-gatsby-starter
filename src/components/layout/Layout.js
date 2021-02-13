import React from "react"
import "./../../styles/reset.css"
import "./../../styles/fonts.css"
import Theme from "../../styles/Theme"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "./header/Header"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </Theme>
    </>
  )
}
