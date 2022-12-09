import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Container, Button } from "../../../../styles/reusableElements.styled";
import AuthTitle from "../../../components/molecules/Auth/AuthTitle";

import success from "../../../../assets/images/img_done.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";
import { TruckRemove } from "iconsax-react";
import { BsFileEasel } from "react-icons/bs";

const EmailVerified = () => {
  const [isError, setIsError] = useState(false);
  const { user_id, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(user_id, token);
        if (user_id && token) {
          const response = await axios.post(`auth/verify/${user_id}/${token}`);
          console.log(response);
        }
      } catch (err) {
        console.log(err);
        if (!err?.response) {
          showErrorToast("No Server Response");
        }
        if (err.response.data.message === "verify email") {
          setIsError(true);
          showErrorToast("A verification link has been sent to your account");
        }
        if (err.response.data.message === "Invalid verification link") {
          setIsError(true);
          showErrorToast(err.response.data.message);
        }
        if (err.response.data.message === "Verification Link expired") {
          setIsError(true);
          showErrorToast(err.response.data.message);
        }
      }
    };

    verifyEmail();
  }, []);

  return (
    <>
      <ResponseContainer>
        {isError === false ? (
          <>
            <img src={success} alt=" " />
            <AuthTitle
              title="Success"
              text="Your account has been verified succesfully"
            />
            <Link to="/login">
              <Button $size="md" type="button">
                Continue
              </Button>
            </Link>
          </>
        ) : (
          "Error"
        )}
      </ResponseContainer>
    </>
  );
};

export default EmailVerified;

const ResponseContainer = styled(Container)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
`;
