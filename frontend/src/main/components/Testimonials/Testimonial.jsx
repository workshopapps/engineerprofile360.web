import TestimonialHeader from "./TestimonialHeader"
import TestimonialOverview from "./TestimonialOverview"
import testimonialData from "./testimonialData"
import TestimonialCard from "./TestimonialCard"
import "./Testimonial.css"

export default function Testimonial(){

    const cardTest = testimonialData.map(function(info){
        return <TestimonialCard
          key={info.id}
          {...info}
        />
      })

    return(
        <div className="Testimonial-wrap">
            <TestimonialHeader />
            < TestimonialOverview/>
            <section className="Testimonial-div">
                {cardTest}
            </section>
        </div>
    )
}