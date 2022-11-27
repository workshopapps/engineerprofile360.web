import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";
import { showErrorToast } from "../../../helpers/helper";

import eyeSvg from "../../../assets/icons/eye.svg";
import { Loader } from "../../../styles/reusableElements.styled";

const AdminSetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const queryParameters = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const onChange = (e) => {
    changeInputValue(e);
  };

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
          `/auth/password/reset/${queryParameters.get(
            "uid"
          )}/${queryParameters.get("token")}`,
          JSON.stringify({
            new_password,
            type,
          }) /* Second Parameter is the type param: Organization | employee  */
        );

        if (response.data.errorState === false) {
          navigate("/reset-password-success");
        }
        console.log(response.data);

        // Clear input fields
        setFormData({
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      setIsSubmitted(false);
      if (!err?.response) {
        setPasswordError("No Server Response");
      } else if (err.response?.errorState === true) {
        setPasswordError(err.response.error);
        showErrorToast(passwordError);
      }
    }
  };

  const { password, confirmPassword } = formData;

  return (
    <>
      <FormContainer>
        <AuthTitle title="Password" text="Set up a password for your account" />
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
              errors &&
              touched.confirmPassword &&
              errors.confirmPassword?.length > 0
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
            $size="md"
            type={isSubmitted ? "button" : "submit"}
            $variant={isSubmitted ? "disabled" : null}
          >
            {isSubmitted ? <Loader /> : "Sign In"}
          </Button>
        </SetPasswordForm>
      </FormContainer>
    </>
  );
};

export default AdminSetPassword;

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
