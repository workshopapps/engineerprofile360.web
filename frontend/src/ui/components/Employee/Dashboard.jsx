import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Title } from "../../../styles/reusableElements.styled";
import { ReactComponent as ArrowDropdown } from "../assets/dropdown-arrow.svg";
import { ReactComponent as GridSort } from "../assets/gridsort.svg";
import { ReactComponent as ListSort } from "../assets/listsort.svg";
import { ReactComponent as ThreeDots } from "../assets/three-dots.svg";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { Radar } from "react-chartjs-2";

const AssessmentList = [
  {
    id: 1,
    department: "UX Engineer",
    course: "Design Thinking 101",
    grade: "83.9%",
    result: "/user-assessment-result",
  },
  {
    id: 2,
    department: "UX Engineer",
    course: "Design Thinking 101",
    grade: "83.9%",
    result: "/user-assessment-result",
  },
  {
    id: 3,
    department: "UX Engineer",
    course: "Design Thinking 101",
    grade: "83.9%",
    result: "/user-assessment-result",
  },
  {
    id: 4,
    department: "UX Engineer",
    course: "Design Thinking 101",
    grade: "83.9%",
    result: "/user-assessment-result",
  },
  {
    id: 5,
    department: "UX Engineer",
    course: "Design Thinking 101",
    grade: "83.9%",
    result: "/user-assessment-result",
  },
];

const DropdownItems = [
  { title: "Communication" },
  { title: "Problem solving" },
  { title: "Adaptability" },
  { title: "Leadership skill" },
  { title: "General knowledge" },
  { title: "Overall knowledge" },
];

const DateDropdownItems = [
  { date: "Last 30 days" },
  { date: "Last Month" },
  { date: "Last 60 days" },
  { date: "Last 90 days" },
  { date: "Last 180 days" },
  { date: "Last Year" },
  { date: "Custom" },
];
const SKillRating = ({ title }) => {
  return (
    <Title
      as="h5"
      $size="16px"
      $weight="normal"
      $lHeight="22px"
      $color="#142245"
    >
      {title}
    </Title>
  );
};

