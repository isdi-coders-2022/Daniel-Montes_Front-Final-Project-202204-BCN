import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { correctAction, stopLoadingAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckOutSecurity = ({ children }: Props) => {
  const { logged, username } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      correctAction("Wellcome: " + username);
      stopLoadingAction();
      navigate("/penguins");
    } else {
      stopLoadingAction();
    }
  }, [logged, username, navigate]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default CheckOutSecurity;
