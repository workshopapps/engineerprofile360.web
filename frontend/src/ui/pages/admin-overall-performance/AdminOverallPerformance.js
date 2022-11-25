import React, { useState } from "react";
import Flex from "../../components/layout/Flex";
import Grid, { GridItem } from "../../components/layout/Grid";
import logo from "../../../assets/icons/app/logo.svg";
import notif from "../../../assets/icons/app/notification.svg";
import down from "../../../assets/icons/arrow-down.svg";
import down_alt from "../../../assets/icons/app/down.svg";
import right from "../../../assets/icons/app/arrow-right.svg";
import icon from "../../../assets/icons/app/search-alt.svg";
import sophie from "../../../assets/images/sophie.svg";
import dots from "../../../assets/icons/app/dots.svg";
import dashboard from "../../../assets/icons/app/dashboard.svg";
import assessment from "../../../assets/icons/app/assessment-active.svg";
import user from "../../../assets/icons/app/user-alt.svg";
import profile from "../../../assets/icons/app/profile.svg";
import settings from "../../../assets/icons/app/settings.svg";
import logout from "../../../assets/icons/app/logout.svg";
import avatar from "../../../assets/icons/app/avatar.svg";
import "./overallperformance.css";

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

const HeaderMobile = () => {
  return (
    <div className="show">
      <Flex jc="space-between" style={{ padding: "16px" }}>
        <img src={logo} alt="" />
        <img src={dots} />
      </Flex>
    </div>
  );
};

const Header = () => {
  return (
    <div className="hide">
      <Flex
        className=""
        style={{ padding: "24px 24px 24px 56px", width: "100%" }}
      >
        <Grid span={12} style={{ width: "100%" }} gap="5px">
          <GridItem span={2} className="">
            <Flex style={{ height: "100%" }} ai="center">
              <img src={logo} alt="" />
            </Flex>
          </GridItem>
          <GridItem span={7} className="">
            <Flex style={{ position: "relative" }} className="">
              <span
                style={{
                  position: "absolute",
                  bottom: "23px",
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
          <GridItem span={3} className="">
            <Flex ai="center" style={{ height: "100%" }}>
              <Flex
                className=""
                style={{
                  width: "100%",
                }}
                jc="space-between"
              >
                <div />
                <Flex
                  style={{
                    background: "#FAF9F8",
                    opacity: "0.8",
                    borderRadius: "8px",
                    padding: "10px 26px",
                  }}
                  className=""
                  spacing={8}
                  ai="center"
                >
                  <img src={avatar} />
                  <Flex ai="center">
                    <p className="profiletext">Mark Jilaga</p>
                  </Flex>
                  <Flex ai="center">
                    <div
                      style={{
                        height: "24px",
                        width: "2px",
                        background: "#EDEBE9",
                        borderRadius: "2px",
                      }}
                    />
                  </Flex>
                  <img src={notif} />
                  <img src={down} />
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ flexBasis: "10%", padding: "44px" }} className="hide">
      <Flex stack spacing={52}>
        <Flex spacing={18} ai="center">
          <img src={dashboard} />
          <p className=" sidebar-text">Dashboard</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={assessment} />
          <p className="primary sidebar-text">Assessments</p>
        </Flex>
        <Flex spacing={18} ai="center">
          <img src={user} />
          <p className=" sidebar-text">Employees</p>
        </Flex>
      </Flex>
    </div>
  );
};

const Nav = () => {
  return (
    <Flex spacing={8}>
      <p style={{ opacity: "0.3" }} className="map-text">
        Dashboard
      </p>
      <img src={right} alt="" />
      <p style={{ opacity: "0.3" }} className="map-text">
        Assessment
      </p>
      <img
        src={right}
        alt="
      "
      />
      <p style={{ opacity: "0.6" }} className="map-text">
        Performance
      </p>
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
        <p className="card-title-text">{props.text}</p>
        <p className="card-num-text">{props.num}</p>
      </Flex>
    </Flex>
  );
};

