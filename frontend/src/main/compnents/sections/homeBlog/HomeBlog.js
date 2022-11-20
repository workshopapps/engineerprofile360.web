<<<<<<< HEAD
import React from "react"
import styles from "../homeBlog/HomeBlog.module.css"
import Blog1 from "../../../../assets/images/blog-img1.svg"
import Blog2 from "../../../../assets/images/blog-img2.svg"

const BlogCard = ({ src, title }) => {
  return (
    <div className={styles.blog_card}>
      <img src={src} alt="" />
      <h3>{title}</h3>
    </div>
  )
}

export default function HomeBlog() {
  return (
    <div className={styles.blog_container}>
      <div>
        <h2>
          Read Our <br /> Blog.
        </h2>
        <BlogCard
          src={Blog1}
          title="6 High-Demand Engineering Skills in 2023"
        />
      </div>
      <div>
        <BlogCard src={Blog2} title="How Companies Get Better Talents" />
      </div>
    </div>
  )
}
=======
import React from "react"
import styles from "../homeBlog/HomeBlog.module.css"
import Blog1 from "../../../../assets/images/blog-img1.svg"
import Blog2 from "../../../../assets/images/blog-img2.svg"
import Arrow from "../../../../assets/icons/arrow.svg"

const BlogCard = ({ src, title, description }) => {
  return (
    <div className={styles.blog_card}>
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#/">
        Read more <img src={Arrow} alt="" height={20} />
      </a>
    </div>
  )
}

export default function HomeBlog() {
  return (
    <div className={styles.blog_container}>
      <div>
        <h2>
          Read Our <br /> Blog.
        </h2>
        <BlogCard
          src={Blog1}
          title="6 High-Demand Engineering Skills in 2023"
          description="Engineers bridge the gap between scientific discoveries and commercial applications that meet societal and consumer needs. As a vast industry with numerous aspects and specialisations, many transferable and universal skills are useful across the entire spectrum of engineering.
          There are so many misconceptions about engineers, the good, the bad, and the ugly."
        />
      </div>
      <div>
        <BlogCard
          src={Blog2}
          title="How Companies Get Better Talents"
          description="Some popular myths about engineers are that they're all math geeks, they have poor communication skills, they're all men, and they work with machines and not people, amongst others. Unbelievable, right?
But thanks to evaluation tool, engineering teams can be tested to assess their abilities and can perform at the top of their game using results assessments."
        />
      </div>
    </div>
  )
}
>>>>>>> origin/dev
