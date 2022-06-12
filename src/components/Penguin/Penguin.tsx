// import { useAppDispatch } from "../../app/redux/hooks/hooks";

import { useNavigate } from "react-router-dom";
import { loadPenguinActionCreator } from "../../app/redux/features/DetailSlice/DetailSlice";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { infoAction } from "../Modals/Modals";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({
  penguin: { name, image, category, id, description, imageBackup },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toPascalCase = (str: string) => {
    const newStr = str.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
    return newStr;
  };

  const openDetail = (): void => {
    dispatch(loadPenguinActionCreator);

    navigate(`/penguins/${id}`);
  };

  const handleLikes = (): void => {
    infoAction("Likes clicked!");
  };

  const handleDelete = (): void => {
    infoAction("Delete clicked!");
    // dispatch(deleteFavThunk(id));
  };

  const HidderDelete = document.location.href.includes("/penguins")
    ? " display-none"
    : "";

  return (
    <div className="penguin-container item">
      <div className="penguin-title">
        <h2 className="penguin-name">{toPascalCase(name)}</h2>
        <button className="bt-favs" />
      </div>
      <div className="penguin-image-container" onClick={openDetail}>
        <img src={image} alt={name} className="penguin-image" />
      </div>
      <div className={`image-delete${HidderDelete}`} onClick={handleDelete}>
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
