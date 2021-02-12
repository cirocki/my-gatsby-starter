import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.gold};
    color: ${props => props.theme.colors.dark};
    font-family: ${props => props.theme.fonts.primary};
    position: relative;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }

  /* KEEP FOOTER BOTTOM EVEN IF MAIN CONTENT IS SHORT  */
  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1
  }
 
`
export default GlobalStyle
