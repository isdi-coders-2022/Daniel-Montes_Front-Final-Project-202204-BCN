import { toast } from "react-toastify";

const customID = "custom-id";

const toastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
  hideProgressBar: false,
  newstOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  toastId: `${customID}`,
};

const toastOptionsSuccess = {
  autoClose: 2000,
  closeOnClick: true,
};

const toastOptionsWrong = {
  autoClose: 2000,
  closeOnClick: true,
};

export const correctAction = (message: string) => {
<<<<<<< refs/remotes/origin/feature/add-checkout-security
  if (!toast.isActive(customID)) {
    toast.success(message, toastOptions);
  }
};

export const wrongAction = (message: string) =>
  toast.error(message, toastOptions);

export const infoAction = (message: string) =>
  toast.loading(message, toastOptions);
=======
  if (!toast.isActive(idModal)) {
    toast.success(message, toastOptionsSuccess);
  }
};

export const wrongAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.error(message, toastOptionsWrong);
  }
};

export const infoAction = (message: string) => {
  if (!toast.isActive(idModal)) {
    toast.loading(message, toastOptions);
  }
};
>>>>>>> local

export const warnAction = (message: string) =>
  toast.warn(message, toastOptions);

export const stopLoadingAction = () => toast.dismiss(customID);
