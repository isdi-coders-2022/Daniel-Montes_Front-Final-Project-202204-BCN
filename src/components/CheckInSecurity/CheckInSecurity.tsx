import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/login");
  }, [logged, navigate]);

  if (logged) {
    return children;
  } else {
    navigate("/login");
    return null;
  }
};

export default CheckInSecurity;
