import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowDropdown } from "../../../assets/icons/app/arrow-down.svg";
import { ReactComponent as GridSort } from "../../../assets/icons/app/filter.svg";
import { ReactComponent as ListSort } from "../../../assets/icons/app/menu.svg";
import styled from "styled-components";
// import Header from "../../ui/components/Header";
// import Sidebar from "../../ui/components/Sidebar";
import { Button, Title } from "../../../styles/reusableElements.styled";
import axios from "../../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import TableComponent from "../../components/molecules/TableComponent";

const AssessmentList = [
  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },
  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
  },

  {
    assessment: "Introduction to Software Engineering",
    timesTaken: "55",
    attempts: "23",
    result: "/guest-assessment-list",
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

const GuestAssessmentList = () => {
  const [assessmentTypeDropdown, setAssessmentTypeDropdown] =
    React.useState(false);

  const [assessmentTypeDropdownValue, setAssessmentTypeDropdownValue] =
    React.useState("Interview Type");

  const [sortByDateDropdown, setSortByDateDropdown] = React.useState(false);
  const [sortByDateDropdownValue, setSortByDateDropdownValue] =
    React.useState("Sort By Date");

  const handleAssessmentTypeOpen = () => {
    setAssessmentTypeDropdown(!assessmentTypeDropdown);
  };

  const handleDateDropdownOpen = () => {
    setSortByDateDropdown(!sortByDateDropdown);
  };

  const navigate = useNavigate();
  const [assessmentDropdown, setAssessmentDropdown] = useState(false);
  const [stacks, setStacks] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    //instead loading stacks from server
    //load from local storaged
    let guest = localStorage.getItem("guest");

    if (!guest) {
      navigate("/guest-login");
    } else {
      guest = JSON.parse(guest);
      console.log(guest);
      fetchInterviews(guest.stack);

      //axios call will not be loaded again
      axios
        .get(`https://api.eval360.hng.tech/api/stack/all`)
        .then((response) => {
          setStacks(JSON.parse(response.data.message));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //call  fetchInterviews function with stackId
  }, []);

  const fetchInterviews = (stack_id) => {
    //``
    axios
      .get(`https://api.eval360.hng.tech/api/interview/stack/${stack_id}`)
      .then((response) => {
        // console.log(response)
        setInterviews(response?.data?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          >
            Select Assessment
          </Title>
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
            <th>Assessements</th>
            <th>Number of times taken</th>
            <th>Attempts</th>
            <th></th>
          </tr>

          {
            // isAvailableAssessmentLoading
            //   ? "Loading"
            //   :
            AssessmentList
              ? AssessmentList.map((item, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.assessment}</td>
                    <td>{item.timesTaken}</td>
                    <td>{item.attempts}</td>
                    <td>
                      <Link to={item.result}>
                        <Button $variant="outlined" $color="#2667FF">
                          View Result
                        </Button>
                      </Link>
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

export default GuestAssessmentList;

const AssessmentContainer = styled.div`
  margin-top: 24px;
`;
const AssessmentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: -15px;
  margin-bottom: 70px;

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
