import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Loader } from "../../../../styles/reusableElements.styled";
import addCircle from "../../../../assets/icons/app/add-circle.svg";
import down from "../../../../assets/icons/app/arrow-down-alt.svg";
import dashboard from "../../../../assets/icons/app/dashboard.svg";
import hamburger from "../../../../assets/icons/app/hamburger.svg";
import PageInfo from "../../../components/molecules/PageInfo";
import Flex from "../../../components/layout/Flex";
import { Link } from "react-router-dom";
import axios from "../../../../api/axios";

const DataContext = createContext(null);

const fetchCompleted = () => {
  return axios("/user-assessment/org/org-completed");
};

const info = [
  {
    id: "1",
    dept: "Introduction to Software Engineering",
    course: "Python 101",
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

export const Buttons = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <Hide>
        <Flex jc="flex-end" spacing={10}>
          <Link to="/assessment/create-assessment">
            <Button>
              <Flex spacing={10} ai="center">
                <img src={addCircle} alt="" />
                <Text $color="white">Create New Assessment</Text>
              </Flex>
            </Button>
          </Link>
          <Mailto email="employee@email.com" subject="ASSESSMENTS">
            <Button $variant="outlined">
              <Text $color="#2667FF" $weight="600">
                Send to employee
              </Text>
            </Button>
          </Mailto>
        </Flex>
      </Hide>
      <Show>
        <Flex jc="flex-end" spacing={10}>
          <Link to="/assessment/create-assessment">
            <Button>
              <Flex spacing={10} ai="center">
                <img src={addCircle} alt="" />
              </Flex>
            </Button>
          </Link>
          <Mailto email="employee@email.com" subject="ASSESSMENTS">
            <Button $variant="outlined">
              <Text $color="#2667FF" $weight="600">
                Send to employee
              </Text>
            </Button>
          </Mailto>
        </Flex>
      </Show>
    </div>
  );
};
export const Sort = () => {
  const { completed, setCompleted, data, setData, order, setOrder } =
    useContext(DataContext);
  const sorting = () => {
    if (order === "asc") {
      const sorted = [...completed.data].sort((a, b) =>
        a.dept.toLowerCase() > b.dept.toLowerCase() ? 1 : -1
      );
      setCompleted(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...completed.data].sort((a, b) =>
        a.dept.toLowerCase() < b.dept.toLowerCase() ? 1 : -1
      );
      setCompleted(sorted);
      setOrder("asc");
    }
  };

  const dateSort = () => {
    if (order === "asc") {
      const sortedDate = [...completed.data].sort((a, b) =>
        new Date(b.date) > new Date(a.date) ? 1 : -1
      );
      setCompleted(sortedDate);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sortedDate = [...completed.data].sort((a, b) =>
        new Date(b.date) < new Date(a.date) ? 1 : -1
      );
      setCompleted(sortedDate);
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
        <Text> Assessment Type</Text>
        <img src={down} />
      </Flex>
      <Flex ai="center" spacing={30}>
        <Flex
          spacing={10}
          style={{
            border: "1px solid #8A8886",
            padding: "8px",
            borderRadius: "4px",
          }}
          ai="center"
          onClick={() => dateSort()}
        >
          <Text>Sort By Date</Text>

          <img src={down} />
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

export const List = () => {
  const { completed, setCompleted, isLoading, setIsLoading } =
    useContext(DataContext);
  useEffect(() => {
    fetchCompleted()
      .then(({ data }) => {
        setCompleted(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        console.log();
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
          There are no completed assessments, check for available ones and
          complete
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

export const TableSection = () => {
  return (
    <Flex stack spacing={16}>
      <Sort />
      <List />
    </Flex>
  );
};

export const Assessment = () => {
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
          <Link to="/admin-assessment-list">
            <Text>Available (0)</Text>
          </Link>
          <Text $color="#2667FF" $weight="600">
            Completed (0)
          </Text>
        </Flex>
      </Flex>
      <TableSection />
    </Flex>
  );
};

export const AssessmentList = () => {
  const [assessmentInfo, setAssessmentInfo] = useState(info);
  const [order, setOrder] = useState("asc");
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <DataContext.Provider
        value={{
          completed,
          setCompleted,
          assessmentInfo,
          setAssessmentInfo,
          order,
          setOrder,
          isLoading,
          setIsLoading,
        }}
      >
        <PageInfo breadcrumb={["Dashboard", "Performance"]} />
        <Buttons />
        <Assessment />
      </DataContext.Provider>
    </div>
  );
};

export default AssessmentList;

export const AssessmentListings = styled.div`
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

export const Text = styled.p`
  white-space: nowrap;
  color: ${({ $color }) => ($color ? $color : "initial")};
  font-size: ${({ $size }) => ($size ? $size : "14px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "20px")};
`;

export const Hide = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
export const Show = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  } ;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  @media screen and (max-width: 1023px) {
    display: flex;
    padding: 0;
  } ;
`;
