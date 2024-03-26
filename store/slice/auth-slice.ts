import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserModel {
  group: string;
  email: string;
  username: string;
}
type User = {
  id: number;
  date_joined: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  picture: string;
};

interface AuthStateModel {
  access_token: string;
  refresh_token: string;
  user: UserModel | Object | any;
}
type AuthState = {
  access_token: string;
  refresh_token: string;
  user: User | Object | any;
};

const initialState: AuthStateModel = {
  refresh_token: "",
  access_token: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      const { access_token, refresh_token, user } = action.payload;

      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.user = { ...state.user, ...user };
    },
    delAuth: (state) => {
      const { refresh_token, access_token, user } = { ...initialState };

      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.user = user;
    },
  },
});
