import React from "react"
import { ThemeProvider } from "styled-components"
import { Route, Routes } from "react-router-dom"
import Home from "../src/main/pages"
import Confirmed from "./main/compnents/demo-pages-components/components/Confirmed"
import ScheduleDemo from "./main/compnents/demo-pages-components/components/ScheduleDemo"
import Confirmed from "./main/compnents/demo-pages-components/components/ScheduleDemo"
import { GlobalStyles, theme } from "./styles/globalStyles"
import Contact from "../src/main/pages/Contact"
import UserProfile from "./ui/pages/user-profile/UserProfile"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ScheduleDemo />} />
        <Route path="/confirm-demo" element={<Confirmed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <UserProfile /> */}
    </ThemeProvider>
  )
}
export default App