const Dashboard = () => {
  const [assessmentTypeDropdown, setAssessmentTypeDropdown] =
    React.useState(false);

  const [assessmentTypeDropdownValue, setAssessmentTypeDropdownValue] =
    React.useState("Assessment Type");

  const [sortByDateDropdown, setSortByDateDropdown] = React.useState(false);
  const [sortByDateDropdownValue, setSortByDateDropdownValue] =
    React.useState("Sort By Date");

  const handleAssessmentTypeOpen = () => {
    setAssessmentTypeDropdown(!assessmentTypeDropdown);
  };

  const handleDateDropdownOpen = () => {
    setSortByDateDropdown(!sortByDateDropdown);
  };

  const { auth } = useAuth();
  const [availableAssessment, setAvailableAssessment] = React.useState(null);
  const [chartDetails, setChartDetails] = React.useState(null);

  const [isAvailableAssessmentLoading, setIsAvailableAssessmentLoading] =
    React.useState(true);
  const [isChartLoading, setIsChartLoading] = React.useState(true);
  // const [fetchError, setFetchError] = React.useState("");

  //Get Chart Details
  React.useEffect(() => {
    const getChartDetails = async () => {
      try {
        const response = await axios.get(`userscore/employee/${auth.id}`);
        setChartDetails(response.data);
        setIsChartLoading(false);
      } catch (err) {
        if (!err?.response) {
          // showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          // setFetchError(err.response.data.message);
        }
      }
    };
    getChartDetails();
  }, [auth, chartDetails]);

  //Chart Data Schema
  const data = {
    labels: chartDetails
      ? JSON.parse(chartDetails?.data[0]?.categories?.split("/").join(""))
      : [0, 0, 0, 0],
    datasets: [
      {
        label: "Dataset",
        data: chartDetails
          ? JSON.parse(chartDetails?.data[0]?.passed_questions)
          : [0, 0, 0, 0],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#2667FF",
        pointHoverBackgroundColor: "#2667FF",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  //Get Available Assessment Details
  React.useEffect(() => {
    const getAvailableAssessment = async () => {
      try {
        const response = await axios.get(`assessment/${auth.id}`);
        setAvailableAssessment(response.data);
        setIsAvailableAssessmentLoading(false);
      } catch (err) {
        if (!err?.response) {
          // showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          // showErrorToast(err.response.data.message);
          // setFetchError(err.response.data.message);
        }
      }
    };
    getAvailableAssessment();
  }, [auth, availableAssessment]);

  return (
    <>
      <StatsContainer>
        <SkillSection>
          <Title
            as="h5"
            $size="20px"
            $weight="100"
            $lHeight="28px"
            $color="#142245"
            style={{ marginBottom: "16px" }}
          >
            Your Skill Rating
          </Title>

          {isChartLoading ? (
            "Loading"
          ) : (
            <SkillRatingSection>
              <div>
                {chartDetails
                  ? JSON.parse(
                      chartDetails?.data[0]?.categories?.split("/").join("")
                    ).map((item, key) => <SKillRating key={key} title={item} />)
                  : ""}
              </div>
              <div>
                {chartDetails
                  ? JSON.parse(chartDetails?.data[0]?.passed_questions).map(
                      (item, key) => <SKillRating key={key} title={item} />
                    )
                  : ""}
              </div>
            </SkillRatingSection>
          )}
        </SkillSection>
        <ChartSection>
          {isChartLoading ? "Loading" : <Radar data={data} />}
        </ChartSection>
      </StatsContainer>
      <AssessmentContainer>
        <AssessmentTitle>
          <Title
            as="h5"
            $size="28px"
            $weight="700"
            $lHeight="37.04px"
            $color="#3D3D3D"
            style={{ marginBottom: "16px" }}
          >
            Available Assessment
          </Title>
          <p>View all</p>
        </AssessmentTitle>
        <AssessmentSorting>
          <Button
            $color="#292D32"
            style={{ backgroundColor: "#fff", position: "relative" }}
            onClick={handleAssessmentTypeOpen}
          >
            <span>{assessmentTypeDropdownValue}</span> <ArrowDropdown />
            {assessmentTypeDropdown ? (
              <DropdownMenu>
                <DropdownContainer>
                  {DropdownItems
                    ? DropdownItems.map((item, key) => (
                        <Title
                          key={key}
                          as="h5"
                          $size="16px"
                          $weight="400"
                          $lHeight="38px"
                          onClick={() =>
                            setAssessmentTypeDropdownValue(item.title)
                          }
                        >
                          {item.title}
                        </Title>
                      ))
                    : ""}
                </DropdownContainer>
              </DropdownMenu>
            ) : null}
          </Button>
          <SortContainer>
            <Button
              $color="#292D32"
              style={{ backgroundColor: "#fff" }}
              onClick={handleDateDropdownOpen}
            >
              <span>{sortByDateDropdownValue}</span> <ArrowDropdown />
              {sortByDateDropdown ? (
                <DropdownMenu>
                  <DropdownContainer>
                    {DateDropdownItems
                      ? DateDropdownItems.map((item, key) => (
                          <Title
                            key={key}
                            as="h5"
                            $size="16px"
                            $weight="400"
                            $lHeight="38px"
                            onClick={() =>
                              setSortByDateDropdownValue(item.date)
                            }
                          >
                            {item.date}
                          </Title>
                        ))
                      : ""}
                  </DropdownContainer>
                </DropdownMenu>
              ) : null}
            </Button>
            <SortFilter>
              <GridSort />
              <ListSort />
            </SortFilter>
          </SortContainer>
        </AssessmentSorting>
      </AssessmentContainer>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Department</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isAvailableAssessmentLoading
              ? "Loading"
              : AssessmentList
              ? AssessmentList.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.department}</td>
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                    <td
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Link to={item.result}>
                        <Button $color="#2667FF">View Result</Button>
                      </Link>
                      <ThreeDots />
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Dashboard;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fcfe;
  border: 1px solid #c7e0f4;
  border-radius: 12px;
  padding: 24px 66px;
  width: 100%;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;
    padding: 10px 20px;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ebf4f9;
  border-radius: 12px;
  background-color: #fff;
  padding: 49px 32px;
  gap: 12px;
  min-height: 336px;
`;

const SkillRatingSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  div {
    text-align: left;
  }
`;
const ChartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebf4f9;
  width: 80%;
  border: 1px solid #ebf4f9;
  border-radius: 12px;
  padding: 35.35px 40px;
  min-height: 336px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 100%;
  }
`;

const AssessmentContainer = styled.div`
  margin-top: 24px;
`;
const AssessmentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 16px;
    color: #4e4e4e;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AssessmentSorting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #939393;
    border-radius: 4px;

    span {
      font-size: 16px;
    }
  }
`;

const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SortFilter = styled.div`
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  min-height: 200px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    overflow-x: auto;
    width: 100%;
  }
  table {
    width: 100%;
  }
  thead {
    background-color: #f8fbfd;
    padding: 9px 0px;
    width: 100%;
  }

  tr {
    padding: 9px 0px;
    width: 100%;
  }

  th {
    width: 200px;
    max-width: 100%;
  }

  th:first-child {
    width: 80px;
  }

  td {
    width: 200px;
    max-width: 100%;
  }

  td:first-child {
    width: 80px;
  }
  button {
    background-color: #fff;
    border: 1px solid #2667ff;
  }

  svg {
    cursor: pointer;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 195px;
  z-index: 100;
  background: #fff;
  border: 1px solid #939393;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: 40px;
  overflow-y: auto;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  text-align: left;
  width: 100%;
  h5 {
    padding: 0px 20px;
  }
  h5:hover {
    background-color: #f8fbfd;
  }
`;
