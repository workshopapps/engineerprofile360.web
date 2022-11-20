import React from "react"
import ScheduleDemo from "./components/ScheduleDemo"
import "./Demo.css"
import { Routes, Route } from "react-router-dom"
import Confirmed from "./components/Confirmed"

function Demo() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ScheduleDemo />} />
        <Route path="/confirm" element={<Confirmed />} />
      </Routes>
    </>
  )
}

export default Demo
