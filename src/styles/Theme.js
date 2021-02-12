import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#16191a",
    light: "#f2f2f2",
    gold: "#968b63",
  },
  fonts: {
    primary: `"Jost", sans-serif`,
    secondary: `"Playfair Display", serif`,
  },
  maxWidth: {
    xs: "479px",
    s: "768px",
    m: "1024px",
    l: "1200px",
    xl: "1799px",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
