import React, { useState } from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import logo from "../../assets/icons/app/logo.svg";
import notif from "../../assets/icons/app/notification.svg";
import down from "../../assets/icons/arrow-down.svg";
import down_alt from "../../assets/icons/app/down.svg";
import right from "../../assets/icons/app/arrow-right.svg";
import icon from "../../assets/icons/app/search-alt.svg";
import sophie from "../../assets/images/sophie.svg";
import dots from "../../assets/icons/app/dots.svg";
import dashboard from "../../assets/icons/app/dashboard.svg";
import assessment from "../../assets/icons/app/assessment-active.svg";
import user from "../../assets/icons/app/user-alt.svg";
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
              right: "15px",
              top: "40px",
              background: "#FAF9F8",
              borderRadius: "8px",
              zIndex: "2",
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
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                zIndex: "2",
              }}
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
              <p className="" style={{ fontSize: "14px", fontWeight: "600" }}>
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
          <p className="">Dashboard</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={assessment} />
          <p className=" primary">Assessment</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={user} />
          <p className="">Employees</p>
        </Flex>
      </Flex>
    </div>
  );
};

const Nav = () => {
  return (
    <Flex spacing={8}>
      <p style={{ opacity: "0.3" }}>Dashboard</p>
      <img src={right} alt="" />
      <p style={{ opacity: "0.3" }}>Assessment</p>
      <img
        src={right}
        alt="
      "
      />
      <p style={{ opacity: "0.6" }}>Performance</p>
    </Flex>
  );
};

const Card = (props) => {
  return (
    <Flex
      style={{ padding: "70px", zIndex: "1" }}
      jc="center"
      ai="center"
      className="bg-primary-tint"
    >
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
      <GridItem span={4} className="">
        <Card text={"Test Takers"} num={98} />
      </GridItem>
      <GridItem span={4} className="">
        <Card text={"Courses"} num={12} />
      </GridItem>
      <GridItem span={4} className="">
        <Card text={"Total Assessment"} num={60} />
      </GridItem>
    </Grid>
  );
};

const Sort = () => {
  return (
    <Flex jc="space-between" style={{ padding: "12px" }} className="">
      <Flex
        jc="space-between"
        ai="center"
        className=""
        style={{
          width: "250px",
          padding: "8px",
          border: "1px solid #8A8886",
          borderRadius: "4px",
        }}
      >
        <p>Department</p>
        <img src={down_alt} alt="" />
      </Flex>
      <Flex
        jc="space-between"
        ai="center"
        className=""
        style={{
          width: "150px",
          padding: "8px",
          border: "1px solid #8A8886",
          borderRadius: "4px",
        }}
      >
        <p>Sort By Date</p>
        <img src={down_alt} alt="" />
      </Flex>
    </Flex>
  );
};

const Heading = () => {
  return (
    <Flex style={{ padding: "9px 12px" }} className=" bg-primary-tint">
      <Flex style={{ flexBasis: "10%" }} className="">
        <p>#</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="">
        <p>Staff name</p>
      </Flex>
      <Flex style={{ flexBasis: "20%" }} className="">
        <p>Department</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="">
        <p>Assessment</p>
      </Flex>
      <Flex style={{ flexBasis: "15%" }} className="">
        <p>Percentage</p>
      </Flex>
      <Flex style={{ flexBasis: "15%" }} className="">
        <p>Actions</p>
      </Flex>
    </Flex>
  );
};

const List = (props) => {
  return (
    <Flex className="" style={{ padding: "8px 9px" }}>
      <Flex style={{ flexBasis: "10%" }} className="" ai="center">
        <p>{props.num}</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="" ai="center" spacing={10}>
        <img src={sophie} alt=" " />
        <p className="">Sophie Dane</p>
      </Flex>
      <Flex style={{ flexBasis: "20%" }} className="" ai="center">
        <p>Software Engineer</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="" ai="center">
        <p>Intro to Software</p>
      </Flex>
      <Flex style={{ flexBasis: "15%" }} className="" ai="center">
        <p>85.9%</p>
      </Flex>
      <Flex style={{ flexBasis: "15%" }} className="" jc="space-between">
        <button
          style={{
            padding: "12px",
            background: "transparent",
            border: "2px solid #2667FF",
            borderRadius: "5px",
          }}
        >
          <p className="primary">View Results</p>
        </button>
        <img src={dots} alt="" />
      </Flex>
    </Flex>
  );
};

const PerformancePage = () => {
  return (
    <Flex
      stack
      style={{ padding: "24px", width: "100%" }}
      className=""
      spacing={24}
    >
      <Nav />
      <Summary />
      <h2>Overall Performance</h2>
      <Sort />
      <Heading />
      <Flex stack spacing={8}>
        <List num={"1."} />
        <List num={"2."} />
        <List num={"3."} />
        <List num={"4."} />
        <List num={"5."} />
        <List num={"6."} />
        <List num={"7."} />
        <List num={"8."} />
        <List num={"9."} />
        <List num={"10."} />
        <List num={"11."} />
        <List num={"12."} />
      </Flex>
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
