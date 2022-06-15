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
  toast.clearWaitingQueue();
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
