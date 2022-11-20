import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout } from "./main/components";

import Contact from "./main/pages/Contact";
import { About } from "./main/pages";
// import Header from "./ui/components/Header"
// import { Divider, Main, MainContainer } from "./styles/reusableElements.styled"
// import Sidebar from "./ui/components/Sidebar"
import MainLayout from "./main/Layouts/MainLayout";
import Home from "../src/main/pages";
import Confirmed from "./main/components/demo-pages-components/components/Confirmed";
import ScheduleDemo from "./main/components/demo-pages-components/components/ScheduleDemo";
import Contact from "../src/main/pages/Contact";
import Support from "../src/ui/pages/UserSupport";
import Terms from "../src/ui/pages/TermsAndService/TermsAndService";
import UserProfile from "./ui/pages/user-profile/UserProfile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/demo" element={<ScheduleDemo />} />
          <Route path="/confirm-demo" element={<Confirmed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
