import { toast } from "react-toastify";

export const correctAction = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 800,
  });

export const wrongAction = (message: string) =>
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const infoAction = (message: string) =>
  toast.info(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const warnAction = (message: string) =>
  toast.warn(message, {
    position: toast.POSITION.TOP_CENTER,
  });
