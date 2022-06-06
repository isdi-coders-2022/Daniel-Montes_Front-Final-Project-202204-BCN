import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import starImage from "../../images/star-empty.png";
import likesImage from "../../images/heart-empty.png";

const Penguin = ({
  penguin: { id, name, category, image, likes, description },
}: {
  penguin: IPenguin;
}) => {
  return (
    <div className="penguin-container">
      <div className="penguin-title">
        <h2 className="penguin-name">{name}</h2>
        <img src={starImage} className="star-image" alt={name} />
      </div>
      <img src={image} alt={name} />
      <div className="penguin-datalist">
        <span className="category">{category}</span>
        <span className="likes">{likes}</span>
        <div className="image-container">
          <img src={likesImage} alt={name} />
        </div>
      </div>
      {description}
    </div>
  );
};

export default Penguin;
