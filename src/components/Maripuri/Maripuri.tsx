import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { UserState } from "../../app/redux/types/userInterfaces/userInterfaces";
type Props = {
  children: JSX.Element;
};

const Maripuri = ({ children }: Props) => {
  const token = localStorage.getItem("token") as string;
  const logged = useAppSelector((state) => state.users.logged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!logged) {
      navigate("/logineeeee");
    }
  }, [logged, navigate]);

  useEffect(() => {
    if (token) {
      const userData: UserState = jwtDecode(token);

      dispatch(
        logInActionCreator({
          name: userData.name,
          username: userData.username,
          logged: true,
        })
      );
    }
  }, [dispatch, token]);

  if (!logged) {
    return null;
  } else {
    return children;
  }
};

export default Maripuri;
