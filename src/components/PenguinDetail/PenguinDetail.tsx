import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  deletePenguinThunk,
  editPenguinThunk,
  getPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { correctAction } from "../Modals/Modals";
import iconPhotoEmpty from "../../images/no-photo.png";

interface Props {
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin }: Props): JSX.Element => {
  const idUser = useAppSelector((state) => state.user.id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialFormData: IPenguin = {
    id: penguin.id || "",
    name: penguin.name || "",
    category: penguin.category || "",
    likes: penguin.likes || 0,
    likers: penguin.likers || [],
    favs: penguin.favs || [],
    description: penguin.description || "",
    image: penguin.image,
    imageBackup: penguin.imageBackup || "",
    originalname: penguin.originalname || "",
  };

  const [formData, setFormData] = useState<IPenguin>(initialFormData);

  const handleDelete = (): void => {
    if (penguin.id) {
      dispatch(deletePenguinThunk(`${penguin.id}`));
      navigate("/favs");
    }
  };

  const handleEdit = () => {
    dispatch(getPenguinThunk(penguin.id));
    dispatch(headerTitleActionCreator("Edit"));
    navigate(`/penguins/edit/${penguin.id}`);
  };

  const deleteFromLikers = () => {
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.filter((liker) => liker !== idUser),
      likes: penguin.likes - 1,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted Like!"));
    correctAction(
      newPenguin.name +
        ": You don´t like this penguin! Likes counter total: " +
        penguin.likes +
        ". Added: (-1)"
    );
  };

  const addToLikers = () => {
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.concat(idUser),
      likes: penguin.likes + 1,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added Like!"));
    correctAction("You like: " + formData.name + " this penguin! ");
  };

  const handleLikes = () => {
    formData.likers.includes(idUser) ? deleteFromLikers() : addToLikers();
  };

  const deleteFromFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.filter((fav) => fav !== idUser),
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted from favorites!"));
    correctAction(newPenguin.name + ": Deleted from favorites! ");
  };

  const addToFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.concat(idUser),
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added to favorites! "));

    correctAction(newPenguin.name + ": Added to favorites!");
  };

  const handleFavs = () => {
    formData.favs.includes(idUser) ? deleteFromFavs() : addToFavs();
  };

  const HidderDelete = !document.location.href.includes("/penguins/favs")
    ? ""
    : " display-none";

  const selectIconFav = penguin.favs?.includes(idUser)
    ? " bounce animatedFavDelete"
    : ` bounce2 animatedFav`;

  const selectIconLike = penguin.likers?.includes(idUser)
    ? " bounce animatedLike"
    : ` bounce2 animatedLikeInit`;

  return (
    <div className="penguin-detail-container">
      <h1 className="display-none">Detail</h1>
      <h2 className="penguin-name">{penguin.name}</h2>

      <div className="penguin-buttons-container">
        <button
          className={`animated animatedDelete${HidderDelete}`}
          onClick={handleDelete}
          title="bt-delete"
        />
        <button
          className={`animated form-detail-animatedEdit${HidderDelete}`}
          onClick={handleEdit}
          title="bt-edit"
        />

        <button onClick={handleFavs} className={`animated ${selectIconFav}`} />
      </div>
      <img
        src={penguin.imageBackup ? penguin.imageBackup : iconPhotoEmpty}
        alt={`Pinguino ${penguin.name}`}
        className="penguin-image-detail"
      />

      <div className="penguin-image-footer">
        <span className="category">{penguin.category}</span>
        <span className="likes">{penguin.likes}</span>
        <button
          className={`animated ${selectIconLike}`}
          onClick={handleLikes}
        />
      </div>
      <span className="penguin-description">{penguin.description}</span>
    </div>
  );
};

export default PenguinDetail;
