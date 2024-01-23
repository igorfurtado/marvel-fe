import { createGlobalStyle } from 'styled-components'
import { colors } from './references'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
  }

  body {
    background: ${colors.white};
    color: ${colors.black}
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: ${colors.black}
  }

  section, main {
    display: flex;
    height: 100vh;
    width: 100%;
  }
`
