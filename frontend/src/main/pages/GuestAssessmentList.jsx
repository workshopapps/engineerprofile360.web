import React, { useState, useEffect } from "react";
import ArrowSvg from "../../assets/icons/app/arrow-down.svg";
import FilterSvg from "../../assets/icons/app/filter.svg";
import MenuSvg from "../../assets/icons/app/menu.svg";
import styled from "styled-components";
import Header from "../../ui/components/Header";
import Sidebar from "../../ui/components/Sidebar";
import { MainContainer } from "../../styles/reusableElements.styled";
import Footer from "../../Layouts/Main/Partials/Footer";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const GuestAssessmentList = () => {
  const navigate = useNavigate();
  const [assessmentDropdown, setAssessmentDropdown] = useState(false);
  const [stacks, setStacks] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    //instead loading stacks from server
    //load from local storaged
    let guest = localStorage.getItem("guest");
    // console.log(guest);
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
      <Header />
      <MainContainer>
        <Sidebar className="nav" external={true} />
        <Wrapper>
          <Main>
            <h1>Select Assessment</h1>
            <div className="Filter_wrapper">
              <button
                className="Filter_button"
                style={{ position: "relative" }}
                onClick={() => setAssessmentDropdown((prev) => !prev)}
              >
                Assessment Type <img src={ArrowSvg} alt="Arrow" width={13} />
                <div
                  style={{
                    display: assessmentDropdown ? "block" : "none",
                    padding: "1rem 1rem",
                    left: "0",
                    width: "100%",
                    position: "absolute",
                    top: "100%",
                    zIndex: "2",
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 5px 6px rgb(0 0 0/.2)",
                  }}
                >
                  {(stacks || [])?.map((el, i) => {
                    return (
                      <p
                        key={i}
                        onClick={() => fetchInterviews(el?.id || "")}
                        style={{ marginBottom: "2%" }}
                      >
                        {" "}
                        {el?.name || ""}
                      </p>
                    );
                  })}
                </div>
              </button>
              <div className="Filter_flex">
                <button className="Filter_button">
                  Sort By Date <img src={ArrowSvg} alt="Arrow" width={13} />
                </button>
                <div>
                  <img src={FilterSvg} alt="Filter" width={40} />
                </div>
                <div>
                  <img src={MenuSvg} alt="Menu" width={40} />
                </div>
              </div>
            </div>
            <div className="table_container">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Number of times Taken</th>
                    <th>Company Name</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {interviews.length > 0 &&
                    interviews.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item?.name || ""}</td>
                          <td>{item?.times_taken || ""}</td>
                          <td>{item?.company_name || ""}</td>
                          <td>
                            <button>Take Assessment</button>
                          </td>
                        </tr>
                      );
                    })}
                  {interviews.length === 0 && (
                    <tr>
                      <td colSpan="5">No Data available for this stack</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Main>
        </Wrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.main`
  height: auto;
  width: 100%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding: 40px;

  h1 {
    align-self: start;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 28px;
    line-height: 37px;
    /* identical to box height */

    color: #6e6e6e;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    background-color: #f8fbfd;
    text-align: left;
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
  }

  td {
    text-align: center;
    padding: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
    min-width: 200px !important;
  }

  .table_container {
    width: 100%;
    overflow-x: auto;
  }

  /*scrolling responsive table*/
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    text-align: center;
    padding: 8px;
  }

  tr td:first-child {
    min-width: 100px !important;
  }
  tr td:nth-of-type(5) {
    display: flex;
    justify-content: end;
    margin-right: 15px;
  }

  button {
    width: 201px;
    height: 48px;
    padding: 6px 20px;
    background-color: #ffffff;
    border: 2px solid #2667ff;
    border-radius: 2px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #2667ff;
    cursor: pointer;
  }

  .Filter_wrapper {
    display: flex;
    width: 100% !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .Filter_flex {
    display: flex;
    width: 25%;
    justify-content: space-between;
  }

  .Filter_button {
    background-color: #ffffff !important;
    border: 1px solid #8a8886 !important;
    border-radius: 4px !important;
    color: #8a8886 !important;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Media queries */
  @media screen and (max-width: 767px) {
    align-items: stretch;
    text-align: center;

    .Filter_wrapper {
      flex-direction: column;
      align-items: start;
    }

    .Filter_flex {
      display: flex;
      width: 100% !important;
      justify-content: space-between;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1000px) {
    .Filter_flex {
      width: 50%;
    }
  }
`;

export default GuestAssessmentList;
