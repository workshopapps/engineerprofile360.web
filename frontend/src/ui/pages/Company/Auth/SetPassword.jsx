import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../../../api/axios";

import {
  Container,
  Button,
  Loader,
} from "../../../../styles/reusableElements.styled";

import AuthTitle from "../../../components/molecules/Auth/AuthTitle";
import InputField from "../../../../components/InputField";

import useInputValidation from "../../../../hooks/useInputValidation";
import { showErrorToast } from "../../../../helpers/helper";

import eyeSvg from "../../../../assets/icons/eye.svg";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const {
    formData,
    changeInputValue,
    onBlur,
    setFormData,
    errors,
    touched,
    setTouched,
    validation,
  } = useInputValidation({
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);
  const uid = queryParameters.get("uid");
  const token = queryParameters.get("token");

  const navigate = useNavigate();

  const onChange = (e) => {
    changeInputValue(e);
  };

  useEffect(() => {
    const verifyLink = async () => {
      try {
        const response = await axios.post(
          `auth/password/reset/${uid}/${token}`,
          JSON.stringify({
            verify: true,
          })
        );
        console.log(uid);
        console.log(response.data);
      } catch (err) {
        if (!err.response) {
          showErrorToast("No server response");
        } else {
          setIsError(true);
          showErrorToast(err.response.data.message);
        }
      }
    };

    verifyLink();
  }, [uid, token]);

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      validation(formData);
      if (Object.keys(errors).length > 0) {
        setTouched({
          password: true,
          confirmPassword: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setTouched({
          password: false,
          confirmPassword: false,
        });

        setIsSubmitted(true);

        const { password: new_password } = formData;
        const type = "Organization";
        const response = await axios.post(
          `auth/password/reset/${uid}/${token}`,
          JSON.stringify({
            new_password,
            type,
            verify: false,
          }) /* Second Parameter is the type param: Organization | employee  */
        );

        if (response.data.errorState === false) {
          navigate("/reset-password-success");
        }

        // Clear input fields
        setFormData({
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      if (!err?.response) {
        setPasswordError("No Server Response");
      } else if (err.response?.errorState === true) {
        setPasswordError(err.response.error);
        showErrorToast(passwordError);
      }
    } finally {
      setIsSubmitted(false);
    }
  };

  const { password, confirmPassword } = formData;

  return (
    <>
      <FormContainer>
        {isError === false ? (
          <>
            <AuthTitle
              title="Password"
              text="Set up a password for your account"
            />
            <SetPasswordForm onSubmit={(e) => handleSubmit(e, formData)}>
              <InputField
                $size="md"
                type={showPassword ? "password" : "text"}
                label="Password"
                id="password"
                placeholder="Enter password"
                value={password}
                handleChange={onChange}
                handleBlur={onBlur}
                error={
                  errors && touched.password && errors.password?.length > 0
                }
                endIcon={
                  <img
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    src={eyeSvg}
                    alt=""
                  />
                }
                helperText={
                  errors && errors.password && touched.password
                    ? errors.password
                    : ""
                }
              />
              <Spans>
                {errors && touched.password ? (
                  <>
                    {errors.passwordLength ||
                    errors.passwordUppercase ||
                    errors.passwordNumber ||
                    errors.passwordCharacter ? (
                      <p>Your Password should have:</p>
                    ) : (
                      ""
                    )}

                    <span>{errors.passwordLength}</span>
                    <span>{errors.passwordUppercase}</span>
                    <span>{errors.passwordNumber}</span>
                    <span>{errors.passwordCharacter}</span>
                  </>
                ) : (
                  ""
                )}
              </Spans>
              <InputField
                $size="md"
                type={showPassword ? "password" : "text"}
                label="Re-Enter Password"
                id="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                handleChange={onChange}
                handleBlur={onBlur}
                error={
                  errors &&
                  touched.confirmPassword &&
                  errors.confirmPassword?.length > 0
                }
                endIcon={
                  <img
                    src={eyeSvg}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    alt=""
                  />
                }
                helperText={
                  errors && errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
              />
              <Button
                $size="lg"
                type={isSubmitted ? "button" : "submit"}
                $variant={isSubmitted ? "disabled" : null}
              >
                {isSubmitted ? <Loader /> : "Sign In"}
              </Button>
            </SetPasswordForm>
          </>
        ) : (
          <>Error verifying your link</>
        )}
      </FormContainer>
    </>
  );
};

export default SetPassword;

const FormContainer = styled(Container)`
  width: 100%;
`;

const SetPasswordForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Spans = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  p {
    font-family: inherit;
    font-size: 12px;
  }

  span {
    font-size: 10px;
    font-family: inherit;
    color: ${({ theme }) => theme.palette.status.error.color};
  }
`;
