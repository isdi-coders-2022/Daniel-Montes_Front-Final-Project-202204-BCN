import * as React from "react";
import "./Prompt.css";
interface IModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Prompt = ({ closeModal }: IModalProps) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </h2>
      </div>
      <div className="modal-body">
        <h3>
          Oma no! como vas a eliminar a ese pinguino, se puede saber que te ha
          podido hacer?
        </h3>
      </div>
      <div className="modal-btns">
        <button className="link">Aceptar</button>
        <button className="link">Cancelar</button>
      </div>
    </div>
  );
};
