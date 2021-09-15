//Components
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

//Others
import { UserContext, initialUser } from "src/store/context";

const Logout = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    setUser(initialUser);
    Cookies.remove("token");
    history.push("/account/");
  }, []);

  return <div></div>;
};

export default Logout;
