import React from "react"
import styled from "styled-components"

const Sidestyle = styled.div`
  height: %;
  background: #ffffff;

  #{&} nav {
    margin-top: 8em;
  }

  #{&} li {
    list-style: none;

    #{&} p {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.3em;
      font-size: 1.15rem;
      color: #323130;

      &:hover {
        color: #2667ff;
      }
    }
  }
`
const SideNav = () => {
  return (
    <Sidestyle>
      <nav>
        <ul>
          <li>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Dashboard
            </p>
          </li>

          <li>
            <p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0117 9.14746H18.2617"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.01953 9.14746L7.76953 9.89746L10.0195 7.64746"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.0117 16.1475H18.2617"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.01953 16.1475L7.76953 16.8975L10.0195 14.6475"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.64062 22.2676H15.6406C20.6406 22.2676 22.6406 20.2676 22.6406 15.2676V9.26758C22.6406 4.26758 20.6406 2.26758 15.6406 2.26758H9.64062C4.64062 2.26758 2.64062 4.26758 2.64062 9.26758V15.2676C2.64062 20.2676 4.64062 22.2676 9.64062 22.2676Z"
                  stroke="#323130"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Assessment
            </p>
          </li>
        </ul>
      </nav>
    </Sidestyle>
  )
}

export default SideNav
