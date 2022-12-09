import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../../../api/axios";

import {
  Container,
  Button,
  Loader,
} from "../../../../styles/reusableElements.styled";
import AuthTitle from "../../../components/molecules/Auth/AuthTitle";
import InputField from "../../../../components/InputField";

import useInputValidation from "../../../../hooks/useInputValidation";
import { showErrorToast, showSuccessToast } from "../../../../helpers/helper";

import securityIcon from "../../../../assets/icons/security-safe.svg";
import smsSvg from "../../../../assets/icons/smsenvelope.svg";

const ResetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState("");
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
    email: "",
  });
  const { email } = formData;

  const handleSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      validation(formData);
      if (Object.keys(errors).length > 0) {
        setTouched({
          email: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setTouched({
          email: false,
        });

        setIsSubmitted(true);

        const { email } = formData;
        const response = await axios.get(
          `auth/password/forgot-password/${email}`
        );

        if (response.data.errorState === false) {
          showSuccessToast(`A reset link has been sent to you at ${email}`);
          setIsSubmitted(false);
          // Clear input fields
          setFormData({
            email: "",
          });
        }
      }
    } catch (err) {
      if (!err.response) {
        setResetPasswordError("No Server Response");
      }
      if (err.response?.data.errorState === true) {
        showErrorToast(err.response.data.message);
      }
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <FormContainer>
        <div>
          <img src={securityIcon} alt="" />
        </div>
        <AuthTitle
          title="Reset your password"
          text="Enter the email associated with your account"
        />
        <ResetPasswordForm onSubmit={(e) => handleSubmit(e, formData)}>
          <InputField
            $size="md"
            type="email"
            label="Email Address"
            id="email"
            value={email}
            handleChange={(e) => changeInputValue(e)}
            handleBlur={onBlur}
            error={errors && touched.email && errors.email?.length > 0}
            placeholder="janedoe@gmail.com"
            endIcon={<img src={smsSvg} alt="" />}
            helperText={
              errors && errors.email && touched.email ? errors.email : ""
            }
          />

          <Button
            $size="xl"
            type={isSubmitted ? "button" : "submit"}
            $variant={isSubmitted ? "disabled" : null}
          >
            {isSubmitted ? <Loader /> : " Reset my password"}
          </Button>
        </ResetPasswordForm>
      </FormContainer>
    </>
  );
};

export default ResetPassword;

const FormContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      max-width: 200px;
    }
  }
`;

const ResetPasswordForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
`;
