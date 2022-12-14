import styles from "./Blog.module.css";
import eng1 from "../../assets/eng1.png";
import eng2 from "../../assets/eng2.png";

const Blog = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.blog}>
        <h2 className={styles.heading}>Read Our Blog</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={eng1} alt="engineer" />
            <h3>6 High-Demand Engineering Skills in 2023</h3>
            <p>
              Engineers bridge the gap between scientific discoveries and
              commercial applications that meet societal and consumer needs. As
              a vast industry with numerous aspects and specialisations, many
              transferable and universal skills are useful across the entire
              spectrum of engineering. There are so many misconceptions about
              engineers, the good, the bad, and the ugly.
            </p>
          </div>
          <div className={styles.card2}>
            <img src={eng2} alt="engineer" />
            <h3>How Companies Get Better Talents</h3>
            <p>
              Some popular myths about engineers are that they're all math
              geeks, they have poor communication skills, they're all men, and
              they work with machines and not people, amongst others.
              Unbelievable, right? But thanks to evaluation tool, engineering
              teams can be tested to assess their abilities and can perform at
              the top of their game using results assessments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
