import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  BsChevronRight,
  BsPlusCircle,
  BsChevronDown,
  BsGrid,
  BsList,
} from "react-icons/bs";
import styled from "styled-components";

const UserAssessmentListCompleted = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Primary>
          <div className="page_heading">
            <h2>
              Assessments <BsChevronRight className="icon" />
              <span>Assessments List</span>
            </h2>
            <div className="btns">
              <button className="add_btn">
                <BsPlusCircle className="icon" /> Create New Assessment
              </button>
              <button className="btn_outlined"> Send to Employee</button>
            </div>
          </div>

          <div className="tabs">
            <p>
              Available (60)
              <span className="active_tab">Completed (47)</span>
            </p>
          </div>

          <div className="secondary_nav">
            <div>
              <button className="sort_btn">
                Assessment Type <BsChevronDown className="icon" />
              </button>
            </div>
            <div>
              <button className="sort_btn">
                Sort By Date <BsChevronDown className="icon" />
              </button>
              <BsGrid className="icon bold_icon" />
              <BsList className="icon bold_icon" />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Department</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Basics of software engineering</td>
                <td>PHP 257</td>
                <td>30 mins</td>
                <td>24 April, 22</td>
                <td>
                  <button className="view_btn">View Result</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Primary>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const Primary = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.2fr 0.15fr 1fr;

  .page_heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #605e5c;
  }

  h2 span {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #323130;
  }
  .btns {
    display: flex;
    justify-self: end;
    padding: 0 15px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  .add_btn {
    background: #2667ff;
    padding: 12px 20px;
    border: 1px solid #2667ff;
    border-radius: 4px;
    margin-right: 32px;
    color: #fff;
  }

  .add_btn:hover {
    background: #3f8efc;
    border: none;
  }
  .btn_outlined {
    padding: 10px 16px;
    color: #2667ff;
    border-radius: 4px;
    border: 1px solid #2667ff;
  }

  .btn_outlined:hover {
    background: #faf9f8;
  }
  .icon {
    display: inline-block;
  }

  .bold_icon {
    font-size: 25px;
    font-weight: 300;
    margin-right: 10px;
    border: none;
  }

  .tabs p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #323130;
    border-bottom: 1px solid #8a8886;
    padding-bottom: 10px;
  }

  .active_tab {
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #2667ff;
  }

  .sort_btn {
    background: transparent;
    padding: 10px 10px 10px 10px;
    border: 1px solid #8a8886;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #323130;
    border-radius: 4px;
  }
  .sort_btn .icon {
    font-size: 14px;
  }

  .secondary_nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .secondary_nav div:last-child {
    justify-self: end;
    margin-right: 25px;
  }

  .secondary_nav button {
    display: inline-block;
    margin-right: 15px;
  }

  /* Table Styling */
  th {
    padding: 0 8px;
    text-align: center;
    background: #f8fbfd;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
    height: 37px;
  }
  tr {
    margin-bottom: 8px;
  }
  td {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
    height: 56px;
  }
  .view_btn {
    border: 2px solid #2667ff;
    border-radius: 2px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #2667ff;
    padding: 6px 20px;
    margin-right: 10px;
  }

  .view_btn:hover {
    background: #faf9f8;
  }

  @media screen and (max-width: 1024px) {
    grid-template-rows: 0.2fr 0.11fr 0.15fr 1fr;

    .page_heading {
        grid-template-columns: 1fr;
    }
    .btns {
        justify-self: center;
        margin: auto auto;
    }
    .add_btn {
        padding: 6px 10px;
        font-size: 16px;
    }
  }
`;

export default UserAssessmentListCompleted;
