// import React from "react";

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
import chart from "../../assets/images/app/chart.svg";
import dots from "../../assets/icons/app/dots-alt.svg";
import dashboard from "../../assets/icons/app/dashboard.svg";
import assessment from "../../assets/icons/app/assessment-active.svg";
import user from "../../assets/icons/app/user-alt.svg";
import profile from "../../assets/icons/app/profile.svg";
import settings from "../../assets/icons/app/settings.svg";
import logout from "../../assets/icons/app/logout.svg";
import avatar from "../../assets/icons/app/avatar.svg";
import plus from "../../assets/icons/app/plus.svg";
import "../../styles/assessmentfirstpage.css";

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
      style={{
        padding: "24px 24px 24px 56px",
        borderBottom: "2px solid #EDEBE9",
      }}
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
    <div style={{ flexBasis: "10%", padding: "29px 24px" }}>
      <Flex stack spacing={24}>
        <Flex spacing={18} ai="center" style={{ padding: "16px 20px" }}>
          <img src={dashboard} />
          <p className="semibold-alt">Dashboard</p>
        </Flex>
        <Flex
          spacing={18}
          ai="center"
          className="bg-primary-tint"
          style={{ padding: "16px 20px", borderRadius: "4px" }}
        >
          <img src={assessment} />
          <p className=" primary semibold-alt">Assessment</p>
        </Flex>

        <Flex spacing={18} ai="center" style={{ padding: "16px 20px" }}>
          <img src={user} />
          <p className="semibold-alt">Employees</p>
        </Flex>
      </Flex>
    </div>
  );
};

const Heading = () => {
  return (
    <Flex jc="space-between" className="" ai="center">
      <h2>Assessments</h2>
      <Flex spacing={30}>
        <button
          style={{ padding: "12px 20px", borderRadius: "4px", border: "none" }}
          className="bg-primary"
        >
          <Flex spacing={10} ai="center">
            <img src={plus} alt="" />
            <p className="white">Create New Assessment</p>
          </Flex>
        </button>
        <button
          style={{
            padding: "12px 20px",
            border: "2px solid #2667FF",
            borderRadius: "4px",
          }}
          className="bg-white"
        >
          <p className="primary semibold-alt">View Assessments</p>
        </button>
      </Flex>
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
        <h1 style={{ color: "#323130" }}>{props.num}</h1>
      </Flex>
    </Flex>
  );
};

const Staff = () => {
  return (
    <Flex
      style={{
        padding: "16px 16px 16px 0px",
        borderBottom: "1px solid #C8C6C4",
      }}
      className=""
      ai="center"
    >
      <Flex ai="center" style={{ flexBasis: "12%" }} className="">
        <p>1.</p>
      </Flex>
      <Flex ai="center" style={{ flexBasis: "30%" }} className="">
        <Flex spacing={10} ai="center">
          <img src={sophie} alt="" />
          <p className="semibold">Sophi...</p>
        </Flex>
      </Flex>
      <Flex ai="center" style={{ flexBasis: "40%" }} className="">
        <p>Software Engineer</p>
      </Flex>
      <Flex
        ai="center"
        style={{ flexBasis: "18%" }}
        className=""
        jc="space-between"
      >
        <p style={{ color: "#323130" }}>103</p>
        <img src={dots} alt="" />
      </Flex>
    </Flex>
  );
};

const TopStaff = () => {
  return (
    <Flex stack spacing={14}>
      <Flex jc="space-between" ai="flex-end">
        <Flex ai="center">
          <p className="light">Top Staff</p>
        </Flex>

        <Flex style={{ borderBottom: "2px solid #2667FF" }}>
          <p className="primary semibold">View All</p>
        </Flex>
      </Flex>
      <Flex style={{ padding: "9px 12px" }}>
        <Flex ai="center" style={{ flexBasis: "10%" }} className="">
          <p className="semibold-alt">#</p>
        </Flex>
        <Flex ai="center" style={{ flexBasis: "30%" }} className="">
          <p className="semibold-alt">Staff name</p>
        </Flex>
        <Flex ai="center" style={{ flexBasis: "40%" }} className="">
          <p className="semibold-alt">Department</p>
        </Flex>
        <Flex ai="center" style={{ flexBasis: "20%" }} className="">
          <p className="semibold-alt">Points</p>
        </Flex>
      </Flex>
      <Flex stack spacing={4}>
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
      </Flex>
    </Flex>
  );
};

const TopPerformance = () => {
  return (
    <Flex stack spacing={33}>
      <Flex jc="space-between" ai="flex-end">
        <Flex ai="center">
          <p className="light">Top Performance</p>
        </Flex>

        <Flex style={{ borderBottom: "2px solid #2667FF" }}>
          <p className="primary semibold">View All</p>
        </Flex>
      </Flex>
      <div
        style={{
          border: "2px solid #F8FBFD",
          borderRadius: " 8px",
          padding: "60px 49px 56px 91px",
        }}
      >
        <img src={chart} alt="" />
      </div>
    </Flex>
  );
};

const Assessments = () => {
  return (
    <Flex stack style={{ padding: "28px 22px", width: "100%" }} spacing={58}>
      <Heading />
      <Grid span={12}>
        <GridItem span={4} md={12}>
          <Card text={"Available for Assessment"} num={"98"} />
        </GridItem>
        <GridItem span={4} md={12}>
          <Card text={"Completed Assessment"} num={"12"} />
        </GridItem>
        <GridItem span={4} md={12}>
          <Card text={"Assessment Results"} num={"60"} />
        </GridItem>
      </Grid>
      <Grid span={12} gap="60px">
        <GridItem span={6} md={12} className="">
          <TopStaff />
        </GridItem>
        <GridItem span={6} md={12} className="">
          <Flex jc="center">
            <TopPerformance />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const AssessmentFirstPage = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Sidebar />
        <Assessments />
      </Flex>
    </div>
  );
};

export default AssessmentFirstPage;
