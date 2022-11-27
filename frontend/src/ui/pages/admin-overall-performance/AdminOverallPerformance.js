import React from "react";
import Flex from "../../components/layout/Flex";
import Grid, { GridItem } from "../../components/layout/Grid";
import down_alt from "../../../assets/icons/app/down.svg";
import right from "../../../assets/icons/app/arrow-right.svg";
import sophie from "../../../assets/images/sophie.svg";
import dots from "../../../assets/icons/app/dots.svg";
import "./overallperformance.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";

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
      style={{ padding: "70px" }}
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
    <Flex jc="space-between" style={{ padding: "12px" }}>
      <Flex
        jc="space-between"
        ai="center"
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
            <Button $variant="outlined" $color="#2667FF">
              View Result
            </Button>
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

            <Button $variant="outlined" $color="#2667FF">
              View
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

const PerformancePage = () => {
  return (
    <Container>
      <Flex stack style={{ paddingTop: "80px" }} spacing={24}>
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
    </Container>
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
