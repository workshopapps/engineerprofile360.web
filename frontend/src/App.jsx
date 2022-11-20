import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout } from "./main/components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <MainLayout>

        </MainLayout>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App

const AppContainer = styled.div`
  width: 100%;
`
