import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { correctAction, stopLoadingAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  correctAction("Loading preferences2...");
  const { logged, username } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      stopLoadingAction();
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    correctAction("Wellcome: " + username);
    stopLoadingAction();
    return children;
  } else {
    return null;
  }
};

export default CheckInSecurity;
