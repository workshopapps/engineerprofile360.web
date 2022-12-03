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

export const sleep = (sec=1)=> {
  return new Promise(res => setTimeout(res(), sec*1000))
}