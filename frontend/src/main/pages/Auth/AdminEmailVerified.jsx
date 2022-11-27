import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import success from "../../../assets/images/img_done.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../api/axios";

const AdminEmailVerified = () => {
  const [fetchError, setFetchError] = useState("");
  const isErrorFree = useRef();
  const { user_id, token } = useParams;

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`auth/verify/${user_id}/${token}`);
        if (response?.errorState === false) isErrorFree.current = true;
        else isErrorFree.current = false;
      } catch (err) {
        if (!err?.response) {
          setFetchError("No Server Response");
        }
      }
    };

    verifyEmail();
  }, [token, user_id]);

  return (
    <>
      <ResponseContainer>
        {isErrorFree ? (
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
          ""
        )}
      </ResponseContainer>
    </>
  );
};

export default AdminEmailVerified;

const ResponseContainer = styled(Container)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
`;
