import { toast } from "react-toastify";

const idModal = "modal-id";

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
  toastId: `${idModal}`,
};

export const correctAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.success(message, toastOptions);
  }
};

export const wrongAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.error(message, toastOptions);
  }
};

export const infoAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.info(message, toastOptions);
  }
};

export const warnAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.loading(message, toastOptions);
  }
};

export const stopLoadingAction = () => {
  toast.dismiss(idModal);
};
