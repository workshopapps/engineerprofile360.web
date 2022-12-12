import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Loader } from "../../../../../styles/reusableElements.styled";
import PageInfo from "../../../molecules/PageInfo";
import Flex from "../../../layout/Flex";
import { Link } from "react-router-dom";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";
import { showErrorToast } from "../../../../../helpers/helper";
import { AddCircle } from "iconsax-react";
// import useAuth from "";

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

const Buttons = () => {
  return (
    <ButtonContainer>
      <Hide>
        <ButtonInner>
          <Link to="/assessment/create-assessment">
            <Button>
              <Flex spacing={10} ai="center">
                <AddCircle size="24" color="#fff" />
                <Text $color="white">Create New Assessment</Text>
              </Flex>
            </Button>
          </Link>
        </ButtonInner>
      </Hide>
      <Show>
        <Flex jc="flex-end" spacing={10}>
          <Link to="/assessment/create-assessment">
            <Button>
              <Flex spacing={10} ai="center">
                <AddCircle size="24" color="#fff" />
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Show>
    </ButtonContainer>
  );
};

const List = () => {
  const { available, setAvailable, isLoading, setIsLoading, setCompleted } =
    useContext(DataContext);
  const { auth } = useAuth();

  useEffect(() => {
    const getAvailableAssessment = async () => {
      try {
        //Get Availlable Assessment
        const response = await axios.get(`/assessment/${auth.org_id}`);
        setIsLoading(false);
        const availableData = response?.data?.data;
        setAvailable(availableData);

        //Get Completed Assessment Counts
        const responseCompleted = await axios.get(
          `/assessment/completed-assessments/${auth.org_id}/${auth.id}`
        );
        setCompleted(responseCompleted?.data?.data?.data);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      }
    };
    getAvailableAssessment();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      );
    } else if (available.length === 0) {
      return <Text>Oops no available assessments, create an assessment</Text>;
    }
    return (
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <TH1>Assessment Name</TH1>
              <th>Department</th>
              <th>Accepted</th>
              <th>Duration</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {available.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <TH2>{item?.name}</TH2>
                  <td>{item?.department.name}</td>
                  <td>{item?.start_date}</td>
                  <td>{item?.end_date - item?.start_date}</td>
                  <td>{item?.end_date}</td>

                  <td>
                    <Link to="/assessment/view-assessment">
                      <Button $variant="outlined" $color="#2667ff">
                        View Assessment
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    );
  };
  return <AssessmentListings>{renderContent()}</AssessmentListings>;
};

const TableSection = () => {
  return <List />;
};

const Assessment = ({ available, completed }) => {
  return (
    <>
      <AssessmentTabContainer>
        <AssessmentTab>
          <Link to="/assessment/assessment-list">
            <Text $color="#2667FF" $weight="600">
              Available ({available})
            </Text>
          </Link>
          <Link to="/assessment/assessment-list/completed">
            <Text>Completed ({completed})</Text>
          </Link>
        </AssessmentTab>
      </AssessmentTabContainer>
      <TableSection />
    </>
  );
};

const AvailableAssessmentList = () => {
  const [assessmentInfo, setAssessmentInfo] = useState(info);
  const [order, setOrder] = useState("asc");
  const [available, setAvailable] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <DataContext.Provider
        value={{
          assessmentInfo,
          setAssessmentInfo,
          order,
          setOrder,
          available,
          setAvailable,
          isLoading,
          setIsLoading,
          setCompleted,
          completed,
        }}
      >
        <PageInfo breadcrumb={["Dashboard", "Assessment list"]} />
        <Buttons />
        <Assessment available={available.length} completed={completed.length} />
      </DataContext.Provider>
    </>
  );
};

export default AvailableAssessmentList;

//STYLED COMPONENTS

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AssessmentListings = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
`;

export const AssessmentTabContainer = styled.div`
  border-bottom: 1px solid #8a8886;
  padding-bottom: 10px;
`;
export const AssessmentTab = styled.div`
  display: flex;
  gap: 20px;
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

export const TableContainer = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    overflow: auto;
  }

  table {
    min-width: 1025px;
    table-layout: fixed;
    border-collapse: collapse;
  }

  thead {
    background-color: #f8fbfd;
    padding: 9px 0px;
    text-align: left;
  }

  th:first-child {
    width: 50px;
  }

  td:first-child {
    width: 50px;
  }

  th,
  td {
    width: 200px;
    overflow: hidden;
    text-align: left;
    padding-left: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  th {
    color: #605e5c;
  }

  td {
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
  }

  button {
    background-color: #fff;
    border: 1px solid #2667ff;
  }

  svg {
    cursor: pointer;
  }
`;

export const TH1 = styled.th`
  min-width: 300px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #605e5c;
  font-weight: bold;
`;

export const TH2 = styled.th`
  min-width: 300px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #605e5c;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-top: -50px;
`;

export const ButtonInner = styled.div`
  width: fit-content;
`;
