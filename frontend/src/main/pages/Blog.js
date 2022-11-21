import { BlogCard } from "../../compnents/sections/BlogCard"
import "./blog.css"
import { Link } from "react-router-dom"
import frame1 from "../../assets/images/dp1.png"
import frame2 from "../../assets/images/frame2.png"
import frame3 from "../../assets/images/frame3.png"
import frame4 from "../../assets/images/frame4.png"
import frame5 from "../../assets/images/frame5.png"
import frame6 from "../../assets/images/frame6.png"
import frame7 from "../../assets/images/frame7.png"
import frame8 from "../../assets/images/frame8.png"
import frame9 from "../../assets/images/frame9.png"
import dp from "../../assets/images/dp.png"
import dp2 from "../../assets/images/dp2.png"
import dp3 from "../../assets/images/dp3.png"
export function Blog() {
  return (
    <div id="blogPage">
      <div id="dropdown">
        <select name="select" id="select">
          <option value="all">All</option>
          <option value="">Recruitment and Sourcing</option>
          <option value="">Talent Management</option>
          <option value="">Performance Management</option>
          <option value="">Talents Analytics</option>
          <option value="">Employee Engagement</option>
          <option value="">Team Engagement</option>
        </select>
      </div>
      <div id="blognav">
        <ul>
          <li>All</li>
          <li>Recruitment and Sourcing</li>
          <li>Talent Management</li>
          <li>Performance Management</li>
          <li>Talents Analytics</li>
          <li>Employee Engagement</li>
          <li>Team Engagement</li>
        </ul>
      </div>
      <div className="bloglist">
        <h1>Explore The Many Hidden Potentials of Your Staff</h1>
        <div id="cards">
          <BlogCard
            src={frame1}
            link="./skillaquisition"
            blog="Skill Aquisition"
            time="8"
            title="6 High-Demand skills Engineers must have in 2023"
            description="Engineers bridge the gap between scientific discoveries amd commercial applications thatEngaged  me.."
            displayPicture={dp}
            name="Mike Idah"
            date="8, June, 2022"
          />
          <BlogCard
            src={frame2}
            blog="Recruitment & Sourcing"
            time="10"
            title="Strategic HR Management and Hiring Process"
            description="When people think of Human Resource, they usually think of duties like payroll, recruitment and outsourci..."
            displayPicture={dp2}
            name="Flem Rogers"
            date="12, July, 2022"
          />
          <BlogCard
            src={frame3}
            blog="Emplpoyment Engagement"
            time="3"
            title="Benefits of Adopting Digital HR Onboarding Software"
            description="You are well aware that onboarding new employees is no easy feat- it is not a fast and straightfoward proc..."
            displayPicture={dp3}
            name="Joseph Jacob"
            date="11, August, 2022"
          />
          <BlogCard
            src={frame4}
            blog="Recruitment & Sourcing"
            time="10"
            title="Improve Employee Engagement during Onboarding"
            description="Engaged employees make a difference between a companuy and that is just getting along and the on..."
            displayPicture={dp2}
            name="Flem Rogers"
            date="12, July, 2022"
          />
          <BlogCard
            src={frame5}
            blog="Emplpoyment Engagement"
            time="5"
            title="Tips for Niche Talent Aquisition"
            description="With niche recruitment, you cover one industry or a few industries. You specialize in the smaller areas..."
            displayPicture={dp3}
            name="Joseph Jacob"
            date="11, August, 2021"
          />
          <BlogCard
            src={frame6}
            blog="Talent Aquisition"
            time="3"
            title="How Companies get better with Efficient Talent Evaluation"
            description="With the rise of more engineering talents, it is important to constantly assess talents for the evolut..."
            displayPicture={dp}
            name="Mike Idah"
            date="8, June, 2022"
          />
          <BlogCard
            src={frame7}
            blog="Talent Evaluation"
            time="10"
            title="5 of the Best tools for Evalutating Engineers"
            description="With the dire need for skilled professionals in a fast-paced working environment, the need for human..."
            displayPicture={dp2}
            name="Flem Rogers"
            date="12, July, 2021"
          />
          <BlogCard
            src={frame8}
            blog="Emplpoyment Engagement"
            time="5"
            title="Obstacles to manage employee performance"
            description="Skill stands out amongst the best  evaluator tools with its unique features and scalable assessement..."
            displayPicture={dp3}
            name="Joseph Jacob"
            date="11, August, 2021"
          />
          <BlogCard
            src={frame9}
            blog="Employee Experience"
            time="8"
            title="Impact of Organizational Culture on Hiring"
            description="When you think about your ideal job, you probably aren’t just thinking about your favorite role in a w ..."
            displayPicture={dp}
            name="Ken Okonkwo"
            date="8, June, 2020"
          />
        </div>
      </div>
      <div className="subscribe">
        <h1>Subscribe to our newsletter</h1>
        <div id="input">
          <input type="text" name="" id="" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>
          By clicking Sign Up, you are confirmimg that you agree with our terms
          and conditions
        </p>
      </div>
    </div>
  )
}
