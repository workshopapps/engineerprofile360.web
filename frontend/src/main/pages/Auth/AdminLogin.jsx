import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../context/authProvider";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";
import axios from "../../../api/axios";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";

const AdminLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [loginError, setLoginError] = useState();

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
    password: "",
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      validation(formData);
      if (Object.keys(errors).length > 0) {
        setTouched({
          email: true,
          password: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setTouched({
          email: false,
          password: false,
        });

        const { email, password } = formData;
        const response = await axios.post(
          "auth/login",
          JSON.stringify({ email, password })
          // {
          //   headers: {
          //     "content-type": "text/plain",
          //   },
          // }
        );

        console.log(JSON.stringify(response?.data));

        const accessToken = response?.data?.accessToken;

        setAuth({ email, password, accessToken });

        if (response.data.errorState === false) {
          navigate("/verify-email", { state: { email } });
        }
        console.log(response.data);

        // Clear input fields
        setFormData({
          email: "",
          confirmPassword: "",
        });
      } else if (errors) throw new Error();
    } catch (err) {
      if (!err?.response) {
        setLoginError("No Server Response");
      } else if (err.response?.status === 400) {
        setLoginError("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setLoginError("Unathorized");
      } else {
        setLoginError("Login Failed");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <AuthTitle
          title="Welcome back"
          text="Please enter your login details"
        />
        <LoginForm onSubmit={handleSubmit}>
          <InputField
            $size="md"
            type="email"
            label="Email Address"
            id="email"
            placeholder="janedoe@gmail.com"
            value={email}
            handleChange={(e) => changeInputValue(e)}
            handleBlur={onBlur}
            error={errors && touched.email && errors.email?.length > 0}
            endIcon={<img src={smsSvg} alt="" />}
            helperText={
              errors && errors.email && touched.email ? errors.email : ""
            }
          />
          <InputField
            $size="md"
            type={showPassword ? "password" : "text"}
            label="Password"
            id="password"
            placeholder="enter password"
            value={password}
            handleChange={(e) => changeInputValue(e)}
            error={errors && touched.password && errors.password?.length > 0}
            handleBlur={onBlur}
            endIcon={
              <img
                onClick={() => setShowPassword((prevState) => !prevState)}
                src={eyeSvg}
                alt=""
                style={{ cursor: "pointer" }}
              />
            }
            helperText={
              errors && errors.password && touched.password
                ? errors.password
                : ""
            }
          />
          <Checkbox>
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <Link to="/reset-password">Forgot password?</Link>
          </Checkbox>

          <Button $size="md" type="submit">
            Sign In
          </Button>

          <div>
            <span>
              Don't have an account? <Link to="/register">Sign up</Link>
            </span>
          </div>
        </LoginForm>
      </FormContainer>
    </>
  );
};

export default AdminLogin;

const FormContainer = styled(Container)`
  width: 100%;
`;

const LoginForm = styled.form`
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
  width: 100%;
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

  a:active,
  a:visited {
    color: #2667ff;
  }
`;
