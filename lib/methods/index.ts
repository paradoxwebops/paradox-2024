// import { axios } from "./axios";
import { DJANGO_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/lib/constants";
import { AxiosInstance } from "axios";

const getSelfProfile = (axios: AxiosInstance) => {
  return axios.get("/base/profile/");
};

const doRefreshToken = (axios: AxiosInstance, data: any) => {
  const payload = {
    backend: "google-identity",
    grant_type: "refresh_token",
    client_id: DJANGO_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    ...data,
  };
  return axios.post("/auth/token/", payload).then((res) =>
    axios
      .get("/base/profile/", {
        headers: { Authorization: "Bearer " + res.data.access_token },
      })
      .then((res2) => ({
        user: { ...res2.data },
        refresh_token: res.data.refresh_token,
        access_token: res.data.access_token,
      }))
  );
};

const loginUser = (axios: AxiosInstance, data: any) => {
  return axios.post("/auth/convert-token/", data).then((res) =>
    axios
      .get("/base/profile/", {
        headers: { Authorization: "Bearer " + res.data.access_token },
      })
      .then((res2) => ({ user: { ...res2.data }, ...res.data }))
  );
};

const festRegister = (axios: AxiosInstance, data: any) => {
  return axios.post("/fest/fest_register/", { ...data });
};

const accomRegister = (axios: AxiosInstance, data: any) => {
  return axios.post("/fest/accom_register/", { ...data });
};

const checkFestRegistration = (axios: AxiosInstance) => {
  return axios.get("/fest/check_fest/");
};
const checkAccomRegistration = (axios: AxiosInstance) => {
  return axios.get("/fest/check_accom/");
};

export {
  loginUser,
  doRefreshToken,
  getSelfProfile,
  festRegister,
  checkFestRegistration,
  accomRegister,
  checkAccomRegistration,
};
