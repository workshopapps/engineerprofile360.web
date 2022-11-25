import { useState, useEffect } from "react";

import { removeSpaces } from "../helpers/helper";

const useInputValidation = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState();
  const [touched, setTouched] = useState(initialState);

  const validation = (formData) => {
    const error = {};
    if (formData && !formData.fname) {
      error.fname = "Name is required";
    }

    if (formData && !formData.email) {
      error.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      error.email = "Invalid email address";
    }

    if (formData && !formData.password) {
      error.password = "Password is required";
    } else if (formData.password.search(/[A-Z]/) < 0) {
      error.passwordUppercase = "Must have at least one uppercase";
    } else if (formData.password.search(/[a-z]/) < 0) {
      error.passwordLowercase = "Must have at least one lowercase";
    } else if (formData.password.search(/[0-9]/) < 0) {
      error.passwordNumber = "Must have at least 1 number";
    } else if (formData.password.search(/[#?!@$%^&*-]/) < 0) {
      error.passwordCharacter = "Must have at least 1 special character";
    }

    if (formData && !formData.confirmPassword) {
      error.confirmPassword = "Confirm password is required";
    } else if (formData.confirm !== formData.password) {
      error.confirmPassword = "Password does not match";
    }
    setErrors(error);
  };

  useEffect(() => {
    validation(formData);
  }, [formData, touched]);

  const changeInputValue = (event) => {
    const newValues = { ...formData, [event.target.id]: event.target.value };
    setFormData(newValues);
  };

  const onBlur = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]:
        e.target.getAttribute("id") !== "fname"
          ? removeSpaces(e.target.value)
          : e.target.value,
    }));

    setTouched((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  };
  return { formData, changeInputValue, errors, onBlur, touched };
};

export default useInputValidation;
