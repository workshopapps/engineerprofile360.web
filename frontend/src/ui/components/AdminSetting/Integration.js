import notion_logo from "../../../assets/images/app/Notion.png";
import github_logo from "../../../assets/images/app/Github.png";
import figma_logo from "../../../assets/images/app/Figma.png";
import linear_logo from "../../../assets/images/app/Linear.png";
import stackOverflow_logo from "../../../assets/images/app/Stack Overflow.png";
import kaggle_logo from "../../../assets/images/app/Kaggle.png";
import styled from "styled-components";

export const IntegrationItem = ({ logo, title, info }) => {
  return (
    <Container>
      <img src={logo} alt={logo} />
      <div>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div>
        <label>Learn more</label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </Container>
  );
};

const Integrations = () => {
  return (
    <>
      <MainContainer>
        <IntegrationItem
          logo={notion_logo}
          title={"Notion"}
          info={"Embed notion pages, notes in projects and assesment resources"}
        />
        <IntegrationItem
          logo={github_logo}
          title={"Github"}
          info={"Link pull request and automate workflow"}
        />
        <IntegrationItem
          logo={figma_logo}
          title={"Figma"}
          info={"Link pull request and automate workflow"}
        />
        <IntegrationItem
          logo={linear_logo}
          title={"Linear"}
          info={"Embed live project tracking, team task and sprint"}
        />
        <IntegrationItem
          logo={stackOverflow_logo}
          title={"Stack overflow"}
          info={"Find answers to projects review and preparatory questions"}
        />
        <IntegrationItem
          logo={kaggle_logo}
          title={"Kaggle"}
          info={
            "Find and publish data sets with teams, explore and build models"
          }
        />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 100px;
  row-gap: 15px;
  margin-top: 20px;
`;

const Container = styled.div`
  height: 100px;
  border: 3px solid rgba(96, 94, 92, 0.2);
  border-radius: 8px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  align-items: center;
  column-gap: 16px;

  img {
    width: 40px;
    height: 40px;

    @media screen and (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }

  div:first-of-type {
    display: grid;
    row-gap: 10px;

    h2 {
      font-size: 18px;
      color: #323130;
    }

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  div:nth-child(3) {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 5px;

      label:first-of-type {
        font-size: 14px;
      }
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 1px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #141ae9;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #141ae9;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export default Integrations;
