import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sms from '../assets/icons/sms.png'


function TermsAndService() {
  return (
    <div className=' py-16'>
      <div className='container'>
        <div className='mb-5'>
          <h1 className=' mb-1 font-semibold text-3xl'>Terms of <span className=' text-[#295a9a]'>Service</span></h1>
          <p className=' text-xs'>Last updated on November 15, 2022</p>
        </div>

        <div>
          <p className='text-lg mb-5'>
            PLEASE READ THESE CONDITIONS CAREFULLY
            BEFORE USING THE 360 ENGINEERING SERVICES. 
            BY USING THE ENGINEERING SERVICES SIGNIFY 
            YOUR AGREEMENT TO BE BOUND WITH THESE SITE 
            TERMS OF SERVICE
          </p>
        </div>

        <div>
          <h2 className='font-semibold mb-3 text-2xl'>Website Terms</h2>
          <p className=' text-xl mb-3'>
            The Website terms basically explains how a 
            visitor can use the website and understand 
            the content provided by the Institution of Mechanical 
            Engineers. <br />
            Using the website comes with Agreement bound 
            with the terms which have to be complied with; 
            failure to adhere to comes with withdrawal from 
            the website.
          </p>
        </div>

        <div>
          <h2 className='font-semibold mb-3 text-2xl'>Use of Website</h2>
          <p className=' text-xl mb-3'>
            The Website is made available free of charge. 
            There's no guarantee whatsoever that the site or the 
            contents on it would be made available on a regular basis. 
            The site can be suspended or restricted for any business or 
            operational updates. In occasion of this, a prior notice would be made.
            <ul>
              <li className=' list-disc'>
                Every User is responsible to ensure that any other 
                individual that access the site through their internet 
                connection should comply with the terms and conditions.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className='font-semibold mb-3 text-2xl'>Safety and Regulations</h2>
          <p className=' text-xl mb-3'>
            As part of security procedures, some piece of information and 
            password would be provided which must be treated as confidential 
            and not disclosed to a third party. Failure to comply with any of the 
            provisions of the terms of use would result to the user identification 
            code or password being disabled
          </p>
        </div>

        <div className=' text-black'>
          <h2 className='font-semibold mb-3 text-2xl'>License</h2>
          <p className=' text-xl mb-3'>
            As the licensed owner of the intellectual property rights on our 
            site and the published material. The works are protected by copyright 
            laws and treaties around the world. All rights are reserved. <br />
            A copy or page can be downloaded from the site for personal use. No modification 
            of the paper and digital copies downloaded in any way. No illustrations, photographs, 
            video or any audio sequence or graphics. Our status and that of any other contributor 
            as the legitimate authors of content must be acknowledged; except for where the 
            content is user-generated. <br />
            No part of the content on the site must be used for commercial purposes without obtaining 
            a license from the owners. <br />
            If any content is printed, copied, downloaded, being shared or repost in breach of the terms 
            of use, a users right to access the site will be ceased immediately and at our option return 
            or destroy copies of the materials.
          </p>
        </div>

        <div className=' mt-20 mb-40'>
          <div className=' border-2 d-flex px-3 py-2 rounded-sm w-fit float-right'>
            <img src={Sms} alt='Sms icon' className=' pr-2' />
            <span>Questions? Leave a message</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndService
