import { Id, toast } from "react-toastify";

let customID: Id = "custom-id";

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
  if (!toast.isActive(customID)) {
    customID = toast.success(message, toastOptionsSuccess);
  }
};

export const warnAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.success(message, toastOptionsSuccess);
  }
};

export const wrongAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.error(message, toastOptionsWrong);
  }
};

export const infoAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.loading(message, toastOptions);
  }
};

export const stopLoadingAction = () => toast.dismiss(customID);
