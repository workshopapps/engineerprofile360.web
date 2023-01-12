import styles from "./Hero.module.css";
import hero from "../../assets/hero_image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
          <span>Assess</span> Your Engineering <br /> <span> Teams’</span>{" "}
          Strength
        </h1>
        <p>
          Get started with <span>Eval360</span> innovative performance <br />{" "}
          solutions for engineering teams
        </p>
        <Link to="/demo">
          <button>Request A Demo</button>
        </Link>
      </div>
      <div className={styles.image}>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
