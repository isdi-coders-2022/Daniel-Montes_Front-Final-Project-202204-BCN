import { toast } from "react-toastify";

const customID = "custom-id";

const toastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 1000,
  hideProgressBar: false,
  newstOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  toastId: `${customID}`,
};

export const correctAction = (message: string) => {
  if (!toast.isActive(customID)) {
    toast.success(message, toastOptions);
  }
};

export const wrongAction = (message: string) =>
  toast.error(message, toastOptions);

export const infoAction = (message: string) =>
  toast.loading(message, toastOptions);

export const warnAction = (message: string) =>
  toast.warn(message, toastOptions);

export const stopLoadingAction = () => toast.dismiss(customID);
