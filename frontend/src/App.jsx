import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import MainLayout from "./main/Layouts/MainLayout";
import Home from "../src/main/pages";
import Confirmed from "./main/components/demo-pages-components/components/Confirmed";
import ScheduleDemo from "./main/components/demo-pages-components/components/ScheduleDemo";
import Contact from "../src/main/pages/Contact";
import Support from "../src/ui/pages/UserSupport";
import Terms from "../src/ui/pages/TermsAndService/TermsAndService";
import UserProfile from "./ui/pages/user-profile/UserProfile";
import Register from "../src/main/components/sections/adminSignup/AdminSignup";
import Login from "../src/main/components/sections/adminLogin/AdminLogin";
import AdminOverallPerformance from "./ui/pages/AdminOverallPerformance";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<ScheduleDemo />} />
          <Route path="/confirm-demo" element={<Confirmed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
