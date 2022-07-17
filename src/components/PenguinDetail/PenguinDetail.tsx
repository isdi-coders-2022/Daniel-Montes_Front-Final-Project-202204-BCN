import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import ActionButtons from "../ActionButtons/ActionButtons";

interface Props {
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin }: Props): JSX.Element => {
  const penguinImage =
    penguin.image === "" && !penguin.imageBackup.includes("/")
      ? iconPhotoEmpty
      : penguin.imageBackup;

  return (
    <div className="penguin-detail-container">
      <h1 className="display-none">Detail</h1>
      <h2 className="penguin-name">{penguin.name}</h2>

      <ActionButtons penguin={penguin} />
      <img
        src={penguinImage}
        alt={`Pinguino ${penguin.name}`}
        className="penguin-image-detail"
      />
      <div className="penguin-image-footer">
        <span className="category">{penguin.category}</span>
        <span className="likes">{penguin.likes}</span>
      </div>
      <span className="penguin-description">{penguin.description}</span>
    </div>
  );
};

export default PenguinDetail;
