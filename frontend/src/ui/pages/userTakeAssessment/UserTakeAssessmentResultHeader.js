import React from "react";
import styles from "./UserTakeAssessment.module.css";
import PageInfo from "../../../ui/components/molecules/PageInfo";

function UserTakeAssessmentResultHeader({correctA='' ,totalQ=''}) {
  return (
    <>
      <div className={styles.Filter_wrapper}>
        <div className={styles.Filter_nav}> 
        <PageInfo
        breadcrumb={["Assessment", "Assessment Result"]}
        pageTitle=""
      />
        </div>
          <div>
            <p> 
              <b>Here are your responses to your assessment and your overall score</b>
            </p>
          </div>

          <div className={styles.Filter_flex_score}>
            <div>
            <h1>{`${correctA} / ${totalQ}`}</h1>
            Total Score
            </div>
          </div>
        </div>
    </>
  );
}

export default UserTakeAssessmentResultHeader;