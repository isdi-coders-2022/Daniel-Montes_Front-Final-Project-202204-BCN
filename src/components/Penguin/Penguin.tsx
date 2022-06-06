import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import starImage from "../../images/star-empty.png";
import likesImage from "../../images/heart-empty.png";

const Penguin = ({
  penguin: { id, name, category, image, likes, description },
}: {
  penguin: IPenguin;
}) => {
  const toPascalCase = (str: string) => {
    const newStr = str.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
    return newStr;
  };
  return (
    <div className="penguin-container">
      <div className="penguin-title">
        <h2 className="penguin-name">{toPascalCase(name)}</h2>
        <img src={starImage} className="star-image" alt={name} />
      </div>
      <img src={image} alt={name} />
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(category)}</span>
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
