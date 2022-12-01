import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import success from "../../../assets/images/img_done.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";

const AdminEmailVerified = () => {
  const [isErrorFree, setIsErrorFree] = useState(false);
  const { user_id, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(user_id, token);
        const response = await axios.get(`auth/verify/${user_id}/${token}`);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      } finally {
        setIsErrorFree(false);
      }
    };

    verifyEmail();
  }, [token, user_id]);

  return (
    <>
      <ResponseContainer>
        {
          isErrorFree ? (
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
          )
          // (
          // { fetchError }
          // )
        }
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
