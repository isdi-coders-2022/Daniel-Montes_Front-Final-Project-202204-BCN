import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";
import { stopLoadingAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  const navigate = useNavigate();
  const { logged } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (!logged) {
      stopLoadingAction();

      navigate("/login");
    }
    stopLoadingAction();
  }, [logged, navigate]);

  return children;
};

export default CheckInSecurity;
