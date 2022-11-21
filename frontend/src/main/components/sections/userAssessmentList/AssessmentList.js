import React from "react";
import styles from "./AssessmentList.module.css";
import ArrowSvg from "../../../../assets/icons/app/arrow-down.svg";
import FilterSvg from "../../../../assets//icons/app/filter.svg";
import MenuSvg from "../../../../assets//icons/app/menu.svg";
export default function AssessmentList() {
  return (
    <div className={styles.Assessment_container}>
      <div className={styles.Filter_wrapper}>
        <button className={styles.Filter_button}>
          Assessment Type <img src={ArrowSvg} alt="Arrow" width={13} />
        </button>
        <div className={styles.Filter_flex}>
          <button className={styles.Filter_button}>
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
            <td>Introduction to Software Engineering</td>
            <td>Python 101</td>
            <td>30 mins</td>
            <td>25th Apr, 22</td>
            <td>
              <button>Take Test</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Introduction to Software Engineering</td>
            <td>Python 101</td>
            <td>30 mins</td>
            <td>25th Apr, 22</td>
            <td>
              <button>Take Test</button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Introduction to Software Engineering</td>
            <td>Python 101</td>
            <td>30 mins</td>
            <td>25th Apr, 22</td>
            <td>
              <button>Take Test</button>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Introduction to Software Engineering</td>
            <td>Python 101</td>
            <td>30 mins</td>
            <td>25th Apr, 22</td>
            <td>
              <button>Take Test</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
