import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../src/main/pages"
import Confirmed from "./main/compnents/demo-pages-components/components/Confirmed"
import ScheduleDemo from "./main/compnents/demo-pages-components/components/ScheduleDemo"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-page" element={<ScheduleDemo />} />
        <Route path="/confirm-demo" element={<Confirmed />} />
      </Routes>
    </div>
  )
}

export default App
