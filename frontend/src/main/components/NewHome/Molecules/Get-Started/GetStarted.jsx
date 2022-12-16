import styles from "./GetStarted.module.css";
import {Link} from "react-router-dom";

const GetStarted = () => {
  return (
    <div className={styles.get}>
      <div className={styles.wrapper}>
        <h2>Ready to get started?</h2>
        <p>
          Stay ahead of your engineering teams’ performance and skills by
          Sheduling an online demo and learn how skript can help your company.
          One of our solutions specialists will show you the platform and answer
          any questions you have.
        </p>
        <Link to="/demo">
        <button className={styles.btn}>Request a Demo</button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
