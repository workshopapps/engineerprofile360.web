import React from "react";
import Flex from "../components/layout/Flex";
import logo from "../../assets/icons/skript-logo.svg";
import notif from "../../assets/icons/notification.svg";
import down from "../../assets/icons/arrow-down.svg";
import icon from "../../assets/icons/search-alt.svg";
import dashboard from "../../assets/icons/dashboard-logo.svg";
import assessment from "../../assets/icons/assessment.svg";
import user from "../../assets/icons/profile-2user.svg";
import dropdown from "../../assets/icons/dropdown.svg";
import profile from "../../assets/icons/profile.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";
import dots from "../../assets/icons/dots.svg";
import avatar from "../../assets/images/avatar.svg";
import "../../styles/assessment.css";
import Grid, { GridItem } from "../components/layout/Grid";
import { useState } from "react";

const options = [
  { value: "short answer", label: "Short Answer" },
  { value: "paragraph", label: "Paragraph" },
  { value: "essay", label: "Essay" },
];

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

const Question = () => {
  return (
    <div
      className="bg-white"
      style={{ padding: "18px 24px", borderRadius: "12px" }}
    >
      <form>
        <Flex stack spacing={24}>
          <Flex stack spacing={8}>
            <label>
              <p className="text-color form-text">Question 1</p>
            </label>
            <div
              style={{
                padding: "16px 16px",
                border: "1px solid #EDEBE9",
                borderRadius: "4px",
              }}
              className="bg-primary-tint"
            >
              <p className="text-color form-text ">
                This is an example question from the super admin
              </p>
            </div>
          </Flex>
          <Flex stack spacing={8}>
            <p className="text-color form-text">Answer Type</p>
            <Grid span={12}>
              <GridItem span={8} className="">
                <Flex>
                  <input
                    className="bg-primary-tint"
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: "20px",
                      border: "1px solid #EDEBE9",
                      borderRadius: "4px",
                    }}
                    placeholder="Example of short answer"
                  />
                </Flex>
              </GridItem>
              <GridItem span={3} className="">
                <Flex
                  jc="space-between"
                  ai="center"
                  style={{
                    height: "100%",
                    padding: "0px 16px 0px 16px",
                    border: "1px solid #EDEBE9",
                    borderRadius: "4px",
                  }}
                >
                  <p className="text-color">Short answer</p>
                  <img src={dropdown} alt="" />
                </Flex>
              </GridItem>
              <GridItem span={1} className="">
                <Flex jc="flex-end" style={{ height: "100%" }} ai="center">
                  <img src={dots} alt="" height="21px" />
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </form>
    </div>
  );
};

const AssessmentForm = () => {
  return (
    <Flex style={{ padding: "22px 158px" }}>
      <Flex
        className="bg-primary-tint"
        stack
        spacing={24}
        style={{
          width: "100%",
          border: "1px dotted #C7E0F4",
          borderRadius: "16px",
          paddingBottom: "40px",
        }}
      >
        <Flex>
          <Flex
            style={{
              paddingTop: "24px",
              paddingBottom: "24px",
              flexBasis: "50%",
              border: "1px solid #2667FF",
            }}
            className=""
            jc="center"
          >
            <p className="semibold ">Upload CSV file</p>
          </Flex>
          <Flex
            style={{
              paddingTop: "24px",
              paddingBottom: "24px",
              flexBasis: "50%",
              border: "1px solid #2667FF",
            }}
            className=" bg-primary"
            jc="center"
          >
            <p className="white semibold">Create assessment manually </p>
          </Flex>
        </Flex>
        <Flex stack style={{ padding: "24px" }} className="" spacing={34}>
          <p className="text-color-alt form-head" style={{}}>
            Input assessment and select response type below:
          </p>
          <Flex stack spacing={24}>
            <Question />
            <Question />
            <Question />
          </Flex>
        </Flex>
        <Flex ai="center" jc="center" spacing={50}>
          <button
            style={{
              padding: "19px 42px",
              border: "1px solid #2667FF",
              borderRadius: "4px",
            }}
            className="bg-white"
          >
            <p className="primary">Cancel</p>
          </button>

          <button
            style={{
              padding: "19px 42px",
              borderRadius: "4px",
              border: "none",
            }}
            className="bg-primary"
          >
            <p className="white">Submit</p>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const AssessmentPage = () => {
  return (
    <Flex stack style={{ width: "100%" }} className="">
      <AssessmentForm />
    </Flex>
  );
};

const CreateAssessmentManually = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Sidebar />
        <AssessmentPage />
      </Flex>
    </div>
  );
};

export default CreateAssessmentManually;
