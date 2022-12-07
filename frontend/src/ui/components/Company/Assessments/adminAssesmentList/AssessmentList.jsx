import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Loader } from "../../../../../styles/reusableElements.styled";
import addCircle from "../../../../../assets/icons/app/add-circle.svg";
import PageInfo from "../../../molecules/PageInfo";
import Flex from "../../../layout/Flex";
import { Link } from "react-router-dom";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";
import {
  AssessmentListings,
  AssessmentTab,
  AssessmentTabContainer,
  ButtonContainer,
  ButtonInner,
  Hide,
  Show,
  TableContainer,
  Text,
  TH1,
  TH2,
} from "./AdminAssessmentListAvailable";
import { showErrorToast } from "../../../../../helpers/helper";

const DataContext = createContext(null);

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
  return (
    <ButtonContainer>
      <Hide>
        <ButtonInner>
          <Link to="/assessment/create-assessment">
            <Button>
              <Flex spacing={10} ai="center">
                <img src={addCircle} alt="" />
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
                <img src={addCircle} alt="" />
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Show>
    </ButtonContainer>
  );
};

export const List = () => {
  const { completed, setCompleted, isLoading, setIsLoading } =
    useContext(DataContext);
  const { auth } = useAuth();

  useEffect(() => {
    const getCompletedAssessment = async () => {
      try {
        const response = await axios.get(
          `/assessment/completed-assessments/3ed2cd12-f571-4570-bc8b-f388dd301f67/${auth.id}`
        );
        setCompleted(response.data);
        setIsLoading(false);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      }
    };
    getCompletedAssessment();
  }, [auth.id, setCompleted, setIsLoading]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Flex jc="center">
          <Loader />
        </Flex>
      );
    }

    // else if (completed.data.length === 0) {
    //   return (
    //     <Text>
    //       There are no completed assessments, check for available ones and
    //       complete
    //     </Text>
    //   );
    // }
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
          {/* [available.data] */}
          <tbody>
            {info.map((d, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <TH2>{d.dept}</TH2>
                  <td>{d.course}</td>
                  <td>{d.duration}</td>
                  <td>{d.course}</td>
                  <td>{d.date}</td>

                  <td>
                    <Button $variant="outlined" $color="#2667ff">
                      View Assessment
                    </Button>
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

export const TableSection = () => {
  return (
    <>
      <List />
    </>
  );
};

export const Assessment = () => {
  return (
    <>
      <AssessmentTabContainer>
        <AssessmentTab>
          <Link to="/assessment/assessment-list">
            <Text>Available (0)</Text>
          </Link>
          <Link to="/assessment/assessment-list/completed">
            <Text $color="#2667FF" $weight="600">
              Completed (0)
            </Text>
          </Link>
        </AssessmentTab>
      </AssessmentTabContainer>
      <TableSection />
    </>
  );
};

export const CompletedAssessmentList = () => {
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
        <PageInfo breadcrumb={["Dashboard", "Assessment list"]} />
        <Buttons />
        <Assessment />
      </DataContext.Provider>
    </div>
  );
};

export default CompletedAssessmentList;
