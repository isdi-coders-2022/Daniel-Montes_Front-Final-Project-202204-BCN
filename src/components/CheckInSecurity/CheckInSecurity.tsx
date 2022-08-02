import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  const { id, logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged || !id) {
      navigate("/login");
    } else {
      navigate("/penguins");
    }
  }, [logged, navigate, id]);

  if (logged) {
    return children;
  } else {
    navigate("/login");
    return null;
  }
};

export default CheckInSecurity;
