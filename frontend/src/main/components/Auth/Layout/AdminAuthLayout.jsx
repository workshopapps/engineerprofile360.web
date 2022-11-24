import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import {Container} from "../../../../styles/reusableElements.styled";
import logo from "../../../../assets/images/logo.svg";

const AdminAuthLayout = () => {
  return (
    <>
      <Header as="header">
        <img src={logo} alt="" />
      </Header>
      {/* <AuthLayoutCon><Outlet /></AuthLayoutCon> */}
    </>
  );
};

export default AdminAuthLayout;


const Header = styled(Container)`
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
`;