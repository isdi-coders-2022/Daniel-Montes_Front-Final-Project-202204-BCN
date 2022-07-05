import { Id, toast, Bounce } from "react-toastify";

let customID: Id = "custom-id";

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 1500,
  hideProgressBar: false,
  newstOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  toastId: `${customID}`,
  transition: Bounce,
};

const toastOptionsSuccess = {
  autoClose: 1500,
  closeOnClick: true,
  toastId: `${customID}`,
};

const toastOptionsWrong = {
  autoClose: 5000,
  closeOnClick: true,
  toastId: `${customID}`,
};

export const correctAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.success(message, toastOptionsSuccess);
  }

  toast.clearWaitingQueue();
};

export const wrongAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.error(message, toastOptionsWrong);
  }
  toast.clearWaitingQueue();
};

export const warnAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.warning(message, toastOptionsSuccess);
  }
};

export const infoAction = (message: string) => {
  if (!toast.isActive(customID)) {
    customID = toast.loading(message, toastOptions);
  }
  toast.clearWaitingQueue();
};

export const stopLoadingAction = () => {
  toast.dismiss(customID);
  toast.clearWaitingQueue();
};
