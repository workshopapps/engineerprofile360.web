import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";

import editSvg from "../../../assets/icons/edit-2.svg";
import arrowDown from "../../../assets/icons/arrow-down-filled.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import { Loader } from "../../../styles/reusableElements.styled";

const GuestLogin = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const selectField = useRef()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [isSubmitted, setIsSubmitted] = useState("");

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
    fname: "",
    email: "",
    stack: "",
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

  const { fname, email, stack } = formData;

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    console.log(formData)

    try {
      validation(formData);
      if (Object.keys(errors).length > 0) {
        setTouched({
          fname: true,
          email: true,
          stack: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setTouched({
          fname: false,
          email: false,
          stack: false,
        });

        setIsSubmitted(true);

        const { fname, email, stack } = formData;
        const response = await axios.post(
          "auth/organization/login",
          JSON.stringify({ fname, email, stack })
        );

        const accessToken = response?.data?.data.accessToken;
        const roles = response?.data?.data.role;
        const id = response?.data?.data.id;

        setAuth({ fname, email, stack, accessToken, roles, id });

        if (response.data.errorState === false) {
          // Clear input fields
          setFormData({
            fname: "",
            email: "",
            stack: "",
          });

          navigate(from, { replace: true });
        }
      }
    } catch (err) {
      setIsSubmitted(false);
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
        <AuthTitle title="Get Started" text="Let's get you started" />
        <LoginForm onSubmit={(e) => handleSubmit(e, formData)}>
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
          <SelectField
            endIcon={arrowDown}
            options={["Full Stack Developer", "Designer"]}
            stack={stack}
            selectField={selectField}
            selectChanged = {changeInputValue}
            error={errors && errors.stack?.length > 0}
          />
          <Checkbox>
            <label>
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              I agree to the <span>Terms and Conditions</span>
            </label>
          </Checkbox>

          <Button
            $size="xl"
            type={isSubmitted ? "button" : "submit"}
            $variant={isSubmitted ? "disabled" : null}
          >
            {isSubmitted ? <Loader /> : "Proceed"}
          </Button>
        </LoginForm>
      </FormContainer>
    </>
  );
};

export default GuestLogin;



const SelectField = ({ options, endIcon, selectField, selectChanged, error }) => {
  return (
    <SelectDiv>
      <label>Select Stack</label>
      <img src={endIcon} />
      <Select error={error} id="stack" ref={selectField} onChange={(e) => selectChanged(e)}>
        <option value="" selected disabled hidden>------- Choose A Stack -------</option>
        {options &&
          options.map((option, index) => <option value={option} key={index}>{option}</option>)}
        <img src={endIcon} />
      </Select>
    </SelectDiv>
  );
};


const Select = styled.select`
  display: inline;
  appearance: none;
  height: 100%;
  outline: none;
  width: 100%;
  padding: 16px;
  background: ${(props) =>
    props.$background === true ? "rgba(255, 255, 255, 0.0001)" : "none"};
  border: 1px solid
  ${({ error }) =>
      error === true
        ? "red"
        : "#605e5c"};
  border-radius: 10px;
  cursor: pointer;

  color: #605e5c;
`;



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
  font-size: 16px;

  label {
    align-self: center;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
  }

  a:active,
  a:visited {
    color: #2667ff;
  }
  span {
    color: #2667ff;
    font-size: 16px;
  }

  @media screen and (max-width: 378px) {
    gap: 1px;
    label {
    font-size: 12px;
  }
  }
`;

export const Button = styled.button`
  min-width: ${(props) => (props.$size === "xl" ? "100%" : "77px")};
  min-height: 44px;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "288px")};
  height: ${(props) =>
    props.$size === "md" ? "48px" : props.$size === "lg" ? "80px" : "auto"};
  width: ${(props) =>
    props.$size === "md"
      ? "201px"
      : props.$size === "lg"
      ? "280px"
      : props.fullWidth
      ? "100%"
      : "auto"};
  font-size: ${(props) =>
    props.$size === "md" ? "14px" : props.$size === "lg" ? "20px" : "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(1.2)};
  cursor: pointer;
  outline: none;
  font-weight: ${(props) => (props.$weight ? props.$weight : "")};

  ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return css`
          border: 1px solid #2667ff;
          color: #323130;
          background: none;
        `;
      case "disabled":
        return css`
          color: #c8c6c4;
          background: none;
          border: none;
        `;
      case "loader":
        return css`
          opacity: 0.7;
          border: none;
          background: #2667ff;
          color: #ffffff;
          font-weight: 700;
        `;
      default:
        return css`
          border: none;
          background: #2667ff;
          color: #ffffff;
          font-weight: 700;
        `;
    }
  }}

  color: ${({ $color }) => ($color ? $color : null)};
`;


const SelectDiv = styled.div`
  width: 100%;
  label {
    display: inline-block;
    margin-bottom: 10px;
  }
  img {
    display: inline-block;
    position: relative;
    top: 48px;
    left: 70%;
  }

  @media screen and (max-width: 960px) {
    img {
    left: 76%;
  }

  @media screen and (max-width: 680px) {
    img {
    left: 73%;
  }
  }

  @media screen and (max-width: 426px) {
    img {
    left: 65%;
  }
  }

  @media screen and (max-width: 378px) {
    img {
    left: 55%;
  }
  }

  @media screen and (max-width: 321px) {
    img {
    left: 50%;
  }
  }

  }
`;

