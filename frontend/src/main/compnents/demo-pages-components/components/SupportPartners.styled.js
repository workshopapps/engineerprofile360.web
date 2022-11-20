import styled from "styled-components"

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0 40px;
`

export const PartnersImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 0;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 764px) {
    display: flex;
    align-items: center;

    justify-content: center;
    flex-direction: row;

    margin-top: 0;
  } ;
`
