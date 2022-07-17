import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  deletePenguinThunk,
  editPenguinThunk,
  getPenguinThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import { cleanArray, initialFormData } from "../../utils/utils";

interface Props {
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin }: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const idUser = useAppSelector((state) => state.user.id);

  const [, setFormData] = useState<IPenguin>(initialFormData);

  const isFav = penguin.favs.includes(idUser);
  const isLiker = penguin.likers.includes(idUser);

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
    const newData = { ...penguin };
    newData.likers = newData.likers.filter((liker) => liker !== idUser);
    newData.likes = penguin.likes >= 1 ? penguin.likes - 1 : penguin.likes;

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Deleted Like!"));
  };

  const addToLikers = () => {
    const newData = { ...penguin };
    newData.likers = newData.likers.concat(idUser);
    newData.likes = penguin.likes + 1;

    setFormData(newData);

    dispatch(editPenguinThunk(newData, "Added Like!"));
  };

  const handleLikes = () => {
    if (Array(penguin.likers)) {
      cleanArray(penguin.likers);

      isLiker ? deleteFromLikers() : addToLikers();

      dispatch(getPenguinThunk(penguin.id));
    }
  };

  const deleteFromFavs = () => {
    const newData = { ...penguin };
    newData.favs = penguin.favs.filter((fav) => fav !== idUser);

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Deleted from favorites!"));
  };

  const addToFavs = () => {
    const newData = { ...penguin };
    newData.favs = penguin.favs.concat(idUser);

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Added to favorites! "));
  };

  const handleFavs = () => {
    cleanArray(penguin.favs);

    isFav ? deleteFromFavs() : addToFavs();

    dispatch(getPenguinThunk(penguin.id));
    dispatch(loadPenguinsThunk());
  };

  const HidderDelete = !document.location.href.includes("/penguins/favs")
    ? ""
    : " display-none";

  const selectIconFav = isFav
    ? " bounce animatedFavDelete"
    : ` bounce2 animatedFav`;

  const selectIconLike = isLiker
    ? " bounce animatedLike"
    : ` bounce2 animatedLikeInit`;

  const penguinImage =
    penguin.image === "" && !penguin.imageBackup.includes("/")
      ? iconPhotoEmpty
      : penguin.imageBackup;

  return (
    <div className="penguin-detail-container">
      <h1 className="display-none">Detail</h1>
      <h2 className="penguin-name">{penguin.name}</h2>

      <div className="penguin-buttons-container">
        <button
          className={`animated bounce animatedDelete${HidderDelete}`}
          onClick={handleDelete}
          title="bt-delete"
        />
        <button
          className={`animated bounce form-detail-animatedEdit${HidderDelete}`}
          onClick={handleEdit}
          title="bt-edit"
        />

        <button onClick={handleFavs} className={`animated ${selectIconFav}`} />
      </div>
      <img
        src={penguinImage}
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
