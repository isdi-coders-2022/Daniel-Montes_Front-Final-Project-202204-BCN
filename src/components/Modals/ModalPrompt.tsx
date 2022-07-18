import * as React from "react";
import { useNavigate } from "react-router-dom";
import { finishedLoadingActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { deletePenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction } from "./Modals";

interface IModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  idPenguin: string;
  type: string;
  message: string;
}

export const Modal = ({
  closeModal,
  idPenguin,
  message,
  type,
}: IModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(finishedLoadingActionCreator());
    dispatch(logOutActionCreator());
    closeModal(false);
    localStorage.removeItem("token");

    navigate("/");
  };

  const deletePenguin = () => {
    if (idPenguin) {
      dispatch(deletePenguinThunk(`${idPenguin}`));
    }
  };

  const handleAcceptClick = (event: React.FormEvent) => {
    switch (type) {
      case "delete":
        deletePenguin();
        break;
      case "logOutUser":
        logOutUser();
        break;
      case "Search":
        logOutUser();
        break;
      default:
        correctAction("Sorry, this feature is not available yet.");
    }
  };

  const handleCancelClick = () => {
    closeModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <h3 className="modal-title">Please confirm</h3>
        <h2
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </h2>
      </div>
      <h3 className="modal-message">{message}</h3>
      {message === "Search: " ? (
        <input type="text" className="search-input" />
      ) : (
        ""
      )}
      <div className="modal-body">
        <button
          onClick={handleAcceptClick}
          className="bt-modal-accept"
          title="btn-accept"
        />
        <button
          onClick={handleCancelClick}
          className="bt-modal-cancel"
          title="btn-cancel"
        />
      </div>
    </div>
  );
};
