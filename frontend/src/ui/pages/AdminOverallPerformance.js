import React, { useState } from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import logo from "../../assets/icons/app/logo.svg";
import notif from "../../assets/icons/app/notification.svg";
import down from "../../assets/icons/arrow-down.svg";
import right from "../../assets/icons/app/arrow-right.svg";
import icon from "../../assets/icons/app/search-alt.svg";
import dashboard from "../../assets/icons/app/dashboard.svg";
import assessment from "../../assets/icons/app/assessment.svg";
import user from "../../assets/icons/app/user.svg";
import profile from "../../assets/icons/app/profile.svg";
import settings from "../../assets/icons/app/settings.svg";
import logout from "../../assets/icons/app/logout.svg";
import avatar from "../../assets/icons/app/avatar.svg";
import "../../styles/overallperformance.css";

const DropdownItem = (props) => {
  return (
    <li className="dropdownItem">
      <Flex spacing={20}>
        <img src={props.img} alt="" />
        <p className="regular ">{props.text}</p>
      </Flex>
    </li>
  );
};

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    return setOpen(!open);
  };

  return (
    <div>
      <div className="menu container">
        <div className="menu-trigger" onClick={handleDropdown}>
          <img src={down} />
        </div>
        {open && (
          <div
            className=""
            style={{
              position: "absolute",
              right: "65px",
              top: "90px",
              background: "#FAF9F8",
              //   opacity: "0.8",
              borderRadius: "8px",
            }}
          >
            <ul>
              <DropdownItem text={"Profile"} img={profile} />
              <DropdownItem text={"Settings"} img={settings} />
              <DropdownItem text={"Logout"} img={logout} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <Flex
      style={{ padding: "24px 56px", borderBottom: "2px solid #EDEBE9" }}
      spacing={84}
      className=""
    >
      <Grid
        span={12}
        style={{ width: "100%", alignItems: "center" }}
        className=""
      >
        <GridItem span={2}>
          <Flex ai="center" className="" style={{ height: "100%" }}>
            <img src={logo} alt="" />
          </Flex>
        </GridItem>
        <GridItem span={7}>
          <Flex style={{ flexBasis: "60%", position: "relative" }} className="">
            <span
              style={{ position: "absolute", bottom: "15px", left: "15px" }}
            >
              <img src={icon} alt="" />
            </span>
            <input
              style={{
                padding: "18px 18px 18px 50px",
                width: "100%",
                height: "auto",
                border: "2px solid #8A8886",
                borderRadius: "8px",
              }}
              placeholder="Search"
            />
          </Flex>
        </GridItem>
        <GridItem span={1} />
        <GridItem
          span={2}
          className=""
          style={{
            padding: "10px 26px",
            background: "#FAF9F8",
            opacity: "0.8",
            borderRadius: "8px",
            flexBasis: "30%",
          }}
        >
          <Flex spacing={12} ai="center">
            <div style={{ flexBasis: "10%" }}>
              <img src={avatar} />
            </div>
            <Flex style={{ flexBasis: "70%" }} jc="center">
              <p
                className="semibold"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                Mark Jilaga
              </p>
            </Flex>

            <div
              style={{
                width: "2px",
                height: "24px",
                borderRadius: "2px",
                background: "#EDEBE9",
              }}
            ></div>
            <Flex spacing={10} style={{ width: "100%" }}>
              <img src={notif} />
              <DropDown />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <div style={{ flexBasis: "10%", padding: "44px" }}>
      <Flex stack spacing={52}>
        <Flex spacing={18} ai="center">
          <img src={dashboard} />
          <p className="semibold">Dashboard</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={assessment} />
          <p className="semibold primary">Assessment</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={user} />
          <p className="semibold">Employees</p>
        </Flex>
      </Flex>
    </div>
  );
};

const Nav = () => {
  return (
    <Flex spacing={8}>
      <p>Dashboard</p>
      <img src={right} alt="" />
      <p>Assessment</p>
      <img
        src={right}
        alt="
      "
      />
      <p>Performance</p>
    </Flex>
  );
};

const Card = (props) => {
  return (
    <Flex style={{ padding: "80px" }} jc="center" ai="center">
      <Flex stack spacing={16} style={{ textAlign: "center" }}>
        <p>{props.text}</p>
        <h1>{props.num}</h1>
      </Flex>
    </Flex>
  );
};

const Summary = () => {
  return (
    <Grid span={12} style={{ width: "100%" }}>
      <GridItem span={4} className="bordered">
        <Card text={"Test Takers"} num={98} />
      </GridItem>
      <GridItem span={4} className="bordered">
        <Card />
      </GridItem>
      <GridItem span={4} className="bordered">
        <Card />
      </GridItem>
    </Grid>
  );
};

const PerformancePage = () => {
  return (
    <Flex
      stack
      style={{ padding: "24px", width: "100%" }}
      className="bordered"
      spacing={24}
    >
      <Nav />
      <Summary />
    </Flex>
  );
};

const AdminOverallPerformance = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Sidebar />
        <PerformancePage />
      </Flex>
    </div>
  );
};

export default AdminOverallPerformance;
