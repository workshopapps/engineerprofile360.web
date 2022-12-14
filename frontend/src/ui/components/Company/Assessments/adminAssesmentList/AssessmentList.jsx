import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Loader } from "../../../../../styles/reusableElements.styled";
import PageInfo from "../../../molecules/PageInfo";
import Flex from "../../../layout/Flex";
import { Link } from "react-router-dom";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";
import {
  AssessmentListings,
  AssessmentTab,
  AssessmentTabContainer,
  AssessmentTimer,
  ButtonContainer,
  ButtonInner,
  Hide,
  LoaderContainer,
  Show,
  TableContainer,
  Text,
} from "./AdminAssessmentListAvailable";
import { showErrorToast } from "../../../../../helpers/helper";
import { AddCircle } from "iconsax-react";
import TableComponent from "../../../molecules/TableComponent";

const DataContext = createContext(null);
export const Buttons = () => {
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

export const List = () => {
  const { completed, setCompleted, isLoading, setIsLoading, setAvailable } =
    useContext(DataContext);
  const { auth } = useAuth();

  useEffect(() => {
    const getCompletedAssessment = async () => {
      try {
        //Get Completed Assessment
        const response = await axios.get(
          `/assessment/completed-assessments/${auth.org_id}/${auth.id}`
        );
        setIsLoading(false);
        const completedData = response?.data?.data?.data;
        setCompleted(completedData);

        //Get Availlable Assessment Count
        const responseAvailable = await axios.get(`/assessment/${auth.id}`);
        const availableCount = responseAvailable?.data?.data;
        setAvailable(availableCount);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      }
    };
    getCompletedAssessment();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      );
    } else if (completed.length === 0) {
      return (
        <Text>
          There are no completed assessments, check for available ones and
          complete
        </Text>
      );
    }

    return (
      <>
        <TableContainer>
          <TableComponent>
            <tbody>
              <tr>
                <th>#</th>
                <th>Assessment Name</th>
                <th>Department</th>
                <th>Accepted</th>
                <th>Duration</th>
                <th>Deadline</th>
                <th></th>
              </tr>

              {completed.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.department.name}</td>
                    <td>{item?.start_date}</td>
                    <td>
                      {" "}
                      {`${
                        AssessmentTimer(item) < 1
                          ? parseFloat((AssessmentTimer(item) / 100) * 60)
                              .toFixed(2)
                              .split(".")
                              .join(":")
                          : AssessmentTimer(item).toFixed(2)
                      } 
           ${
             AssessmentTimer(item) < 1
               ? "Minutes"
               : AssessmentTimer(item) > 1
               ? "Hours"
               : "Hour"
           }`}
                    </td>
                    <td>{item?.end_date}</td>
                    <td>
                      <Link to={`/assessment/view-assessment/${item.id}`}>
                        <Button $variant="outlined" $color="#2667ff">
                          View Assessment
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableComponent>
        </TableContainer>
      </>
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

export const Assessment = ({ available, completed }) => {
  return (
    <>
      <AssessmentTabContainer>
        <AssessmentTab>
          <Link to="/assessment/assessment-list">
            <Text>Available ({available})</Text>
          </Link>
          <Link to="/assessment/assessment-list/completed">
            <Text $color="#2667FF" $weight="600">
              Completed ({completed})
            </Text>
          </Link>
        </AssessmentTab>
      </AssessmentTabContainer>
      <TableSection />
    </>
  );
};

export const CompletedAssessmentList = () => {
  const [order, setOrder] = useState("asc");
  const [completed, setCompleted] = useState([]);
  const [available, setAvailable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <DataContext.Provider
        value={{
          completed,
          setCompleted,
          available,
          setAvailable,
          order,
          setOrder,
          isLoading,
          setIsLoading,
        }}
      >
        <PageInfo breadcrumb={["Dashboard", "Assessment list"]} />
        <Buttons />
        <Assessment available={available.length} completed={completed.length} />
      </DataContext.Provider>
    </div>
  );
};

export default CompletedAssessmentList;
