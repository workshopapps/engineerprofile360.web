import React from "react"
import Home from "../src/main/pages"
import CreateAssessmentManually from "./ui/pages/CreateAssessmentManually"
import "../src/styles/Global.module.css"
import UserSupport from "./ui/pages/UserSupport"

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      {/* <UserSupport /> */}
      <CreateAssessmentManually />
    </div>
  )
}

export default App
