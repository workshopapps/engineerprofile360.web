import React from "react"
import styles from "../homeProducts/HomeProduct.module.css"
import Setting from "../../../../assets/icons/setting.svg"
import Arrows from "../../../../assets/icons/arrows.svg"
import Checkbox from "../../../../assets/icons/checkbox.svg"

const ProductCard = ({ src, title, description }) => {
  return (
    <div className={styles.product_card}>
      <div>
        <img src={src} alt="" height={"100%"} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomeProduct() {
  return (
    <div className={styles.product_container}>
      <h1>
        Product Core <br /> Features.
        <div className={styles.product_card_container}>
          <ProductCard
            src={Setting}
            title="Custom Assessment Parameters"
            description="Test Your Engineers On The Things That Matter The Most To Your Company’s Growth."
          />
          <div className={styles.displaced}>
            <ProductCard
              src={Arrows}
              title="Automated evaluations and scoring"
              description="Get clear and intuitive evelauations for every member of your team in a fully automated system that does all the work."
            />
          </div>

          <ProductCard
            src={Checkbox}
            title="All-inclusive assessments"
            description="skript tests are simple to take and can be used across a variety of engineering teams."
          />
        </div>
      </h1>
    </div>
  )
}
