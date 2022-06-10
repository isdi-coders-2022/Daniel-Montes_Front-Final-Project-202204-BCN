import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { deleteFavThunk } from "../../app/redux/thunks/favThunk/favThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({
  penguin: { name, image, category, id, description, imageBackup },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const toPascalCase = (str: string) => {
    const newStr = str.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
    return newStr;
  };

  const openDetail = (): void => {
    dispatch(deleteFavThunk(id));
  };

  const handleLikes = (): void => {
    dispatch(deleteFavThunk(id));
  };

  const handleDelete = (): void => {
    dispatch(deleteFavThunk(id));
  };

  return (
    <div className="penguin-container item">
      <div className="penguin-title">
        <h2 className="penguin-name">{toPascalCase(name)}</h2>
        <button className="bt-favs" />
      </div>
      <div className="penguin-image-container" onClick={openDetail}>
        <img src={image} alt={name} className="penguin-image" />
      </div>
      <div className="image-delete" onClick={handleDelete}>
        <button className="bt-delete" />
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(category)}</span>
        <span className="likes"></span>
        <div className="image-container" onClick={handleLikes}>
          <button className="bt-likes" />
        </div>
      </div>
      <div className="penguin-description">{description}</div>
    </div>
  );
};

export default Penguin;
