import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";

export const isLoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    ACTION_LOGIN: (state) => {
      state.login = true;
    },
    ACTION_LOGOUT: (state) => {
      state.login = false;
    },
  },
});

export const { ACTION_LOGIN, ACTION_LOGOUT } = isLoginSlice.actions;
