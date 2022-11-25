import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Navigation = styled.div`
  background: #fff;
  width: 350px;
  height: 100%;
  z-index: -10;
  overfloy-y: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  border-right: 1px solid #edebe9;

  img {
    height: 50px;
    margin-bottom: 10rem;
  }
`;

export const NavItems = styled.div`
  width: 100%;

  div {
    height: 60px;
    display: flex;
    padding: 5px 3rem;
    margin: 20px 0;

    p {
      margin-left: 10px;
    }
  }

  img {
    height: 30px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid #edebe9;

  input {
    width: 40%;
    font-family: inherit;
    height: 6vh;
    outline: none;
    padding-left: 10px;
    font-size: 18px;
    border: 2px solid ${({ theme }) => theme.palette.border.default};
    border-radius: 8px;

    ::placeholder {
      font-family: inherit;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.border.hover};
    }
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 232px;
  height: 48px;
  background: #faf9f8;
  opacity: 0.8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #323130;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 130px;
  height: 120px;
  background: #faf9f8;
  border-radius: 8px;
  right: 3%;
  top: 100%;
  z-index: 20;
  padding: 0 15px;

  a {
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;

    img {
      margin-right: 5px;
    }
  }
`;
