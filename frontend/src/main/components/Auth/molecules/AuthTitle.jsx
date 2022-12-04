import React from "react";
import styled from "styled-components";

import { Title } from "../../../../styles/reusableElements.styled";

const AuthTitle = ({ title, text }) => {
  return (
    <AuthTitleCon>
      <Title $size="32px" $color="#323130" $weight="600">
        {title}
      </Title>
      <p>{text}</p>
    </AuthTitleCon>
  );
};

export default AuthTitle;

const AuthTitleCon = styled.div`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  p {
    color: #323130;
    font-size: 20px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 20px;
    }

    ${({ theme }) => theme.breakpoints.down("xs")} {
      font-size: 18px;
    }
  }
`;
