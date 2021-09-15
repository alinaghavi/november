//Components
import { useContext } from "react";
import cn from "classnames";
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";

//Others
import { UserContext } from "src/store/context";
import "react-tabs/style/react-tabs.css";
import styles from "./account.module.scss";

const Account = () => {
  const { path, url } = useRouteMatch();
  const [user] = useContext(UserContext);
  return (
    <div className={cn(styles["account"], "content")}>
      <h1 className={styles["title"]}>My Account</h1>
      <div className={styles["tab-wrapper"]}>
        <ul className={styles["tab-bar"]}>
          <li>
            <NavLink activeClassName={styles["active-link"]} to={`${url}/user`}>
              user
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles["active-link"]}
              to={`${url}/profile`}
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <div className={styles["tab-content"]}>
          <Switch>
            <Route path={`${path}/user`}>
              <h2>Email Address : </h2> <span>{user.user.username}</span>
            </Route>
            <Route path={`${path}/profile`}>
              <h2>Profile Name: </h2> <span>{user.selectedProfileName}</span>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Account;
