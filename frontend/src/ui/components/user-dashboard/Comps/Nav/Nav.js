import React, { useState } from "react"
import Logo from "../Images/Skript logo@5x 2.svg"
import User from "../Images/Frame.png"

import styled from "styled-components"
import ProfileSwitch from "../Others/ProfileSwitch"

const Navstyle = styled.nav`display:flex; width:100vw; min-width:1250px; background:#FFFFFF; padding:.8em 2em; box-sizing:border-box;
 align-items:center; justify-content: space-between; position; border-bottom: .1em solid #EDEBE9;
 position: fixed; top:0; left:0;

 @media (max-width:768px){
  min-width:375px;
  flex-direction:column;
  gap:1rem;
 }
 `
const Userstyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  background: #faf9f8;
  border-radius: 0.5rem;
  padding: 0.4em;
  gap: 0.5rem;
  height: 2em;

  @media (max-width: 768px) {
    width: 100%;
  }

  #{&} p {
    font-size: 0.78rem;
    color: #323130;
    font-weight: semi-bold;
  }
`

const Notify = styled.div`
  padding: 0;
  padding-left: 0.6em;
  border-left: 0.15rem solid #edebe9;

  #{&} svg {
    display: inline-block;
    margin-left: 0.5rem;
  }
`

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  #{&} input {
    display: inline-block;
    width: 65%;
    padding: 1rem;
    padding-left: 3rem;
    border: 0.05rem solid #8a8886;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: black;
  }

  #{&} input::placeholder {
    color: #d9d9d9;
    font-size: 0.8rem;
  }

  #{&} div {
    display: flex;
    align-items: center;
    transform: translateX(2.5rem);
  }
`

const Nav = () => {
  const [ShowSettings, setShowSettings] = useState(false)

  function toggleSettings() {
    setShowSettings(!ShowSettings)
  }
  return (
    <Navstyle>
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <Search>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16797 17.292C4.68464 17.292 1.04297 13.6503 1.04297 9.16699C1.04297 4.68366 4.68464 1.04199 9.16797 1.04199C13.6513 1.04199 17.293 4.68366 17.293 9.16699C17.293 13.6503 13.6513 17.292 9.16797 17.292ZM9.16797 2.29199C5.3763 2.29199 2.29297 5.37533 2.29297 9.16699C2.29297 12.9587 5.3763 16.042 9.16797 16.042C12.9596 16.042 16.043 12.9587 16.043 9.16699C16.043 5.37533 12.9596 2.29199 9.16797 2.29199Z"
              fill="#A19F9D"
            />
            <path
              d="M16.7996 18.9917C16.7329 18.9917 16.6663 18.9833 16.6079 18.975C16.2163 18.925 15.5079 18.6583 15.1079 17.4667C14.8996 16.8417 14.9746 16.2167 15.3163 15.7417C15.6579 15.2667 16.2329 15 16.8913 15C17.7413 15 18.4079 15.325 18.7079 15.9C19.0079 16.475 18.9246 17.2083 18.4496 17.9167C17.8579 18.8083 17.2163 18.9917 16.7996 18.9917ZM16.2996 17.075C16.4413 17.5083 16.6413 17.725 16.7746 17.7417C16.9079 17.7583 17.1579 17.6 17.4163 17.225C17.6579 16.8667 17.6746 16.6083 17.6163 16.4917C17.5579 16.375 17.3246 16.25 16.8913 16.25C16.6329 16.25 16.4413 16.3333 16.3329 16.475C16.2329 16.6167 16.2163 16.8333 16.2996 17.075Z"
              fill="#A19F9D"
            />
          </svg>
        </div>
        <input type="text" placeholder="Search" />
      </Search>

      <Userstyle>
        <div>
          <img src={User} alt="my pic" />
        </div>
        <p>Mark Jilaga</p>
        <Notify>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0175 2.4248C7.25914 2.4248 5.01747 4.66647 5.01747 7.4248V9.83314C5.01747 10.3415 4.80081 11.1165 4.54247 11.5498L3.58414 13.1415C2.99247 14.1248 3.40081 15.2165 4.48414 15.5831C8.07581 16.7831 11.9508 16.7831 15.5425 15.5831C16.5508 15.2498 16.9925 14.0581 16.4425 13.1415L15.4841 11.5498C15.2341 11.1165 15.0175 10.3415 15.0175 9.83314V7.4248C15.0175 4.6748 12.7675 2.4248 10.0175 2.4248Z"
              stroke="#201F1E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M11.5599 2.66621C11.3016 2.59121 11.0349 2.53288 10.7599 2.49954C9.9599 2.39954 9.19323 2.45788 8.47656 2.66621C8.71823 2.04954 9.31823 1.61621 10.0182 1.61621C10.7182 1.61621 11.3182 2.04954 11.5599 2.66621Z"
              stroke="#201F1E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5156 15.8838C12.5156 17.2588 11.3906 18.3838 10.0156 18.3838C9.33229 18.3838 8.69896 18.1005 8.24896 17.6505C7.79896 17.2005 7.51562 16.5671 7.51562 15.8838"
              stroke="#201F1E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleSettings}
          >
            <path
              d="M16.5984 7.45801L11.1651 12.8913C10.5234 13.533 9.47344 13.533 8.83177 12.8913L3.39844 7.45801"
              stroke="#605E5C"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Notify>

        {ShowSettings && <ProfileSwitch />}
      </Userstyle>
    </Navstyle>
  )
}

export default Nav
