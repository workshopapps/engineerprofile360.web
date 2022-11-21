export default function TestimonialCard(props){
    return(
        <div>
            <p>{props.testimonial}</p>
            <div>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.role}{props.Company}{props.location}</p>
                </div>
            </div>
        </div>
    )
}