const Summary = () => {
  return (
    <Grid span={12} style={{ width: "100%" }}>
      <GridItem span={4} md={12} className="">
        <Card text={"Test Takers"} num={98} />
      </GridItem>
      <GridItem span={4} md={12} className="">
        <Card text={"Courses"} num={12} />
      </GridItem>
      <GridItem span={4} md={12} className="">
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
          padding: "8px 16px 8px 8px",
          border: "1px solid #8A8886",
          borderRadius: "4px",
        }}
      >
        <p className="sorttext">Department</p>
        <img src={down_alt} alt="" />
      </Flex>
      <Flex
        jc="space-between"
        ai="center"
        className=""
        style={{
          width: "150px",
          padding: "8px 16px 8px 8px",
          border: "1px solid #8A8886",
          borderRadius: "4px",
        }}
      >
        <p className="sorttext">Sort By Date</p>
        <img src={down_alt} alt="" />
      </Flex>
    </Flex>
  );
};

const Heading = () => {
  return (
    <div>
      <div className="hide">
        <Flex style={{ padding: "9px 12px" }} className=" bg-primary-tint">
          <Flex style={{ flexBasis: "10%" }} className="">
            <p className="headingtext">#</p>
          </Flex>
          <Flex style={{ flexBasis: "25%" }} className="">
            <p className="headingtext">Staff name</p>
          </Flex>
          <Flex style={{ flexBasis: "20%" }} className="">
            <p className="headingtext">Department</p>
          </Flex>
          <Flex style={{ flexBasis: "25%" }} className="">
            <p className="headingtext">Assessment</p>
          </Flex>
          <Flex style={{ flexBasis: "15%" }} className="">
            <p className="headingtext">Percentage</p>
          </Flex>
          <Flex style={{ flexBasis: "15%" }} className="">
            <p className="headingtext">Actions</p>
          </Flex>
        </Flex>
      </div>
      <div className="show">
        <Flex
          style={{ padding: "9px 0px" }}
          className=" bg-primary-tint"
          spacing={20}
        >
          <p className="headingtext">#</p>
          <Flex jc="space-between" style={{ width: "100%" }}>
            <p className="headingtext">Staff Name</p>
            <p className="headingtext">Details</p>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

const List = (props) => {
  return (
    <div>
      <div className="hide">
        <Flex className="" style={{ padding: "8px 9px" }}>
          <Flex style={{ flexBasis: "10%" }} className="" ai="center">
            <p className="depttext">{props.num}</p>
          </Flex>
          <Flex
            style={{ flexBasis: "25%" }}
            className=""
            ai="center"
            spacing={10}
          >
            <img src={sophie} alt=" " />
            <p className="stafftext">Sophie Dane</p>
          </Flex>
          <Flex style={{ flexBasis: "20%" }} className="" ai="center">
            <p className="depttext">Software Engineer</p>
          </Flex>
          <Flex style={{ flexBasis: "25%" }} className="" ai="center">
            <p className="depttext">Intro to Software</p>
          </Flex>
          <Flex style={{ flexBasis: "15%" }} className="" ai="center">
            <p className="depttext">85.9%</p>
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
              <p className="primary buttontxt hide">View Results</p>
              <p className="primary buttontxt show">View </p>
            </button>
            <img src={dots} alt="" />
          </Flex>
        </Flex>
      </div>
      <div className="show">
        <Flex className="" spacing={20}>
          <Flex ai="center">
            <p className="depttext">{props.num}</p>
          </Flex>

          <Flex jc="space-between" style={{ width: "100%" }}>
            <Flex spacing={20} ai="center">
              <img src={sophie} />
              <p style={{ whiteSpace: "nowrap" }} className="stafftext">
                Sophie ...
              </p>
            </Flex>

            <button
              style={{
                padding: "12px",
                background: "transparent",
                border: "2px solid #2667FF",
                borderRadius: "5px",
              }}
            >
              <p className="primary buttontxt hide">View Results</p>
              <p className="primary buttontxt show">View </p>
            </button>
          </Flex>
        </Flex>
      </div>
    </div>
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
      <p className="overalltext">Overall Performance</p>
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
      </Flex>
    </Flex>
  );
};

const AdminOverallPerformance = () => {
  return (
    <div>
      <HeaderMobile />
      <Header />
      <Flex>
        <Sidebar />
        <PerformancePage />
      </Flex>
    </div>
  );
};

export default AdminOverallPerformance;
