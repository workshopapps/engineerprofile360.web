import styles from "./Decision.module.css";
import board from "../../assets/board.png";
import circle from "../../assets/circle.png";
import {Link} from "react-router-dom";

const Decision = () => {
  return (
    <div className={styles.decision}>
      <img src={circle} alt="circle" className={styles.circle} />
      <div className={styles.image}>
        <img src={board} alt="board" className={styles.board} />
      </div>
      <div className={styles.content}>
        <h2>Make decisions in a flash</h2>
        <p>
          Our assessment tests give engineers and their managers a clear glimpse
          of where they are and what they need to move to the next level of
          growth. No longer do managers need to excessively make use of limited
          time to make important decisions and with a clear overview of the
          team’s abilities, engineering management decisions can be made faster.
        </p>
        <Link to="/demo">
        <button>Request a Demo</button>
        </Link>
      </div>
    </div>
  );
};

export default Decision;
