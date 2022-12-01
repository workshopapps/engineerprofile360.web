import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import success from "../../../assets/images/img_done.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { TruckRemove } from "iconsax-react";
import { BsFileEasel } from "react-icons/bs";

const AdminEmailVerified = () => {
  const [isError, setIsError] = useState(false);
  const { user_id, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(user_id, token);
        const response = await axios.get(`auth/verify/${user_id}/${token}`);

        if (response.data.errorState === true) {
          throw new Error();
        }
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else {
          setIsError(true);
          showErrorToast(err.response.data.message);
        }
      }
    };

    verifyEmail();
  }, [token, user_id]);

  return (
    <>
      <ResponseContainer>
        {
          isError ? (
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
