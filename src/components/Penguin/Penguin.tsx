import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { deletePenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { infoAction } from "../Modals/Modals";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({
  penguin: { name, category, id, description, likes, author, image },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toPascalCase = (str: string) => {
    const newStr = str.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
    return newStr;
  };

  const openDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handleEdit = () => {
    navigate(`/penguins/edit/${id}`);
  };

  const handleLikes = (): void => {
    infoAction("Likes clicked!");
  };

  const handleDelete = (): void => {
    if (id) {
      dispatch(deletePenguinThunk(`${id}`));
    }
  };

  const HidderDelete = document.location.href.includes("/penguins/favs")
    ? ""
    : " display-none";

  return (
    <div className="item penguin-container">
      <div className="penguin-title">
        <h2 className="penguin-name">{toPascalCase(name)}</h2>
        <button className="animated bounce animatedFav" />
      </div>
      <div className="penguin-image-container">
        <img src={image} alt={name} className="penguin-image" />
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(category)}</span>
        <span className="likes"></span>
        <div className="image-container" onClick={handleLikes}>
          <button className="animated bounce animatedLike" />
        </div>
      </div>
      <div className="penguin-description">
        {description.substring(0, 130)}

        <span className="link effect" onClick={openDetail}>
          ...More
        </span>
      </div>
      <div
        className={`animated bounce animatedDelete${HidderDelete}`}
        onClick={handleDelete}
      >
        <button className="bt-delete" />
      </div>
      <div
        className={`animated bounce animatedEdit${HidderDelete}`}
        onClick={handleEdit}
      >
        <button className="bt-edit" />
      </div>
    </div>
  );
};

export default Penguin;
