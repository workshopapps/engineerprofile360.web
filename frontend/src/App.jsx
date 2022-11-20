import React from "react"
import Home from "./pages"

import Contact from "./Main/pages/Contact"
// import Header from "./ui/components/Header"
// import { Divider, Main, MainContainer } from "./styles/reusableElements.styled"
// import Sidebar from "./ui/components/Sidebar"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <h1>Hello, World!</h1>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
