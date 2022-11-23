import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 2rem;
  background: #faf9f8;
  opacity: 0.7;
  width: 7%;
  padding:.5em;

  @media (max-width: 768px) {
    top: 11rem;
    opacity: 1;
    width: 40%;
  }

  #{&} a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top:.5em;
    gap: 0.5rem;
    text-decoration: none;
  }
`

const ProfileSwitch = () => {
  return (
    <Container>
      <Link to="/profile">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1341 9.5362C10.0508 9.52786 9.95078 9.52786 9.85911 9.5362C7.87578 9.46953 6.30078 7.84453 6.30078 5.84453C6.30078 3.80286 7.95078 2.14453 10.0008 2.14453C12.0424 2.14453 13.7008 3.80286 13.7008 5.84453C13.6924 7.84453 12.1174 9.46953 10.1341 9.5362Z"
            stroke="#605E5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.96563 12.6115C3.94896 13.9615 3.94896 16.1615 5.96563 17.5032C8.25729 19.0365 12.0156 19.0365 14.3073 17.5032C16.324 16.1532 16.324 13.9532 14.3073 12.6115C12.024 11.0865 8.26562 11.0865 5.96563 12.6115Z"
            stroke="#605E5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Profile</p>
      </Link>

      <Link to="/settings">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.978C11.3807 12.978 12.5 11.8587 12.5 10.478C12.5 9.09732 11.3807 7.97803 10 7.97803C8.61929 7.97803 7.5 9.09732 7.5 10.478C7.5 11.8587 8.61929 12.978 10 12.978Z"
            stroke="#323130"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66797 11.2114V9.74472C1.66797 8.87806 2.3763 8.16139 3.2513 8.16139C4.75964 8.16139 5.3763 7.09472 4.61797 5.78639C4.18464 5.03639 4.44297 4.06139 5.2013 3.62806L6.64297 2.80306C7.3013 2.41139 8.1513 2.64472 8.54297 3.30306L8.63464 3.46139C9.38464 4.76972 10.618 4.76972 11.3763 3.46139L11.468 3.30306C11.8596 2.64472 12.7096 2.41139 13.368 2.80306L14.8096 3.62806C15.568 4.06139 15.8263 5.03639 15.393 5.78639C14.6346 7.09472 15.2513 8.16139 16.7596 8.16139C17.6263 8.16139 18.343 8.86972 18.343 9.74472V11.2114C18.343 12.0781 17.6346 12.7947 16.7596 12.7947C15.2513 12.7947 14.6346 13.8614 15.393 15.1697C15.8263 15.9281 15.568 16.8947 14.8096 17.3281L13.368 18.1531C12.7096 18.5447 11.8596 18.3114 11.468 17.6531L11.3763 17.4947C10.6263 16.1864 9.39297 16.1864 8.63464 17.4947L8.54297 17.6531C8.1513 18.3114 7.3013 18.5447 6.64297 18.1531L5.2013 17.3281C4.44297 16.8947 4.18464 15.9197 4.61797 15.1697C5.3763 13.8614 4.75964 12.7947 3.2513 12.7947C2.3763 12.7947 1.66797 12.0781 1.66797 11.2114Z"
            stroke="#323130"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p>Settings</p>
      </Link>

      <Link to="/logout">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41797 6.77822C7.6763 3.77822 9.21797 2.55322 12.593 2.55322H12.7013C16.4263 2.55322 17.918 4.04489 17.918 7.76989V13.2032C17.918 16.9282 16.4263 18.4199 12.7013 18.4199H12.593C9.24297 18.4199 7.7013 17.2116 7.4263 14.2616"
            stroke="#605E5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.499 10.478H3.01562"
            stroke="#605E5C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.8737 7.68652L2.08203 10.4782L4.8737 13.2699"
            stroke="#605E5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p>Logout</p>
      </Link>
    </Container>
  )
}

export default ProfileSwitch
