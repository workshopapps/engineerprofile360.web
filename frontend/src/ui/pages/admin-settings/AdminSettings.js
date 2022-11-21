import MyDetails from "./components/MyDetails";
import classes from "./AdminSettings.module.css";
import { useState } from "react";
import Password from "./components/Password";
import Notifications from "./components/Notifcations";
import Teams from "./components/Teams";
import Integrations from "./components/Integration";
import API from "./components/API";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { MainContainer } from "../../../styles/reusableElements.styled";

const AdminSettings = () => {
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
      <Header />
      <MainContainer>
        <Sidebar />

        <main className={classes.main}>
          <h1 className={classes.main_heading}>Settings</h1>
          <nav className={classes.nav}>
            <ul className={classes.nav_list}>
              {nav_heading.map((item) => (
                <li
                  onClick={navClickHandler}
                  className={`${classes.nav_item} ${
                    activeNav === item ? classes.nav_active : ""
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
        </main>
      </MainContainer>
    </>
  );
};

export default AdminSettings;
