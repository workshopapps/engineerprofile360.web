import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";
import useAuth from "../../../../hooks/useAuth";
import { Button, Title } from "../../../../styles/reusableElements.styled";
import TableComponent from "../../molecules/TableComponent";
import { ReactComponent as ArrowDropdown } from "../../assets/dropdown-arrow.svg";
import { ReactComponent as GridSort } from "../../assets/gridsort.svg";
import { ReactComponent as ListSort } from "../../assets/listsort.svg";
import { ReactComponent as ThreeDots } from "../../assets/three-dots.svg";

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

const RecentAssessment = () => {
  const { auth } = useAuth();

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

  const [availableAssessment, setAvailableAssessment] = React.useState(null);
  const [isAvailableAssessmentLoading, setIsAvailableAssessmentLoading] =
    React.useState(true);

  //Get Available Assessment Details
  React.useEffect(() => {
    const getAvailableAssessment = async () => {
      try {
        const response = await axios.get(`assessment/${auth.id}`);
        setAvailableAssessment(response.data);
        setIsAvailableAssessmentLoading(false);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          // setFetchError(err.response.data.message);
        }
      }
    };
    getAvailableAssessment();
  }, [auth, availableAssessment]);

  return (
    <>
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
            Available Assessments
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
      <TableComponent>
        <tbody>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Actions</th>
            <th></th>
          </tr>

          {
            // isAvailableAssessmentLoading
            //   ? "Loading"
            //   :
            AssessmentList
              ? AssessmentList.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.department}</td>
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                    <td>
                      <Link to={item.result}>
                        <Button $variant="outlined" $color="#2667FF">
                          View Result
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <ThreeDots />
                    </td>
                  </tr>
                ))
              : []
          }
        </tbody>
      </TableComponent>
    </>
  );
};

export default RecentAssessment;

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
