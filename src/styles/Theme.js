import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#111",
    light: "#fff",
    accent: "#d50000",
  },
  fonts: {
    primary: `"Open Sans", sans-serif`,
    secondary: `"Montserrat", sans-serif`,
  },
  containerWidth: "1440px",
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
