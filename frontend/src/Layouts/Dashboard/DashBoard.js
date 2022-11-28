import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Navigation = styled.div`
  background: #fff;
  width: 350px;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid #edebe9;

  header {
    padding: 1rem 3rem;
    display: flex;

    .logo {
      height: 50px;
      margin-bottom: 10rem;
    }

    .header-toggle {
      margin: 10px 0 0 5rem;
    }
  }

  @media screen and (max-width: 1250px) {
    position: fixed;
    z-index: 100;

    header {
      .logo {
        height: 40px;
      }
    }
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
  .active {
    color: #2667ff;
  }
  img {
    height: 30px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  .toggle {
    position: absolute;
    height: 55px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    z-index: 50;

    button {
      cursor: pointer;
    }
  }
`;

export const Header = styled.div`
  position: relative;
  height: 100px;
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
    margin-left: 3rem;
    font-size: 18px;
    border: 2px solid ${({ theme }) => theme.palette.border.default};
    border-radius: 8px;

    ::placeholder {
      font-family: inherit;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.border.hover};
    }

    @media screen and (max-width: 500px) {
      margin-left: 2rem;
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
  z-index: 100;
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
