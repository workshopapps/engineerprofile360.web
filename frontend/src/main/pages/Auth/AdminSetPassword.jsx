import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";

import eyeSvg from "../../../assets/icons/eye.svg";

const AdminSetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const { formData, changeInputValue, onBlur, errors, touched } =
    useInputValidation({
      password: "",
      confirmPassword: "",
    });

  const onChange = (e) => {
    changeInputValue(e);
  };

  // console.log(errors);
  // console.log(touched);

  const { password, confirmPassword } = formData;

  return (
    <>
      <FormContainer>
        <AuthTitle title="Password" text="Set up a password for your account" />
        <SetPasswordForm>
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
            type={showConfirmPassword ? "password" : "text"}
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
                onClick={() =>
                  setShowConfirmPassword((prevState) => !prevState)
                }
                alt=""
              />
            }
            helperText={
              errors && errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />
          <Button $size="md" type="button">
            Set Password
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
