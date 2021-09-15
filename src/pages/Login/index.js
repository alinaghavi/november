//Components
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Cookies from "js-cookie";
import Modal from "src/components/Modal";
import { useHistory } from "react-router-dom";
import Profile from "src/components/Profile";

//api

import { loginUser } from "src/api/index";

//Others
import { UserContext } from "src/store/context";
import styles from "./login.module.scss";

export default function Login() {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ToggleModal = () => setModal(!modal);

  const onSubmit = async ({ email, password }) => {
    try {
      const data = await loginUser({ email, password });
      Cookies.set("token", data.token);

      if (data.profiles.length === 1) {
        setUser({
          isLogin: true,
          user: data.user,
          profiles: data.profiles,
          selectedProfileName: data.profiles[0]["name"],
        });
        history.push("/account/user");
      } else {
        setUser({
          isLogin: true,
          user: data.user,
          profiles: data.profiles,
          selectedProfileName: "",
        });
        ToggleModal();
      }
    } catch (err) {
      alert("The username or password is incorrect");
    }
  };

  return (
    <>
      <div className={cn("content", styles["login"])}>
        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["fileds-wrapper"]}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              id="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="text"
              className="form-control"
            />
            {errors.email && (
              <span role="alert" className={styles["error-message"]}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={styles["fileds-wrapper"]}>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>

            <input
              id="password"
              {...register("password", {
                required: "required",
                minLength: {
                  value: 5,
                  message: "min length is 5",
                },
              })}
              type="password"
              className="form-control"
            />
            {errors.password && (
              <span role="alert" className={styles["error-message"]}>
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <Modal show={modal} title="Choose Your Profile" close={ToggleModal}>
        <div className={styles["profile-wrapper"]}>
          {user.profiles.map((profile) => (
            <Profile key={profile.id} name={profile.name} />
          ))}
        </div>
      </Modal>
    </>
  );
}
