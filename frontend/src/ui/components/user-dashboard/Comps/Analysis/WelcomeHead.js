import React from "react"
import styled from "styled-components"

const Breadcrumbs = styled.div`
  display: flex;
  gap: 0.3em;
  font-size: 1.1rem #{&} > p {
    color: #605e5c;
  }

  #{&} ~ p {
    font-size: 2rem;
    font-weight: regular;
    color: #6e6e6e;
    margin-top: 0;
  }
`

const WelcomeHead = () => {
  return (
    <div>
      <Breadcrumbs>
        <p>Dashboard</p>
        <p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.939739 11.78C0.813073 11.78 0.686406 11.7333 0.586406 11.6333C0.393073 11.44 0.393073 11.12 0.586406 10.9267L4.93307 6.58001C5.25307 6.26001 5.25307 5.74001 4.93307 5.42001L0.586406 1.07335C0.393073 0.880013 0.393073 0.560013 0.586406 0.36668C0.77974 0.173346 1.09974 0.173346 1.29307 0.36668L5.63974 4.71335C5.97974 5.05335 6.17307 5.51335 6.17307 6.00001C6.17307 6.48668 5.98641 6.94668 5.63974 7.28668L1.29307 11.6333C1.19307 11.7267 1.06641 11.78 0.939739 11.78Z"
              fill="#605E5C"
            />
          </svg>
        </p>
      </Breadcrumbs>

      <p>Welcome back, Mark</p>
    </div>
  )
}

export default WelcomeHead
