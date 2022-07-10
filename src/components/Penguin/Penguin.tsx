import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  editPenguinThunk,
  getPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { toPascalCase } from "../../utils/utils";
import { correctAction } from "../Modals/Modals";
import iconPhotoEmpty from "../../images/no-photo.png";
import { Modal } from "../Modals/ModalPrompt";
import { ReactDimmer } from "react-dimmer";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({ penguin }: Props): JSX.Element => {
  const idUser = useAppSelector((state) => state.user.id);

  const initialFormData: IPenguin = {
    id: penguin.id || "",
    name: penguin.name || "",
    category: penguin.category || "",
    likes: penguin.likes || 0,
    likers: penguin.likers || {},
    favs: penguin.favs || {},
    description: penguin.description || "",
    image: penguin.image || "",
    imageBackup: penguin.imageBackup || "",
  };

  const [formData, setFormData] = useState<IPenguin>(initialFormData);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const message = "Delete penguin: " + penguin?.name + "?";

  const handleDelete = (): void => {
    setModal((prevState) => !prevState);
  };

  const handleMoreDetail = () => {
    dispatch(getPenguinThunk(penguin.id));

    navigate(`/detail/${penguin.id}`);
  };

  const handleEdit = () => {
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

      uniqueLikers.includes(idUser) ? deleteFromLikers() : addToLikers();
    }
    dispatch(
      document.location.href.includes("favs")
        ? loadFavsThunk()
        : loadPenguinsThunk()
    );
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
    correctAction(newPenguin.name + ": Added to favorites!");

    dispatch(loadPenguinsThunk());
  };

  const handleFavs = () => {
    dispatch(getPenguinThunk(formData.id));
    if (Array(formData.favs)) {
      const uniqueLikers = Array.from(new Set(formData.favs));
      let newFormData = formData;
      newFormData.favs = uniqueLikers;

      uniqueLikers.includes(idUser) ? deleteFromFavs() : addToFavs();
    }
  };

  const selectIconFav = formData.favs?.includes(idUser)
    ? " bounce animatedFavDelete"
    : " bounce2 animatedFav";

  const selectIconLike = formData.likers?.includes(idUser)
    ? " bounce animatedLike"
    : ` bounce2 animatedLikeInit`;

  return (
    <div className="item penguin-container">
      <h1 className="display-none">AdoptAPenguin.com</h1>
      <div className="penguin-title">
        <button className={`animated animatedDelete`} onClick={handleDelete} />
        <h2 className="penguin-name">{toPascalCase(`${penguin.name}`)}</h2>
        <button onClick={handleFavs} className={`animated ${selectIconFav}`} />
      </div>
      <div className="penguin-image-container">
        <div className="penguin-image-content">
          <img
            src={penguin.imageBackup ? penguin.imageBackup : iconPhotoEmpty}
            alt={penguin.name}
            className="penguin-image"
          />
        </div>
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(`${penguin.category}`)}</span>
        <span className="likes">{penguin.likes}</span>
        <button
          className={`animated ${selectIconLike}`}
          onClick={handleLikes}
        />
      </div>
      <div className="penguin-description">
        {penguin.description.substring(0, 100)}

        <span className="link effect" onClick={handleMoreDetail}>
          ...More
        </span>
      </div>

      <button className={`animated animatedEdit`} onClick={handleEdit} />
      {isModalOpen && (
        <Modal
          closeModal={setModal}
          type="delete"
          idPenguin={penguin.id}
          message={message}
        />
      )}
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={90}
        blur={1.5}
      />
    </div>
  );
};

export default Penguin;
