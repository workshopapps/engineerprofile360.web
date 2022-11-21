import styled from "styled-components"

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0 40px;
`

export const PartnersImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 0;
`
