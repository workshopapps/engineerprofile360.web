import { toast } from "react-toastify";

export const removeSpaces = (string) => {
  return string.split(" ").join("");
};

export const showErrorToast = (error) => {
  toast.error(error, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showSuccessToast = (success) => {
  toast.success(success, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
