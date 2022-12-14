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
import TableComponent from "../../../molecules/TableComponent";

const DataContext = createContext(null);

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

//Duration
export const TimeStamp = (timestamp) => {
  let TimeDuration =
    (timestamp?.end_time
      ? Number(timestamp?.end_time?.split(":").join(""))
      : 0) -
    (timestamp?.start_time
      ? Number(timestamp?.start_time?.split(":").join(""))
      : 0);
  let Hours = Math.floor(TimeDuration / 60);
  let Minutes = TimeDuration % 60;

  var DurationTime =
    Hours +
    `${Hours === 1 ? " Hour " : " Hours "}` +
    (Minutes === 0 ? "" : Minutes) +
    `${Minutes === 0 ? "" : " Minutes "}`;

  if (Hours <= 1) {
    return Minutes + " Minutes ";
  }

  return DurationTime;
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
        console.log(availableData);

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

            {available.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.department.name}</td>
                  <td>{item?.start_date}</td>
                  <td>{TimeStamp(item)}</td>
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
  const [available, setAvailable] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <DataContext.Provider
        value={{
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

export const LoaderContainer = styled.div`
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
  margin-top: -30px;
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
