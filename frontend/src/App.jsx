import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout } from "./main/components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
            <MainLayout>
              <Routes>

              </Routes>
            </MainLayout>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
`;
