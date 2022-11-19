import arrow from '../../assets/images/vuesax.png'
import './BlogCard.scss';
export function BlogCard(props){
    return(
        <div id="blog">
            <img src={props.src} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>Read more </a>
        </div>
    )
}