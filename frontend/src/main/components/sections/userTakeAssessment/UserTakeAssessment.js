import React from "react";
import styles from "./UserTakeAssessment.module.css";
import TimerSvg from "../../../../assets//icons/app/timer-start.svg";

export default function UserTakeAssessment() {
  return (
    <div className={styles.UserTakeAssessment_container}>
      <div className={styles.Filter_wrapper}>
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
            00:25:30
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

      <div className={styles.Questions}>
        <form>
          <div>
            <p>
              1 . What is the first step in the software development lifecycle?
            </p>
            <input
              type="radio"
              id="question1a"
              name="question1"
              value="System Design"
            />
            <label htmlFor="question1a">System Design</label>
            <br />
            <input
              type="radio"
              id="question1b"
              name="question1"
              value="Coding"
            />
            <label htmlFor="question1b">Coding</label>
            <br />
            <input
              type="radio"
              id="question1c"
              name="question1"
              value="System Testing"
            />
            <label htmlFor="question1c">System Testing</label>
            <br />
            <input
              type="radio"
              id="question1d"
              name="question1"
              value="Preliminary investigation and Analysis "
            />
            <label htmlFor="question1d">
              Preliminary investigation and Analysis{" "}
            </label>
          </div>
          <br />

          <div>
            <p>
              2 . Which of the following refers to internal software equality?
            </p>
            <input
              type="radio"
              id="question2a"
              name="question1"
              value="Reusability"
            />
            <label htmlFor="question2a">Reusability</label>
            <br />
            <input
              type="radio"
              id="question2n"
              name="question1"
              value="Scalability"
            />
            <label htmlFor="question2b">Scalability</label>
            <br />
            <input type="radio" id="q3" name="question2c" value="Reliability" />
            <label htmlFor="question2c">Reliability</label>
            <br />
            <input type="radio" id="q4" name="question2d" value="Usability" />
            <label htmlFor="question2d">Usability </label>
          </div>
          <br />

          <div>
            <p>3. What does RAD stands for?</p>
            <input
              type="radio"
              id="question3a"
              name="question1"
              value="Rapid Application Development"
            />
            <label htmlFor="question3a">Rapid Application Development</label>
            <br />
            <input
              type="radio"
              id="question3b"
              name="question1"
              value="Rapid Application Document"
            />
            <label htmlFor="question3b">Rapid Application Document</label>
            <br />
            <input
              type="radio"
              id="question3c"
              name="question1"
              value="Relative Application Development"
            />
            <label htmlFor="question3c">Relative Application Development</label>
            <br />
            <input
              type="radio"
              id="question3d"
              name="question1"
              value="None of the above "
            />
            <label htmlFor="question3d">None of the above </label>
          </div>
          <br />

          <div>
            <p>
              4 . Which of the following prototype is not associated with
              prototyping Model?
            </p>
            <input
              type="radio"
              id="question4a"
              name="question1"
              value="Vertical Prototype"
            />
            <label htmlFor="question4a">Vertical Prototype</label>
            <br />
            <input
              type="radio"
              id="question4b"
              name="question1"
              value=" Horizontal Prototype"
            />
            <label htmlFor="question4b"> Horizontal Prototype</label>
            <br />
            <input
              type="radio"
              id="question4c"
              name="question1"
              value=" Domain Prototype"
            />
            <label htmlFor="question4c"> Domain Prototype</label>
            <br />
            <input
              type="radio"
              id="question4d"
              name="question1"
              value="Diagonal Prototype"
            />
            <label htmlFor="question4d">Diagonal Prototype</label>
          </div>
          <br />

          <div className={styles.Filter_Next_Submit}>
            <input type="button" className={styles.Button_next} value="Next" />
            <input
              type="button"
              className={styles.Button_submit}
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
