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
