import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

const Penguin = ({
  penguin: { id, name, category, image, likes, description },
}: {
  penguin: IPenguin;
}) => {
  return (
    <div className="penguin-container">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <ul className="penguin-datalist">
        <li>{category}</li>
        <li>{likes}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default Penguin;
