import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import { GlobalStyles, theme } from "./styles/globalStyles"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <h1>Hello, World!</h1>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App

const AppContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`
