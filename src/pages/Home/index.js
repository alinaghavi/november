//Comonents
import { useContext } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

//Others
import { UserContext } from "src/store/context";
import styles from "./home.module.scss";

const Home = () => {
  const [user] = useContext(UserContext);
  const isAuthenticated = user.isLogin;

  return (
    <div className={cn(styles["home"], "content")}>
      {isAuthenticated ? (
        <>
          <h1
            className={styles["title"]}
          >{`Welcome back ${user.selectedProfileName}`}</h1>
          <Link to="/account">
            <input className="nov-btn" type="button" value="My Account" />
          </Link>
        </>
      ) : (
        <>
          <h1 className={styles["title"]}>Welcome to our Portal</h1>
          <Link to="/login">
            <input
              className="nov-btn"
              type="button"
              value="Please Go to Login"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
