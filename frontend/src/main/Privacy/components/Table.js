import './Table.css'
import React from "react";
import mail from './assets/email.jpg'



export default function Table() {
    return (
      <div>
        
        <div>
      <h1>Skript <span className="Polly">Privacy Policy</span></h1>
      <span className="last">Last updated on November 15, 2022</span>
    </div>
    <div className="content">
      <div className="contain1">
        <p>
          Skript, owned by the mechanic team Axle group and affiliated companies
          described as "we," "our," and "us" on this page, put in a lot of
          effort in managing your data (the information we collect from you),
          and this is why this page exists. This privacy policy page exists to
          help you understand the type of data we collect, why we collect this
          data, how we do it, your rights, and more. We collect details of
          engineers registered by our clients (their employers) and information
          on how they interact with the tests on our platform. The privacy
          policy speaks specifically on these topics:
        </p>
        <ol>
          <li>Data collection</li>
          <li>Use of data</li>
          <li>Data retention</li>
          <li>Data transfer</li>
          <li>Data sharing</li>
          <li>Data security</li>
          <li>Legal basis</li>
          <li>Your data rights</li>
          <li>Links to other sites</li>
          <li>Children privacy</li>
          <li>Privacy policy changes</li>
          <li>Contact us</li>
        </ol>
        <p>
          To avoid doubt, when we use "you" on this page, we're referring to
          visitors, partners, prospective clients, and their engineer employees.
        </p>
      </div>

      <div className="contain2">
        <h2 className="table">TABLE OF CONTENT</h2>
        <ul className="table-content">
          <li>Data collection</li>
          <li>Use of data</li>
          <li>Data retention</li>
          <li>Data transfer</li>
          <li>Data sharing</li>
          <li>Data security</li>
          <li>Legal basis</li>
          <li>Your data rights</li>
          <li>Links to other sites</li>
          <li>Children privacy</li>
          <li>Privacy policy changes</li>
          <li>Contact us</li>
        </ul>
        <button>
        <img src={mail} alt="" />
  Questions? Leave a message
        </button>
      </div>
    </div>
    <div></div>
      </div>
    )
  }
  