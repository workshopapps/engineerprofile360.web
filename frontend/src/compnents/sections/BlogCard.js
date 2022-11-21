import arrow from "../../assets/images/vuesax.png"
import "./BlogCard.css"
import { Link } from "react-router-dom"
export function BlogCard(props) {
  return (
    <div id="blog">
      <img src={props.src} alt={props.alt} id="blogImage" />
      <div id="blogname">
        <p id="blogtitle">{props.blog}</p>
        <div id="time">
          <div id="span"></div>
          <p id="blogtime">{props.time} mins read</p>
        </div>
      </div>
      <Link to={props.link} id="links">
        <h3>{props.title}</h3>
      </Link>
      <p id="description">{props.description}</p>
      <div id="blogDisplayPicture">
        <img src={props.displayPicture} alt="" />
        <div id="name">
          <p>{props.name}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  )
}
