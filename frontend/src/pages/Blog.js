import { BlogCard } from "../compnents/sections/BlogCard";
import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/blog2.png';
import './blog.scss'
export function Blog(){
    return(
        <div id="blogPage">
            <div>
                <h1>Read Our Blog.</h1>
                <BlogCard 
                src={blog1}
                title='6 High-Demand Engineering Skills in 2023'
                description='Engineers bridge the gap between scientific discoveries and commercial applications that meet societal and consumer needs. As a vast industry with numerous aspects and specialisations, many transferable and universal skills are useful across the entire spectrum of engineering.
                There are so many misconceptions about engineers, the good, the bad, and the ugly.'
                />
            </div>
            <div>
                <BlogCard
                src={blog2}
                title='How Companies Get Better Talents'
                description="Some popular myths about engineers are that they're all math geeks, they have poor communication skills, they're all men, and they work with machines and not people, amongst others. Unbelievable, right?
                But thanks to evaluation tool, engineering teams can be tested to assess their abilities and can perform at the top of their game using results assessments."
                />
            </div>
        </div>
    )
}