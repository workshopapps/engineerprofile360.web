import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import addCircle from "../../../../assets/icons/app/add-circle.svg";
import down from "../../../../assets/icons/app/arrow-down.svg";
import dashboard from "../../../../assets/icons/app/dashboard.svg";
import hamburger from "../../../../assets/icons/app/hamburger.svg";
import { Link } from "react-router-dom";
import PageInfo from "../../molecules/PageInfo";
import Flex from "../../layout/Flex";
import { Button, Loader } from "../../../../styles/reusableElements.styled";
import axios from "../../../../api/axios";
import useAuth from "../../../../hooks/useAuth";

const DataContext = createContext(null);

const info = [
  {
    id: "1",
    dept: "HNG Tutorials",
    course: "Zuri 101",
    duration: "30 mins",
    date: "25 Apr 2020",
  },
  {
    id: "2",
    dept: "Basics of software engineering",
    course: "PHP 252",
    duration: "30 mins",
    date: "24 Jan 2022",
  },
  {
    id: "3",
    dept: "Introduction to cybersecurity",
    course: "CYB 110",
    duration: "30 mins",
    date: "23 Apr 2021",
  },
  {
    id: "4",
    dept: "Principles of software engineering",
    course: "Laravel 540",
    duration: "30 mins",
    date: "22 Mar 2022",
  },
  {
    id: "5",
    dept: "General Engineering assessment",
    course: "Engineer 101",
    duration: "30 mins",
    date: "21 Feb 2022",
  },
  {
    id: "6",
    dept: "Introduction to Django Framework",
    course: "Framework 505",
    duration: "30 mins",
    date: "20 Dec 2022",
  },
  {
    id: "7",
    dept: "HTML, CSS and Javascript",
    course: "FE 360",
    duration: "30 mins",
    date: "19 Aug 2022",
  },
  {
    id: "8",
    dept: "General Software Engineering Work",
    course: "GST 210",
    duration: "30 mins",
    date: "18 Oct 2022",
  },
];

const Sort = () => {
  const { assessmentInfo, setAssessmentInfo, order, setOrder } =
    useContext(DataContext);
  const sorting = () => {
    if (order === "asc") {
      const sorted = [...assessmentInfo].sort((a, b) =>
        a.dept.toLowerCase() > b.dept.toLowerCase() ? 1 : -1
      );
      setAssessmentInfo(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...assessmentInfo].sort((a, b) =>
        a.dept.toLowerCase() < b.dept.toLowerCase() ? 1 : -1
      );
      setAssessmentInfo(sorted);
      setOrder("asc");
    }
  };

  const dateSort = () => {
    if (order === "asc") {
      const sortedDate = [...assessmentInfo].sort((a, b) =>
        new Date(b.date) > new Date(a.date) ? 1 : -1
      );
      setAssessmentInfo(sortedDate);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sortedDate = [...assessmentInfo].sort((a, b) =>
        new Date(b.date) < new Date(a.date) ? 1 : -1
      );
      setAssessmentInfo(sortedDate);
      setOrder("asc");
    }
  };
  return (
    <SortContainer>
      <Flex
        spacing={10}
        style={{
          border: "1px solid #8A8886",
          padding: "8px",
          borderRadius: "4px",
        }}
        ai="center"
        onClick={() => sorting()}
      >
        <select>
          <option>
            <Text>Assessment Type</Text>
          </option>
        </select>
      </Flex>
      <Flex ai="center" spacing={30}>
        <Flex
          style={{
            border: "1px solid #8A8886",
            padding: "8px",
            borderRadius: "4px",
          }}
          ai="center"
          onClick={() => dateSort()}
        >
          <select>
            <option>
              <Text>Sort By Date</Text>
            </option>
          </select>
        </Flex>
        <Hide>
          <Flex spacing={10}>
            <img src={dashboard} alt="" />
            <img src={hamburger} alt="" />
          </Flex>
        </Hide>
      </Flex>
    </SortContainer>
  );
};

const List = () => {
  const { completed, setCompleted, isLoading, setIsLoading } =
    useContext(DataContext);

  const { auth, setAuth } = useAuth();

  const fetchCompleted = () => {
    return axios(`/user-assessment/org/${auth.id}/org-completed`);
  };
  useEffect(() => {
    fetchCompleted()
      .then(({ data }) => {
        setCompleted(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const renderContent = () => {
    if (isLoading) {
      return (
        <Flex jc="center">
          <Loader />
        </Flex>
      );
    } else if (completed.data.length === 0) {
      return (
        <Text>
          Oops this user has no completed assessments, come back later
        </Text>
      );
    }
    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th colSpan="2">Department</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Deadline</th>
            <th>{""}</th>
          </tr>
          {[completed.data].map((d, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td colSpan="2">{d.dept}</td>
                <td>{d.course}</td>
                <td>{d.duration}</td>
                <td>{d.date}</td>
                <td>
                  <Button $variant="outlined" $color="#2667ff">
                    Take Test
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return <AssessmentListings>{renderContent()}</AssessmentListings>;
};

const TableSection = () => {
  return (
    <Flex stack spacing={16}>
      <Sort />
      <List />
    </Flex>
  );
};

const Assessment = () => {
  return (
    <Flex stack spacing={70}>
      <Flex
        style={{
          paddingBottom: "10px",
          paddingTop: "20px",
          borderBottom: "1px solid #8A8886",
        }}
        jc="space-between"
      >
        <Flex spacing={24} ai="flex-end">
          <Link to="/user-assessment-list">
            <Text>Available (0)</Text>
          </Link>
          <Link to="/user-assessment-list/completed">
            <Text $color="#2667FF" $weight="600">
              Completed (0)
            </Text>
          </Link>
        </Flex>
      </Flex>

      <TableSection />
    </Flex>
  );
};

const CompletedUserAssessments = () => {
  const [assessmentInfo, setAssessmentInfo] = useState(info);
  const [order, setOrder] = useState("asc");
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <DataContext.Provider
        value={{
          assessmentInfo,
          setAssessmentInfo,
          order,
          setOrder,
          completed,
          setCompleted,
          isLoading,
          setIsLoading,
        }}
      >
        <PageInfo breadcrumb={["Assessments", "Assessment List"]} />
        <Assessment />
      </DataContext.Provider>
    </div>
  );
};

export default CompletedUserAssessments;

const AssessmentListings = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
  table {
    table-layout: fixed;
    width: 100%;
    min-width: 960px;
    overflow: auto;

    tr:first-of-type {
      width: 100%;
      background: #f8fbfd;

      th:first-of-type {
        padding-right: 24px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
      }
    }

    td {
      color: #605e5c;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      white-space: nowrap;
    }
  }
`;

const Text = styled.p`
  white-space: nowrap;
  color: ${({ $color }) => ($color ? $color : "initial")};
  font-size: ${({ $size }) => ($size ? $size : "14px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "20px")};
`;

const Hide = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
const Show = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  } ;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  @media screen and (max-width: 1023px) {
    display: flex;
    padding: 0;
  } ;
`;
