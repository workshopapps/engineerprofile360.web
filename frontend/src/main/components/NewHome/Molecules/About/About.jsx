import styles from "./About.module.css";
import quotes from "../../assets/quotes.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={quotes} alt="quotes" className={styles.quotes} />
        <h2>
          What people say about us <span>Eval360</span>
        </h2>
        <div className={styles.card}>
          <p>
            “ Our engineering team saw a faster completion rate on tasks after
            we did a reshuffling responsibilities based on the evaluation
            results from Skript, Now we successfully ship over 90% of projects
            within deadline, an improvement on our 47% completion rate. “
          </p>
          <button>Mark Ezele - HNG Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default About;
