import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <h2>Product Growth Goals</h2>
      <div className={styles.wrapper}>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <small>companies</small>
            <h3>120+</h3>
            <p>assess their software engineering team.</p>
          </div>
          <div className={styles.number}>
            <small>user</small>
            <h3>1k+</h3>
            <p>assess, monitor and develope their skills.</p>
          </div>
          <div className={styles.number}>
            <small>feedback</small>
            <h3>200+</h3>
            <p>Get quality automated assessment for their team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
