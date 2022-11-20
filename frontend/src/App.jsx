import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./main/pages"
import Confirmed from "./main/compnents/demo-pages-components/components/Confirmed"
import ScheduleDemo from "./main/compnents/demo-pages-components/components/ScheduleDemo"
import { GlobalStyles, theme } from "./styles/globalStyles"
import Contact from "./main/pages/Contact"
// import UserProfile from "./ui/pages/user-profile/UserProfile"
import UiLayout from "./ui/components/UiLayout"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<ScheduleDemo />} />
          <Route path="/confirm-demo" element={<Confirmed />} />
          <Route path="/contact" element={<Contact />} />
          {/* <UiLayout>INSERT PAGES FOR APP </UiLayout> */}
        </Routes>
      </BrowserRouter>
      {/* <UserProfile /> */}
    </ThemeProvider>
  )
}
export default App
