import { toast } from "react-toastify";

const toastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
  hideProgressBar: false,
  newstOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

export const correctAction = (message: string) =>
  toast.success(message, toastOptions);

export const wrongAction = (message: string) =>
  toast.error(message, toastOptions);

export const infoAction = (message: string) =>
  toast.info(message, toastOptions);

export const warnAction = (message: string) =>
  toast.warn(message, toastOptions);
