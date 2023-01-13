import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import useAuth from "../../../../../hooks/useAuth";
import axios from "../../../../../api/axios";
import {
  Button,
  OverlayLoader,
} from "../../../../../styles/reusableElements.styled";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AssessmentResultModal = ({ assessment_id, setModal }) => {
  const { auth } = useAuth();
  const [performance, setPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { ID } = useParams();
  const [employeeID, setEmployeeID] = useState(ID);

  useEffect(() => {
    const getDetails = async () => {
      try {
        await axios
          .get(`/userscore/${employeeID}/${assessment_id}`)
          .then((data) => {
            console.log(data);
            setPerformance(data.data.data[0]);
            console.log(
              performance.userscore?.passed_questions ? 
              (JSON.parse(performance.userscore?.passed_questions).toString() > 0 ?
              [JSON.parse(performance.userscore?.passed_questions).toString(),"", "", "", "", ""] : [0])
            : [0] );

            console.log(
              performance.userscore?.categories ? 
              (JSON.parse(performance.userscore?.categories).length > 0 ?
              [JSON.parse(performance.userscore?.categories).length,"", "", "", "", ""] : ["null"])
            : [0] );

            console.log(
              performance.userscore?.categories && JSON.parse(performance.userscore?.categories).length > 0 
             ? [JSON.parse(performance.userscore?.categories).length,"", "", "", "", ""] 
            : ["0"] );


          });
          

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    getDetails();
  }, [assessment_id]);

  const data = {
    labels: performance?.userscore?.categories && JSON.parse(performance.userscore?.categories).length > 0 
      ? [JSON.parse(performance.userscore?.categories), "", "", "", "", ""]
      : ["Null"],
    datasets: [
      {
        label: "Categories",
        data:  performance.userscore?.passed_questions && JSON.parse(performance.userscore?.passed_questions).toString() > 0 
        ? [JSON.parse(performance.userscore?.passed_questions).toString(),"", "", "", "", ""] 
       : ["0"] ,
        backgroundColor: "rgba(95, 210, 85, 0.2)",
        borderColor: "#107C10",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <ResultModal onClick={() => setModal(false)}>
        <ResultContainer>
          {!isLoading ? (
            <>
              <Heading>
                <p>Username</p>
                <span>{performance?.employee?.username}</span>
              </Heading>
              <AssessmentInfo>
                <Details>
                  {/* <Detail>
                    <span>
                      <b>Department</b>
                    </span>
                    <p>UI/UX Engineer</p>
                  </Detail> */}

                  {/* <Detail>
                    <span>
                      <b>Assessment</b>
                    </span>
                    <p>UI/UX Engineer</p>
                  </Detail> */}

                  <Detail>
                    <span>
                      <b>Percentage</b>
                    </span>
                    <p
                      style={{
                        color:
                          performance &&
                          (
                            (performance.result / performance.total_questions) *
                            100
                          ).toFixed(2) > 50
                            ? "green"
                            : "red",
                      }}
                    >
                      {performance
                        ? (
                            (performance.result / performance.total_questions) *
                            100
                          ).toFixed(2)
                        : 0}
                      %
                    </p>
                  </Detail>
                </Details>
                <ChartDetails>
                  <Radar data={data} />
                  <Link to={`/employees/profile/${employeeID}`}>
                    <Button fullWidth $weight="400">
                      View Full Profile
                    </Button>
                  </Link>
                </ChartDetails>
              </AssessmentInfo>
            </>
          ) : (
            <OverlayContainer>
              <OverlayLoader contained>
                <div></div>
                Loading Result...
              </OverlayLoader>
            </OverlayContainer>
          )}
        </ResultContainer>
      </ResultModal>
    </>
  );
};

export default AssessmentResultModal;

const ResultModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 95px;
  left: 50%;
  transform: translate(-50%, -15%);
  z-index: 2;

  background-color: rgba(255, 255, 255, 1);
`;

const ResultContainer = styled.div`
  width: 95%;
  border-radius: ${({ theme }) => theme.spacing(2)};
  background: #f8fcfe;
  padding: ${({ theme }) => theme.spacing(6)};
  border: 1px solid #c7e0f4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)} 0;

  span {
    color: #323130;
    font-size: 20px;
    font-weight: 600;
  }
`;

const AssessmentInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: ${({ theme }) => theme.spacing(6)};
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;

const Details = styled.div`
  flex: 0 0 calc(40% - ${({ theme }) => theme.spacing(2)});
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  border: 1px solid grey;
  border-radius: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("touch")} {
    width: 100%;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(3)};
  background: #ffffff;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(2)};

  p {
    font-size: 30px;
    color: #323130;
    font-weight: 600;
  }

  span {
    font-size: 16px;
    color: #323130;
  }
`;

const ChartDetails = styled.div`
  flex: 0 0 calc(55% - ${({ theme }) => theme.spacing(2)});
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 ${({ theme }) => theme.spacing(1.5)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down("touch")} {
    width: 100%;
  }

  a {
    width: 100%;
  }

  ${Button} {
    width: 100%;
    max-width: 100%;
  }
`;

const OverlayContainer = styled.div`
  margin: 75px 0px;
  background-color: #fff;
`;
