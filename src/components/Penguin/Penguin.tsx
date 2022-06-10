import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

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
    <div className="penguin-container item">
      <div className="penguin-title">
        <h2 className="penguin-name">{toPascalCase(name)}</h2>
        <button className="bt-favs" />
      </div>
      <div className="penguin-image-container">
        <img src={image} alt={name} className="penguin-image" />
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(category)}</span>
        <span className="likes">{likes}</span>
        <div className="image-container">
          <button className="bt-likes" />
        </div>
      </div>
      <div className="penguin-description">{description}</div>
    </div>
  );
};

export default Penguin;
