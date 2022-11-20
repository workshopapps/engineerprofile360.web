<<<<<<< HEAD

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


=======
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// import "../src/styles/Global.module.css"
import App from "./App"
>>>>>>> dev

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
