import React from "react"
import ScheduleDemo from "./components/ScheduleDemo"
import "./Demo.css"
import { Routes, Route } from "react-router-dom"
import Confirmed from "./components/Confirmed"

function Demo() {
  return (
    <>
      <Routes>
        <Route path="/demo" element={<ScheduleDemo />} />
        <Route path="/confirm-demo" element={<Confirmed />} />
      </Routes>
    </>
  )
}

export default Demo
