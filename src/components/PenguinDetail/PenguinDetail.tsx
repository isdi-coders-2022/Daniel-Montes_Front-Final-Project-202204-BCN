import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { deletePenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { Prompt } from "../Modals/Prompt";

const PenguinDetail = (): JSX.Element => {
  const { penguin } = useAppSelector((state) => state.penguin);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const HidderDelete = !document.location.href.includes("/penguins/favs")
    ? ""
    : " display-none";

  const handleDelete = (): void => {
    if (penguin.id) {
      dispatch(deletePenguinThunk(`${penguin.id}`));
    }
  };
  const handleEdit = () => {
    navigate(`/penguins/edit/${penguin.id}`);
  };
  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  const [isModalOpen, setModal] = useState(false);

  return (
    <>
      <div className="penguin-detail-container">
        <ul>
          <li className="li-detail">
            <h2 className="penguin-name">{penguin.name}</h2>
          </li>
          <li>
            <div className="penguin-image-container">
              <img
                src={penguin.image}
                alt={`Pinguino ${penguin.name}`}
                className="penguin-image-detail"
              />
            </div>
          </li>
          <li>
            <span className="category">{penguin.category}</span>
            <span className="likes">{penguin.likes}</span>
          </li>
          <li className="description-container">
            <span className="penguin-description">{penguin.description}</span>
          </li>
          <li>
            {" "}
            <div
              className={`animated bounce animatedDelete${HidderDelete}`}
              onClick={handleDelete}
              title="bt-delete"
            >
              <button className="bt-delete" />
            </div>
            <div
              className={`animated bounce animatedEdit${HidderDelete}`}
              onClick={handleEdit}
              title="bt-edit"
            ></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PenguinDetail;
