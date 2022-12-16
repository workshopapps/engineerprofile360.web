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

export const sleep = (sec = 1) => {
  return new Promise((res) => setTimeout(res(), sec * 1000));
};

export const checkDate = (date) => {
  const receivedDate = new Date(date).getDate();
  const currentDate = new Date().getDate();
  return receivedDate >= currentDate;
};

export const compareDate = (date_1, date_2) => {
  const startDate = new Date(date_1).getTime();
  const endDate = new Date(date_2).getTime();

  return endDate >= startDate;
};

export const checkTime = (time) => {
  const receivedTime = time; // hh:mm
  const ms =
    Number(receivedTime.split(":")[0]) * 60 * 60 * 1000 +
    Number(receivedTime.split(":")[1]) * 60 * 1000;
  const currentTime = new Date().getMilliseconds();
  return receivedTime >= currentTime;
};

export const compareTime = (time_1, time_2) => {
  const startTimems =
    Number(time_1.split(":")[0]) * 60 * 60 * 1000 +
    Number(time_1.split(":")[1]) * 60 * 1000;

  const endTimems =
    Number(time_2.split(":")[0]) * 60 * 60 * 1000 +
    Number(time_2.split(":")[1]) * 60 * 1000;
  return endTimems > startTimems;
};

export const fileToBase64 = (filename, filepath) => {
  return new Promise((resolve) => {
    var file = new File([filename], filepath);
    var reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function (event) {
      resolve(event.target.result);
    };

    // Convert data to base64
    reader.readAsDataURL(file);
  });
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
