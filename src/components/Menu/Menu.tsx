import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createFavThunk,
  loadFavsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadBack = () => {
    infoAction("Back loading...");
    navigate("/penguins");
  };

  const logOutUser = () => {
    infoAction("Login out...");
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    stopLoadingAction();
    navigate("/");
  };

  const loadFavs = () => {
    infoAction("Loading Favs...");
    dispatch(loadFavsThunk());
    navigate("/favs");
  };

  const loadHome = () => {
    infoAction("Loading Home...");
    navigate("/penguins");
  };

  const addFav = () => {
    infoAction("Adding to Favs...");
    dispatch(createFavThunk("ID"));
    localStorage.removeItem("token");

    stopLoadingAction();
    navigate("/favs");
  };

  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <h2>This is my MEEEEEENU</h2>

      <button onClick={loadHome} className="bt-home" title="bt-home" />
      <button onClick={loadFavs} className="bt-favs-menu" />
      <button onClick={logOutUser} className="bt-logout" />
      <button onClick={addFav} className="bt-addfav" />
    </div>
  );
};
