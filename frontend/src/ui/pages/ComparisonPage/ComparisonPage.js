import React from 'react'
import './ComparisonPage.css';
import headerpic from '../../../assets/images/comparison.png';
import logo from '../../../assets/images/skriptlogo.svg';
import BambooHR from '../../../assets/images/bamboo.png';


export const ComparisonPage = () => {
  return (
    <div>
        <div className='comparisonHeading'>
            <h1>Why choose Skript over BambooHR for evaluating engineering teams?</h1>
        </div>

        <div className='comparisonHeader'>
            <div className='firstpic'>
                <img src={headerpic} alt="" />
            </div>
            <div>
                <h1 id='firstParagraph'>While we won’t deny how amazing a product BambooHR is and its many benefits to companies looking for an integrated tool for HRIS,
                     we have built Skript to cater to engineering teams that want specificity and in-depth performance evaluation and development.
                </h1>
                <p>There are lots of attributes that are particular to the engineering sector that a generic tool like BambooHR can easily miss,
                     not to mention the fact that it ships with many bells and whistles which makes it a very expensive option that may focus on what the team really needs - performance evaluations geared towards team improvement.
                </p>
                <p>Skript has been built to hone in on the engineering industry and its sub-sectors, hence the assessment questions, reporting style and focus of evaluation are 100% based on what is relevant to engineering teams.
            
                </p>
                <button>Request a Demo</button>
            </div>
        </div>

        <div className='secondHeader'>
            <div>
                <h1><span>Skrpit</span> is Industry-focused, not country-focused assessment.</h1>
                <p>Rather than make generic assessment tests for companies in a particular country like BambooHR does, Skript tailors its assessments to the needs of the engineering industry and makes them relevant all over the world with multi-language support.</p>
            </div>
            <div>
                <img src={headerpic} alt="" />
            </div>
        </div>

        <div className='secondHeader thirdheader '>
            <div>
                <img src={headerpic} alt="" />
            </div>
            <div>
                <h1>Clear and affordable pricing.</h1>
                <p>Skript is very keen on transparency which is why we have a clear pricing system for regular plans and a clear process for enterprise billing. Our goal is to make the right solutions affordable for the teams that need them, whether it’s 10 or 1000 people teams.</p>
            </div>
        </div>

        <div className='secondHeader fourtheader'>
            <div>
                <img src={headerpic} alt="" />
            </div>
            <div>
                <h1>Detailed performance evaluation.</h1>
                <p>Siince we are focused on the engineerng industry, we have become subject matter experts and this makes our assessments more detailed for engineers and more inclined to the technical and professional needs of the industry.</p>
            </div>
        </div>

        <div className='features'>
            <h1>Features 1-to-1 comparison</h1>
            <p>Since we are focused on the engineerng industry, we have become subject matter experts and this makes our assessments more detailed for engineers and more inclined to the technical and professional needs of the industry.</p>
        </div>
        
        <div className='tablelist'>
            <table>
                <tr className='tableheading'>
                    <td>Pricing</td>
                    <td><img src={logo} alt="" /></td>
                    <td><img src={BambooHR} alt="" /></td>
                </tr>

                <div className='tablecontent'>
                    <tr>
                        <td>Regular</td>
                        <td>$5/employee<br/>/month</td>
                        <td>$5/user/month</td>
                    </tr>
                    <tr>
                        <td>Enterprise</td>
                        <td>Custom quote <br/>All features included</td>
                        <td>$7/user/month +$2/user/<br/>month for full <br/>features</td>
                    </tr>
                </div>
            </table>

            <table>
                <tr className='tableheading'>
                    <td>Evaluation</td>
                </tr>

                <div className='tablecontent'>

                    <tr>
                        <td classname='column'>Customizable Questions</td>
                        <td >/</td>
                        <td >/</td>
                    </tr>
                    <tr>
                        <td>Industry Specific Assessment</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>360 Review</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>Multiple Assessment Angles</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                </div>
            </table>

            <table>
                <tr className='tableheading'>
                    <td>Application Features</td>
                </tr>

                <div className='tablecontent'>
                    <tr>
                        <td>Ease Of Use</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Engagement Tracking</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>Goal Management</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>Reporting/ Analytics</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Automated Reminders</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Employee Database</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Third-Party Integrations</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Intuitive Dashboard</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Scheduled Assessments</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Value-Added Services</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Negative Feedback Management</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Real-time Reporting</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Mobile Version</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Multiple Language Support</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                </div>
            </table>

            <table>
                <tr className='tableheading'>
                    <td>Customer support</td>
                </tr>

                <div className='tablecontent'>

                    <tr>
                        <td>Ease Of Use</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Email Support</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>Telephone</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>                
                    <tr>
                        <td>Chat</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>Dedicated Support</td>
                        <td>/</td>
                        <td>/</td>
                    </tr>
                </div>
            </table>
        </div>

        <div className='competitor'>
            <h1>What They Say
            About us against our competitors.</h1>

            <div>
                <p id='application'>“For this period we've been using Skript, running a small team of dedicated and capable engineers has never been so interesting and enjoyable. Skript makes it easy to see the team’s work application and technical understanding in their fields. This has helped us reshuffle the team optimally.
                <br/>Their newfound enthusiasm and commitment is infectious, and it's exciting to see them complete their mission, and overcome several technical difficulties and issues.”</p>
            </div>

            <p>Muhammad Aisha, London</p>
        </div>

        <div className='frequentlyAsked'>
            <h2>Frequently Asked Questions</h2>

            <div className='questions'>
                <p>Can I migrate my existing employee data easily from BambooHR to Skript?</p>
                <p>Yes, you can easily. Export your employee data on BambooHR as a CSV file, then upload that file on Skript.</p>
            </div>
            <div className='questions'>
                <p>Are there any hidden costs on Skript?</p>
                <p>None whatsoever. What you see is what you get. Enterprise package starts at 500 employees and for that you get a custom quote, otherwise, it’s $5 per employee per month.</p>
            </div>
            <div className='questions'>
                <p>Does Skript offer 24/7 support?</p>
                <p>We offer support to customers that is available round-the-clock through our knowledgebase, help center, live chat, email and telephone support.</p>
            </div>
        </div>

        <div className='getReady'>
            <h2>Ready to get started?</h2>
            <p>Start your journey to increased engineer productivity and widespread organizational growth today.</p>
            <button>Request A Demo</button>
        </div>
    </div>
  )
}
