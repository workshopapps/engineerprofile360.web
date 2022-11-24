import React from "react";
import styled from "styled-components";

import logo from "../../../../assets/images/logo.svg";

const AuthTitle = () => {
    return(
        <AuthTitleCon>
            <img src={logo} alt="" />
        </AuthTitleCon>
    );
};

export default AuthTitle;

const AuthTitleCon = styled.div`

`;
