import React from "react"
import styled from "styled-components"
import Nav from "./Comps/Nav/Nav"
import Dashboard from "./Comps/Analysis/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Container = styled.div`
  min-width: 1240px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 250px;
    padding: 1rem;
  }
`
const Home = () => {
  return (
    <Container>
      {/* <BrowserRouter> */}
        <Nav />
      <Dashboard />
{/* 
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter> */}
    </Container>
  )
}

export default Home
