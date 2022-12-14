import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Button,
  Loader,
} from "../../../../styles/reusableElements.styled";

import InputField from "../../../../components/InputField";
import AuthTitle from "../../../components/molecules/Auth/AuthTitle";

import useInputValidation from "../../../../hooks/useInputValidation";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";

import eyeSvg from "../../../../assets/icons/eye.svg";
import smsSvg from "../../../../assets/icons/smsenvelope.svg";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const [isSubmitted, setIsSubmitted] = useState("");
  const [showPassword, setShowPassword] = useState(true);

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

  const showErrorToast = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  const { email, password } = formData;

  const handleSubmit = async (e, formData) => {
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

        setIsSubmitted(true);

        const { email, password } = formData;
        const response = await axios.post(
          "auth/eval360/admin/login",
          JSON.stringify({ email, password })
        );

        const accessToken = response?.data?.data?.accessToken || "";
        const roles = response?.data?.data.role || "";
        const id = response?.data?.data.id || "";
        const username = response?.data?.data.username || "";

        if (response.data.errorState === false && roles === 3) {
          setAuth({ email, accessToken, username, roles, id });

          localStorage.setItem(
            "Eval360",
            JSON.stringify({
              email,
              accessToken,
              roles,
              id,
              username,
            })
          );

          setFormData({
            email: "",
            password: "",
          });

          window.location.href = from;
        } else if (response.data.errorState === true) {
          showErrorToast(response.data.message);
        }
      }
    } catch (err) {
      setIsSubmitted(false);
      console.log(err);
      if (!err?.response) {
        showErrorToast("No Server Response");
      } else if (err.response?.data.errorState === true) {
        showErrorToast(err.response.data.message);
        setIsSubmitted(false);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <ToastContainer />
        <AuthTitle
          title="Eval360 Admin"
          text="Please enter your login details"
        />
        <LoginForm onSubmit={(e) => handleSubmit(e, formData)}>
          <InputField
            $size="md"
            type="email"
            label="Email Address"
            id="email"
            placeholder="admin@eval360.com"
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
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              <span>Remember me</span>
            </label>

            <Link to="/admin/reset-password">Forgot password?</Link>
          </Checkbox>

          <Button
            $size="xl"
            type={isSubmitted ? "button" : "submit"}
            $variant={isSubmitted ? "disabled" : null}
          >
            {isSubmitted ? <Loader /> : "Sign In"}
          </Button>
        </LoginForm>
      </FormContainer>
    </>
  );
};

export default Login;

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
