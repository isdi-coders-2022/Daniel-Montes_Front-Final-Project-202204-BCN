import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wrongAction } from "../Modals/Modals";

type Props = {
  children: JSX.Element;
};

const CheckInSecurity = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
<<<<<<< refs/remotes/origin/feature/add-checkout-security
      // navigate("/login");
      return;
    }
    if (!logged) {
      const userData: UserState = jwtDecode(token);
      dispatch(
        logInActionCreator({
          name: userData.name,
          username: userData.username,
          logged: true,
        })
      );
=======
      document.location.href = "/login";
      wrongAction("No tiene token");
>>>>>>> local
    }
  }, [navigate]);

  return children;
};

export default CheckInSecurity;
