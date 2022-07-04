import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { correctAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckOutSecurity = ({ children }: Props) => {
  const { logged, username } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      if (username) {
        correctAction("Wellcome!");
      }

      navigate("/penguins");
    }
  }, [logged, username, navigate]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default CheckOutSecurity;
