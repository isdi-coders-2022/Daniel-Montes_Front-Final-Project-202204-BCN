import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { wrongAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckOutSecurity = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/penguins");
    }
  }, [logged, navigate]);

  if (!logged) {
    wrongAction("You must be logged in to access this page");
    navigate("/login");
    return children;
  } else {
    return null;
  }
};

export default CheckOutSecurity;
