import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout } from "./main/components";

import Contact from "./main/pages/Contact";
import { About } from "./main/pages";
// import Header from "./ui/components/Header"
// import { Divider, Main, MainContainer } from "./styles/reusableElements.styled"
// import Sidebar from "./ui/components/Sidebar"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <MainLayout>
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
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
