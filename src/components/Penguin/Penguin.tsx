import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { toPascalCase } from "../../utils/utils";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import { Modal } from "../Modals/ModalPrompt";
import { ReactDimmer } from "react-dimmer";
import ActionButtons from "../ActionButtons/ActionButtons";
interface Props {
  penguin: IPenguin;
}

const Penguin = ({ penguin }: Props): JSX.Element => {
  const [isModalOpen, setModal] = useState(false);
  const message = "Delete penguin: " + penguin?.name + "?";
  const navigate = useNavigate();

  const handleMoreDetail = () => {
    navigate(`/detail/${penguin.id}`);
  };

  const isURL = penguin.imageBackup.includes("/");

  const penguinImage =
    penguin.image === "" && !isURL ? iconPhotoEmpty : penguin.imageBackup;

  const contactImageClass =
    penguin.image === "" && !isURL ? " iconPhotoEmpty" : "";

  return (
    <div className="item penguin-container">
      <h1 className="display-none">AdoptAPenguin.com</h1>
      <h2 className="penguin-name">{toPascalCase(`${penguin.name}`)}</h2>

      <div className="penguin-image-container">
        <div className="penguin-image-content">
          <img
            src={penguinImage}
            alt={penguin.name}
            className={`penguin-image${contactImageClass}`}
          />
        </div>
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(`${penguin.category}`)}</span>
        <span className="likes">{penguin.likes}</span>
        <ActionButtons penguin={penguin} />
      </div>
      <div className="penguin-description">
        {penguin.description.substring(0, 100)}

        <span className="link effect" onClick={handleMoreDetail}>
          ...More
        </span>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={setModal}
          type="delete"
          idPenguin={penguin.id}
          message={message}
        />
      )}
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={90}
        blur={1.5}
      />
    </div>
  );
};

export default Penguin;
