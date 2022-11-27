import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInputValidation from "../hooks/useInputValidation";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  name,
  value,
  helperText,
  startIcon,
  endIcon,
  error,

  $rounded = true,
  $background = false,
  $size,
  $fullWidth = true,
  $height,

  handleChange,
  handleBlur,
  className
}) => {
  return (
    <InputGroup className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <InputContainer
        $rounded={$rounded}
        $background={$background}
        $size={$size}
        $fullWidth={$fullWidth}
        $height={$height}
        error={error}
      >
        {startIcon && <span>{startIcon}</span>}
        <Input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {endIcon && <span>{endIcon}</span>}
      </InputContainer>
      <span>{helperText}</span>
    </InputGroup>
  );
};

InputField.propTypes = {
  $rounded: PropTypes.bool,
  $background: PropTypes.bool,
  $fullWidth: PropTypes.bool,
};

export default InputField;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  label {
    font-size: ${(props) => (props.$size === "lg" ? "20px" : "16px")};
    color: #323130;
    font-weight: ${(props) => (props.$size === "lg" ? "600" : "400")};
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 18px;
    }

    ${({ theme }) => theme.breakpoints.down("xs")} {
      font-size: 16px;
    }
  }

  span {
    color: ${({ theme }) => theme.palette.status.error.color};
    font-size: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  height: ${(props) =>
    props.$size === "md" ? "56px" : props.$size === "lg" ? "80px" : props.$height};
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  border: 1px solid
    ${({ theme, error }) =>
      error === true
        ? theme.palette.status.error.color
        : theme.palette.border.default};
  border-radius: ${(props) =>
    props.$rounded === true ? props.theme.spacing(1) : "0px"};

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.palette.border.hover};
  }

  input {
    font-size: ${(props) => (props.$size === "lg" ? "24px" : "14px")};
  }
`;

const Input = styled.input`
  border: none;
  background: ${(props) =>
    props.$background === true ? "rgba(255, 255, 255, 0.0001)" : "none"};
  height: 100%;
  outline: none;
  width: 100%;
`;
