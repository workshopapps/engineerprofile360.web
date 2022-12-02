import React, { useState } from "react";

import { Link } from "react-router-dom";

import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import sophie from "../../assets/images/sophie.svg";
import chart from "../../assets/images/app/chart.svg";
import dots from "../../assets/icons/app/dots-alt.svg";
import plus from "../../assets/icons/app/plus.svg";
import "../../styles/assessmentfirstpage.css";
import PageInfo from "../components/molecules/PageInfo";

const Heading = () => {
  return (
    <Flex jc="space-between" className="" ai="center">
      <h2 className="headingtext">Assessments</h2>
      <div className="button-container">
        <Link
          to="/assessment/create-assessment"
          className="bg-primary create-button"
        >
          <Flex spacing={10} ai="center">
            <img src={plus} alt="" />
            <div className="hide">
              <p className="white">Create New Assessment</p>
            </div>
          </Flex>
        </Link>
        <Link
          to="/assessment/view-assessment"
          style={{
            border: "2px solid #2667FF",
          }}
          className="bg-white create-button"
        >
          <p className="primary semibold-alt hide">View Assessments</p>
          <p className="primary semibold-alt show">View </p>
        </Link>
      </div>
    </Flex>
  );
};

const Card = (props) => {
  return (
    <Flex
      style={{
        padding: "70px",
        height: "160px",
        border: "1px solid #C7E0F4",
        borderRadius: "5px",
      }}
      jc="center"
      ai="center"
      className="bg-primary-tint bordered"
    >
      <Flex stack spacing={16} style={{ textAlign: "center" }}>
        <p style={{ whiteSpace: "nowrap" }} className="cardtext">
          {props.text}
        </p>
        <h1 style={{ color: "#323130" }} className="numtext">
          {props.num}
        </h1>
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
    <Flex stack spacing={14} className="" style={{ width: "100%" }}>
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
        }}
        className="chart-padding"
      >
        <img src={chart} alt="" />
      </div>
    </Flex>
  );
};

const Assessments = () => {
  return (
    <Flex stack style={{ width: "100%" }} spacing={58}>
      <Heading />
      <Grid span={12} className>
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
      <Grid
        span={12}
        gap="60px"
        className=""
        style={{ maxWidth: "100%", overflow: "scroll" }}
      >
        <GridItem span={6} md={12}>
          <TopStaff />
        </GridItem>
        <GridItem span={6} md={12} className="" style={{ width: "100%" }}>
          <TopPerformance />
        </GridItem>
      </Grid>
    </Flex>
  );
};

const AssessmentFirstPage = () => {
  return (
    <div>
      <PageInfo breadcrumb={["Dashboard", "Performance"]} />
      <Assessments />
    </div>
  );
};

export default AssessmentFirstPage;
