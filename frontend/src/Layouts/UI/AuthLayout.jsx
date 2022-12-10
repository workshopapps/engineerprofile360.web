import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

import { Container } from "../../styles/reusableElements.styled";
import Logo from "../../components/Logo";

const AuthLayout = () => {
  return (
    <>
      <Header as="header">
        <Link to="/">
          <Logo size="sm" />
        </Link>
      </Header>
      <AuthLayoutCon>
        <Outlet />
      </AuthLayoutCon>
    </>
  );
};

export default AuthLayout;

const Header = styled(Container)`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthLayoutCon = styled(Container)`
  max-width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  // min-height: calc(100vh - 96px);
`;
