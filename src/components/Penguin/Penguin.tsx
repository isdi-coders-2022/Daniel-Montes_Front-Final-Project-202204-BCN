import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  deletePenguinThunk,
  getPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import {
  correctAction,
  infoAction,
  stopLoadingAction,
  wrongAction,
} from "../Modals/Modals";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({
  penguin: { name, image, category, id, description, likes, imageBackup },
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
    if (id) {
      dispatch(getPenguinThunk(`${id}`));

      navigate(`/detail/${id}`);
    }
  };
  const addFav = (event: React.FormEvent): void => {
    try {
      infoAction("Creating...");
      event.preventDefault();

      const formData = new FormData();

      formData.append("id", JSON.stringify(id));
      formData.append("name", name);
      formData.append("category", category);
      formData.append("likes", JSON.stringify(likes));
      formData.append("description", description);
      formData.append("image", image);
      formData.append("imageBackup", imageBackup);

      if (formData) {
        dispatch(createFavThunk(formData));
        correctAction("Fav Added!");

        navigate(`/penguins/favs`);
      } else {
        stopLoadingAction();
        wrongAction("Error creating!");
      }
    } catch {
      stopLoadingAction();
      wrongAction("Error creating!");
    }
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
        <button className="animated bounce animatedFav" onClick={addFav} />
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
    </div>
  );
};

export default Penguin;
