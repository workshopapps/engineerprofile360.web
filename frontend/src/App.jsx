import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../src/main/pages"
import ScheduleDemo from "./main/compnents/demo-pages-components/components/ScheduleDemo"
import Confirmed from "./main/compnents/demo-pages-components/components/ScheduleDemo"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<ScheduleDemo />} />
      <Route path="/confirm-demo" element={<Confirmed />} />
    </Routes>
  )
}

export default App
