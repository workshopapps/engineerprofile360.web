import React, { useState } from "react";
import styled from "styled-components";
import { json, Link, useNavigate, useNavigation } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";
import axios from "../../../api/axios";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import editSvg from "../../../assets/icons/edit-2.svg";

const AdminSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fetchError, setFetchError] = useState();
  const {
    formData,
    changeInputValue,
    onBlur,
    errors,
    touched,
    setTouched,
    validation,
    setFormData,
  } = useInputValidation({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    changeInputValue(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      validation(formData);
      if (Object.keys(errors).length > 0) {
        setTouched({
          fname: true,
          uname: true,
          email: true,
          password: true,
          confirmPassword: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setTouched({
          fname: false,
          uname: false,
          email: false,
          password: false,
          confirmPassword: false,
        });

        const { email, fname: full_name, uname: username, password } = formData;
        const response = await axios.post(
          "auth/register",
          JSON.stringify({ email, full_name, username, password }),
          {
            headers: {
              "content-type": "text/plain",
            },
          }
        );

        if (response.data.errorState === false) {
          navigate("/verify-email", { state: { email } });
        }
        console.log(response.data);
        // Clear input fields
        setFormData({
          fname: "",
          uname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else if (errors) throw new Error();
    } catch (err) {
      if (!err?.response) {
        setFetchError("No Server Response");
      } else if (err.response?.status === 409) {
        setFetchError("Email Taken");
      } else {
        setFetchError("Registration Failed");
      }
    }
  };

  const { fname, uname, email, password, confirmPassword } = formData;

  return (
    <>
      <FormContainer>
        <AuthTitle title="Sign up" text="Let's get started" />
        <SignupForm onSubmit={handleSubmit}>
          <InputField
            $size="md"
            type="text"
            label="Full Name"
            id="fname"
            placeholder="Jane Doe"
            value={fname}
            handleChange={changeInputValue}
            handleBlur={onBlur}
            error={errors && touched.fname && errors.fname?.length > 0}
            endIcon={<img src={editSvg} alt="" />}
            helperText={
              errors && errors.fname && touched.fname ? errors.fname : ""
            }
          />
          <InputField
            $size="md"
            type="text"
            label="User Name"
            id="uname"
            placeholder="Jane Doe"
            value={uname}
            handleChange={changeInputValue}
            handleBlur={onBlur}
            error={errors && touched.uname && errors.uname?.length > 0}
            endIcon={<img src={editSvg} alt="" />}
            helperText={
              errors && errors.uname && touched.uname ? errors.uname : ""
            }
          />
          <InputField
            $size="md"
            type="email"
            label="Email Address"
            id="email"
            placeholder="janedoe@gmail.com"
            value={email}
            handleChange={onChange}
            handleBlur={onBlur}
            error={errors && touched.email && errors.email?.length > 0}
            endIcon={<img src={smsSvg} alt="" />}
            helperText={
              errors && errors.email && touched.email ? errors.email : ""
            }
          />
          <InputField
            $size="md"
            type={showPassword ? "text" : "password"}
            label="Password"
            id="password"
            placeholder="enter password"
            value={password}
            handleChange={onChange}
            handleBlur={onBlur}
            error={errors && touched.password && errors.password?.length > 0}
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
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            handleChange={onChange}
            handleBlur={onBlur}
            error={
              errors &&
              touched.confirmPassword &&
              errors.confirmPassword?.length > 0
            }
            endIcon={<img src={eyeSvg} alt="" />}
            helperText={
              errors && errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />
          <Checkbox>
            <label>
              <input required type="checkbox" /> I agree to the{" "}
              <a href="/terms"> Terms and Conditions</a>
            </label>
          </Checkbox>

          <Button $size="md" type="submit">
            Proceed to Signup
          </Button>

          <div>
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </SignupForm>
      </FormContainer>
    </>
  );
};

export default AdminSignup;

const FormContainer = styled(Container)`
  width: 100%;
`;

const SignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  div:last-of-type {
    span {
      font-size: 14px;
    }
  }
`;

const Checkbox = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  font-size: 14px;

  label {
    align-self: center;
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
  }
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
