import React from "react";
import ArrowSvg from "../../assets/icons/app/arrow-down.svg";
import FilterSvg from "../../assets/icons/app/filter.svg";
import MenuSvg from "../../assets/icons/app/menu.svg";
import Header from "../../ui/components/Header";
import styled from "styled-components";

const GuestAssessmentList = () => {
  const assessmentList = [
    {
      id: 1,
      department: "Introduction to Software Engineering",
      timesTaken: 50,
      previousScore: 87,
    },

    {
      id: 2,
      department: "Introduction to Software Engineering",
      timesTaken: 50,
      previousScore: 87,
    },

    {
      id: 3,
      department: "Introduction to Software Engineering",
      timesTaken: 50,
      previousScore: 87,
    },

    {
      id: 4,
      department: "Introduction to Software Engineering",
      timesTaken: 50,
      previousScore: 87,
    },
  ];
  return (
    <Container>
      <Header />
      <Wrapper>
        <SideNav>
          <p>Asssesment</p>
        </SideNav>
        <Main>
          <div className="Filter_wrapper">
            <button className="Filter_button">
              Assessment Type <img src={ArrowSvg} alt="Arrow" width={13} />
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
                  <th>Department</th>
                  <th>Number of times Taken</th>
                  <th>Prevous Score</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {assessmentList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.department}</td>
                      <td>{item.timesTaken}</td>
                      <td>{item.previousScore}</td>
                      <td>
                        <button>Take Assessment</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Main>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideNav = styled.nav`
  width: 240px;
  color: #2667ff;
`;

const Main = styled.main`
  height: auto;
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding: 40px;

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
  tr td:last-child {
    display: flex;
    justify-content: end;
    margin-right: 15px;
  }

  /* Media queries */
  @media screen and (max-width: 767px) {
    align-items: stretch;
    text-align: center;

    .Filter_wrapper {
      flex-direction: column;
      justify-content: space-between;
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
