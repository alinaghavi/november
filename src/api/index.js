import request from "src/config/axios";

export const loginUser = async ({ email, password }) => {
  const { data } = await request.post("/api/login", { email, password });
  return data;
};
