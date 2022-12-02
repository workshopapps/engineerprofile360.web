import React from "react";
import TimerSvg from "../../../../assets//icons/app/timer-start.svg";
import { useState, useEffect } from "react";
import styles from "./GuestTakeAssessment.module.css";
import { Outlet } from "react-router-dom";
import PageInfo from "../../../../ui/components/molecules/PageInfo";

function GuestTakeAssessmentHeader() {
  const [time, setTime] = useState((1 / 2) * 60 * 60 * 1000);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let Hours = parseInt(totalHours % 24);

    return `${Hours}: ${minutes}: ${seconds}`;
  };

  return (
    <>
      <div className={styles.Filter_wrapper}>
        <div className={styles.Filter_nav}> 
        <PageInfo
        breadcrumb={["Assessment", "Take Assessment"]}
        pageTitle="Take Assessment"
      />
      <Outlet />
          <div><p>Login ID: 12345</p></div>
        </div>
          <div>
            <p>
              <span className={styles.Text_muted}>Course :</span>30 Minutes
            </p>
            <p>
              <span className={styles.Text_muted}>Department :</span>Tue 3th, Nov
              22
            </p>
          </div>

          <div>
            <p>
              <span className={styles.Text_muted}>Duration :</span>Design thnking
              Process
            </p>
            <p>
              <span className={styles.Text_muted}>Deadline :</span>UX Design
            </p>
          </div>

          <div className={styles.Filter_flex}>
            <img src={TimerSvg} alt="Filter" width={40} />
            <div>
            {getFormattedTime(time)}
              <br /> Timer
            </div>
            <div></div>
          </div>
        </div>

        <div className={styles.Description}>
          <b>Description:</b> This assessment was created to ensure that the
          participant of this test understands the core basics of software
          engineering. This test consists of four stages with 5 questions each.
          The stages include basic general knowledge, backend knowledge, frontend
          knowledge and DevOps Knowledge.
        </div>
    </>
  );
}

export default GuestTakeAssessmentHeader;