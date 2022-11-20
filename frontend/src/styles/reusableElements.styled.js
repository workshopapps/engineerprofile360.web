import styled from "styled-components"

// THE STYLES HERE ARE GOING TO BE USED FOR LAYOUTS AND EVERY OTHER REUSABLE CONTAINERS

export const MainContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 58px minmax(0, 1fr);
  position: relative;
`
export const Main = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  height: 100vh;
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 3px;
  background: ${({ theme }) => theme.palette.divider};
`
