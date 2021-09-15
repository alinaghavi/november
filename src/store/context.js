//Global state that holds the login user data

import { createContext } from "react";

export const initialUser = {
  isLogin: false,
  user: {},
  profiles: [],
  selectedProfileName: "",
};

export const UserContext = createContext();
