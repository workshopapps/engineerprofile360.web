import { useState, useEffect } from "react";

const useInputValidation = (initialState = {}, type = null) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState();
  const [touched, setTouched] = useState(initialState);
  const validation = (formData) => {
    const error = {};
    if (formData.fname?.length <= 0) {
      error.fname = "Name is required";
    }

    if (formData.cname?.length <= 0) {
      error.cname = "Company name is required";
    }

    if (formData.number?.length <= 0) {
      error.number = "Phone number is required";
    }

    if (formData.uname?.length <= 0) {
      error.uname = "Username is required";
    } else if (formData.uname?.length < 6) {
      error.uname = "Username must be at least 6 characters.";
    }

    // if (formData && !formData.email) {
    if (formData.email?.length <= 0) {
      error.email = "Email is required";
    } else if (
      formData.email?.length > 0 &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      error.email = "Invalid email address";
    }

    if (Object.keys(formData).length > 1 && !formData.password) {
      error.password = "Password is required";
    }
    if (Object.keys(formData).length > 2 && formData.password?.length <= 8) {
      error.passwordLength = "Password must be more than 8 characters";
    }
    if (
      Object.keys(formData).length > 2 &&
      /[A-Z]/.test(formData.password) === false
    ) {
      error.passwordUppercase = "password must have at least one uppercase";
    }
    if (
      Object.keys(formData).length > 2 &&
      /[0-9]/.test(formData.password) === false
    ) {
      error.passwordNumber = "Password must have at least 1 number";
    }
    if (
      Object.keys(formData).length > 2 &&
      /[#?!@$%^&*-]/.test(formData.password) === false
    ) {
      error.passwordCharacter =
        "Password must have at least 1 special character";
    }

    if (formData.confirmPassword?.length <= 0) {
      error.confirmPassword = "Confirm password is required";
    } else if (
      formData.confirmPassword &&
      formData.confirmPassword !== formData.password
    ) {
      error.confirmPassword = "Password does not match";
    }
    setErrors(error);
  };

  useEffect(() => {
    validation(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, touched]);

  const changeInputValue = (event) => {
    const newValues = { ...formData, [event.target.id]: event.target.value };
    setFormData(newValues);
  };

  const onBlur = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value.trim(),
    }));

    setTouched((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  };

  return {
    formData,
    changeInputValue,
    errors,
    onBlur,
    touched,
    validation,
    setTouched,
    setFormData,
  };
};

export default useInputValidation;
