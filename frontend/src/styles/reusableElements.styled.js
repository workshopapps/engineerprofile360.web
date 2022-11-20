import styled from "styled-components"

// THE STYLES HERE ARE GOING TO BE USED FOR LAYOUTS AND EVERY OTHER REUSABLE CONTAINERS

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  height: 100vh;
  overflow: hidden;
`

export const Divider = styled.div`
  width: 85%;
  height: 2px;
  margin-top: 96px;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.palette.divider};
`
