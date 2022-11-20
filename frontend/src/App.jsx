import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import { GlobalStyles, theme } from "./styles/globalStyles"

import Contact from "./Main/pages/Contact"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Contact />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`
