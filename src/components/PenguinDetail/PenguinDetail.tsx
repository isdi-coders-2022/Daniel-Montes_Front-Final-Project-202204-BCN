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
import {
  IPenguin,
  IRegisterForm,
} from "../../app/redux/types/penguin/penguinInterfaces";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import { initialFormData } from "../../utils/utils";

interface Props {
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin }: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const idUser = useAppSelector((state) => state.user.id);

  const [formData, setFormData] = useState<IRegisterForm>(initialFormData);

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
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.filter((liker) => liker !== idUser),
      likes: penguin.likes >= 1 ? penguin.likes - 1 : penguin.likes,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted Like!"));
  };

  const addToLikers = () => {
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.concat(idUser),
      likes: penguin.likes + 1,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added Like!"));
  };

  const handleLikes = () => {
    if (Array(formData.likers)) {
      const uniqueLikers = Array.from(new Set(formData.likers));
      const newFormData = formData;
      newFormData.likers = uniqueLikers;

      isFav ? deleteFromLikers() : addToLikers();

      dispatch(getPenguinThunk(penguin.id));
    }
  };

  const deleteFromFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.filter((fav) => fav !== idUser),
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted from favorites!"));
  };

  const addToFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.concat(idUser),
    };
    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added to favorites! "));
  };

  const handleFavs = () => {
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
