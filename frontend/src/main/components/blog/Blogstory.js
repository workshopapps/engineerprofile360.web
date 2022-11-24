import React from "react";
import { BlogCard } from "../blog/BlogCard";
import dp from "../../../assets/images/dp.png";
import dp2 from "../../../assets/images/dp2.png";
import dp3 from "../../../assets/images/dp3.png";
import frame4 from "../../../assets/images/frame4.png";
import frame5 from "../../../assets/images/frame5.png";
import frame6 from "../../../assets/images/frame6.png";
import icons from "../../../assets/images/icons.png";
import desktop from "../../../assets/images/desktop.png";
import avatar from "../../../assets/images/Avatar.png";

import "./blogstory.css";

export default function Blogstory() {
  return (
    <div id="blogstory">
      <img src={desktop} alt="" id="desktop" />
      <div id="path">
        <div>
          <p>Home / Blog / Skill Aquisition</p>
        </div>
        <div>
          <img src={icons} alt="" />
        </div>
      </div>

      <div id="body">
        <h3>High Demand Engineering Skills </h3>
        <p>
          Engineers bridge the gap between scientific discoveries and commercial
          applications that meet societal and consumer needs. As a vast industry
          with numerous aspects and specialisations, many transferable and
          universal skills are useful across the entire spectrum of engineering
        </p>
        <p>
          There are so many misconceptions about engineers, the good, the bad,
          and the ugly.
        </p>
        <p>
          Some popular myths about engineers are that they're all math geeks,
          they have poor communication skills, they're all men, and they work
          with machines and not people, amongst others. Unbelievable, right?
        </p>
        <p>
          But thanks to our Engineering Team 360 skill evaluator tool,
          engineering teams can be tested to assess their abilities and can
          perform at the top of their game using the results from the
          assessments. Knowledge is power after all!
        </p>
        <p>
          We are in a fast-paced and innovative world. Here are the Top 6 skills
          all engineers should have in 2023.
        </p>

        <ul>
          <li>Technical skills</li>
          <li>IT Skills</li>
          <li>Communication Skills</li>
          <li>Problem Solving</li>
          <li>Critical Reasoning</li>
          <li>Leadership Skills</li>
        </ul>
        <p>
          Technical Skills: Technical skills are specific knowledge, techniques,
          or abilities that can be used to perform a task. Typically, technical
          skills are practical. Engineers should have up-to-date technical
          skills to advance in the engineering field..
        </p>
        <p>
          IT Skills: Our world today is a digital one, and the use of digital
          applications is increasing in every field, especially engineering.
          Digital technology will help engineers plan, design, and develop
          projects more adequately than ever before.
        </p>
        <p>
          Communication Skills: Engineers need to be able to communicate and
          listen to ensure that the project is a success and any issues can be
          resolved quickly.
        </p>
        <p>
          Problem-Solving: A large part of the job is for engineers to be able
          to tackle difficult situations, and then find an effective solution to
          the problem. Companies usually want to see that you're capable of
          handling challenges in your day-to-day work.
        </p>
        <p>
          Critical Reasoning: Critical thinking is the ability to think clearly
          and rationally, understanding the logical connection between ideas.
          Being critical allows you to realize where the value is in a piece of
          work and evaluate which points are crucial.
        </p>
        <p>
          Leadership Skills: Leadership skills are also crucial for anyone
          working in the field of engineering, even if they don't explicitly
          hold a leadership role within an organization.
        </p>
        <p>
          Find out if your engineers have these skills using our 360 skill
          evaluator! Which of these skills are paramount for you? We'll be
          waiting to read from you.
        </p>
      </div>

      <div id="profile">
        <img src={avatar} alt="" />
        <p>Micheal Kings</p>
        <p>COO, Hings Contructuon Ltd </p>
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

      <div id="cardContainer">
        <h1>Related Posts</h1>
        <div id="cards">
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
        </div>
        <div id="button">
          <button>View more</button>
        </div>
      </div>
    </div>
  );
}
