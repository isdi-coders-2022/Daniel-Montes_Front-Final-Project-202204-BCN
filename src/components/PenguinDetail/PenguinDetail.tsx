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
    <div className="detail-container">
      <h1 className="display-none">Detail</h1>
      <h2 className="detail-name">{penguin.name}</h2>

      <ActionButtons penguin={penguin} />
      <img
        src={penguinImage}
        alt={`Pinguino ${penguin.name}`}
        className="detail-image"
      />
      <div className="detail-info">
        <span className="category">{penguin.category}</span>
        <span className="likes">{penguin.likes}</span>
        <button className="animated  bounce2 detail-animatedLikeInit"></button>
      </div>
      <span className="detail-description">{penguin.description}</span>
    </div>
  );
};

export default PenguinDetail;
