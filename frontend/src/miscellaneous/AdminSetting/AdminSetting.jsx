import MyDetails from "./components/MyDetails";
import { useState } from "react";
import Password from "./components/Password";
import Notifications from "./components/Notifcations";
import Teams from "./components/Teams";
import Integrations from "./components/Integration";
import API from "./components/API";
// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
import { MainContainer } from "../../styles/reusableElements.styled";
import styled from "styled-components";

const AdminSetting = () => {
  const [activeNav, setActiveNav] = useState("My Details");

  const nav_heading = [
    "My Details",
    "Password",
    "Notifications",
    "Teams",
    "Integrations",
    "API",
  ];

  const navClickHandler = (event) => {
    setActiveNav(event.target.textContent);
  };
  return (
    <>
      {/* <Header /> */}
      <MainContainer>
        {/* <Sidebar /> */}

        <Main>
          <h1 className="main_heading">Settings</h1>
          <nav className="nav">
            <ul className="nav_list">
              {nav_heading.map((item) => (
                <li
                  onClick={navClickHandler}
                  key={item}
                  className={`nav_item ${
                    activeNav === item ? "nav_active" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          {activeNav === "My Details" && <MyDetails />}
          {activeNav === "Password" && <Password />}
          {activeNav === "Notifications" && <Notifications />}
          {activeNav === "Teams" && <Teams />}
          {activeNav === "Integrations" && <Integrations />}
          {activeNav === "API" && <API />}
        </Main>
      </MainContainer>
    </>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px 1fr;
  row-gap: 24px;
  padding: 50px 24px;

  .main_heading {
    font-weight: 700;
    font-size: 28px;
    line-height: 37px;
    color: #323130;
  }

  .nav_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }

  .nav_item {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #a19f9d;
    width: fit-content;
    cursor: pointer;
    transition: ease-in-out;
  }

  @keyframes animate {
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .nav_active {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    padding-bottom: 3px;
    border-bottom: 5px solid #141ae9;
    color: #323130;
    align-self: center;
    animation: animate 1s;
    transition: ease-in-out;
  }

  @media screen and (max-width: 769px) {
    .nav_list {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .nav_item {
      font-size: 14px;
    }
    .nav_active {
      font-size: 16px;
    }
  }
`;

export default AdminSetting;
