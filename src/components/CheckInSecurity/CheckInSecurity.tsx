import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { correctAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  const { logged, username } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    if (username) {
      correctAction("Wellcome!");
    }

    return children;
  } else {
    return null;
  }
};

export default CheckInSecurity;
