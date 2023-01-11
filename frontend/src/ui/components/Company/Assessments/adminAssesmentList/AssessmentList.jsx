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
  ButtonContainer,
  ButtonInner,
  Hide,
  LoaderContainer,
  Show,
  TableContainer,
  Text,
  TimeStamp,
} from "./AdminAssessmentListAvailable";
import { showErrorToast } from "../../../../../helpers/helper";
import { AddCircle } from "iconsax-react";
import TableComponent from "../../../molecules/TableComponent";
import moment from "moment";

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
  const {
    completed,
    setCompleted,
    isLoading,
    setIsLoading,
    // available,
    setAvailable,
  } = useContext(DataContext);
  const { auth } = useAuth();

  useEffect(() => {
    const getCompletedAssessment = async () => {
      try {
        //Get Completed Assessment
        const response = await axios.get(
          `user-assessment/org/${auth.org_id}/org-completed`
          // `/assessment/completed-assessments/${auth.org_id}/${auth.id}`
        );
        setIsLoading(false);
        const completedData = response?.data?.data;
        setCompleted(completedData);

        //Get Availlable Assessment Count
        const responseAvailable = await axios.get(`/assessment/${auth.org_id}`);
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
                    <td>{item?.assessment?.name}</td>
                    <td>{}</td>
                    <td>
                      {item?.assessment?.start_date
                        ? moment(item?.assessment?.start_date).format(
                            "yy-MM-DD"
                          )
                        : "loading"}
                    </td>
                    <td>
                      {moment
                        .utc(
                          moment(item?.end_time, "HH:mm").diff(
                            moment(item?.start_time, "HH:mm")
                          )
                        )
                        .format("HH:mm:ss")}
                    </td>
                    <td>
                      {item?.assessment?.end_date
                        ? moment(item?.assessment?.end_date).format("yy-MM-DD")
                        : "loading"}
                    </td>
                    <td>
                      <Link to={`/assessment/view-assessment/${item?.id}`}>
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
          isLoading,
          setIsLoading,
        }}
      >
        <PageInfo breadcrumb={["Dashboard", "Assessment list"]} />
        <Buttons />
        <Assessment
          available={available?.length}
          completed={completed?.length}
        />
      </DataContext.Provider>
    </div>
  );
};

export default CompletedAssessmentList;
