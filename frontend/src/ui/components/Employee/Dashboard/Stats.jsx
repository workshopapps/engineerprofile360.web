import React from "react";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";
import useAuth from "../../../../hooks/useAuth";
import { Radar } from "react-chartjs-2";
import { Title } from "../../../../styles/reusableElements.styled";

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

const Stats = () => {
  const { auth } = useAuth();
  const [chartDetails, setChartDetails] = React.useState(null);
  const [isChartLoading, setIsChartLoading] = React.useState(true);
  //Get Chart Details
  React.useEffect(() => {
    const getChartDetails = async () => {
      try {
        // const response = await axios.get(`userscore/employee/${auth.id}`);
        const response = await axios.get(
          `userscore/employee/aab92dfa-336d-4d63-8c43-7a9826529988`
        );
        setChartDetails(response.data);
        setIsChartLoading(false);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
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
    labels: [0, 0, 0, 0],
    // labels: chartDetails
    //   ? JSON.parse(chartDetails?.data[0]?.categories?.split("/").join(""))
    //   : [0, 0, 0, 0],
    datasets: [
      {
        label: "Dataset",
        data: chartDetails
          ? chartDetails?.data[0]?.passed_questions
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
              {/* <div>
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
              </div> */}
            </SkillRatingSection>
          )}
        </SkillSection>
        <ChartSection>
          {
            // isChartLoading ? "Loading" :
            <Radar data={data} />
          }
        </ChartSection>
      </StatsContainer>
    </>
  );
};

export default Stats;

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
    padding: 10px 22px;
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
