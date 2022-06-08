import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks/hooks";

type Props = {
  children: JSX.Element;
};

const AntiController = ({ children }: Props) => {
  const logged = useAppSelector((state) => state.users.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/homepage");
    }
  }, [logged, navigate]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default AntiController;