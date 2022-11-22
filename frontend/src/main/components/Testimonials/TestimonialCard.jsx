import "./TestimonialCard.css"
export default function TestimonialCard(props){
    return(
        <div className="test-card">
            <p className="testimonial-words">{props.testimonial}</p>
            <div className="testimonial-profile">
                <img src={props.image} alt="" />
                <div>
                    <h3 className="testimonial-name">{props.name}</h3>
                    <p className="testimonial-role">{props.role}-{props.Company},{props.location}</p>
                </div>
            </div>
        </div>
    )
}