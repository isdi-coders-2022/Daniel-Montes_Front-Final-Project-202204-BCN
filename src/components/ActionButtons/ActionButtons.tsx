import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  deletePenguinThunk,
  editPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { cleanArray, initialFormData } from "../../utils/utils";

interface Props {
  penguin: IPenguin;
}

const ActionButtons = ({ penguin }: Props): JSX.Element => {
  const idUser = useAppSelector((state) => state.user.id);
  const isFavsPage = document.location.href.includes("favs");

  const [, setFormData] = useState<IPenguin>(initialFormData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFav = penguin.favs.includes(idUser);
  const isLiker = penguin.likers.includes(idUser);

  const handleDelete = (): void => {
    if (penguin.id) {
      dispatch(deletePenguinThunk(`${penguin.id}`));
    }
  };

  const handleEdit = () => {
    navigate(`/penguins/edit/${penguin.id}`);
  };

  const deleteFromLikers = () => {
    const newData = { ...penguin };
    newData.likers = newData.likers.filter((liker) => liker !== idUser);
    newData.likes = penguin.likes >= 1 ? penguin.likes - 1 : penguin.likes;

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Delete Like."));
  };

  const addToLikers = () => {
    const newData = { ...penguin };
    newData.likers = newData.likers.concat(idUser);
    newData.likes = penguin.likes + 1;

    setFormData(newData);

    dispatch(editPenguinThunk(newData, "Add Like."));
  };

  const handleLikes = () => {
    if (Array(penguin.likers)) {
      cleanArray(penguin.likers);

      isLiker ? deleteFromLikers() : addToLikers();

      isFavsPage ? dispatch(loadFavsThunk()) : dispatch(loadPenguinsThunk());
    }
  };

  const deleteFromFavs = () => {
    const newData = { ...penguin };
    newData.favs = penguin.favs.filter((fav) => fav !== idUser);

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Delete from favorites."));
  };

  const addToFavs = () => {
    const newData = { ...penguin };
    newData.favs = penguin.favs.concat(idUser);

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Add to favorites."));
  };

  const handleFavs = () => {
    if (Array(penguin.favs)) {
      cleanArray(penguin.favs);

      isFav ? deleteFromFavs() : addToFavs();

      isFavsPage ? dispatch(loadFavsThunk()) : dispatch(loadPenguinsThunk());
    }
  };

  const selectIconFav = isFav
    ? " bounce animatedFavDelete"
    : " bounce2 animatedFav";

  const selectIconLike = isLiker
    ? " bounce animatedLike"
    : ` bounce2 animatedLikeInit`;

  return (
    <div className="penguin-buttons">
      <button onClick={handleFavs} className={`animated ${selectIconFav}`} />
      <button className={`animated bounce animatedEdit`} onClick={handleEdit} />
      <button
        title="btn-delete"
        className={`animated bounce animatedDelete`}
        onClick={handleDelete}
      />
      <button className={`animated ${selectIconLike}`} onClick={handleLikes} />
    </div>
  );
};

export default ActionButtons;
