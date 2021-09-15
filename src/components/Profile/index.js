//Components
import { useContext } from "react";
import { Link } from "react-router-dom";

//Others
import { UserContext } from "src/store/context";
import styles from "./profile.module.scss";

const Profile = ({ name }) => {
  const [user, setUser] = useContext(UserContext);

  const handleProfileClick = (name) => {
    const newUser = { ...user, selectedProfileName: name };
    setUser(newUser);
  };
  return (
    <Link
      to="/account/user"
      className={styles["profile"]}
      onClick={() => handleProfileClick(name)}
    >
      <div>{name}</div>
    </Link>
  );
};

export default Profile;
