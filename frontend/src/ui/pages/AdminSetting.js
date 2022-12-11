import { useState } from "react";
import MyDetails from "../components/AdminSetting/MyDetails";
import Password from "../components/AdminSetting/Password";
import Integrations from "../components/AdminSetting/Integration";
import styled from "styled-components";
import { Title } from "../../styles/reusableElements.styled";

const AdminSetting = () => {
  const [activeNav, setActiveNav] = useState("My Details");

  const nav_heading = ["My Details", "Password", "Integrations"];

  const navClickHandler = (event) => {
    setActiveNav(event.target.textContent);
  };
  return (
    <>
      <Container>
        <Title
          $weight="700"
          $size="30px"
          $color=" #323130"
          style={{ marginBottom: "30px" }}
        >
          Settings
        </Title>
        <nav className="nav">
          <ul className="nav_list">
            {nav_heading.map((item) => (
              <li
                onClick={navClickHandler}
                key={item}
                className={`${activeNav === item ? "nav_active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        {activeNav === "My Details" && <MyDetails />}
        {activeNav === "Password" && <Password />}
        {activeNav === "Integrations" && <Integrations />}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .main_heading {
    font-weight: 700;
    font-size: 28px;
    line-height: 37px;
    color: #323130;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    overflow-x: auto;
    gap: 20px;
  }

  li {
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
    border-bottom: 3px solid #141ae9;
    color: #323130;
    align-self: center;
    animation: animate 1s;
    transition: ease-in-out;
  }

  @media screen and (max-width: 769px) {
    .nav_item {
      font-size: 14px;
    }
    .nav_active {
      font-size: 16px;
    }
  }
`;

export default AdminSetting;
