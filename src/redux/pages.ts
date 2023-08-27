import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial_state";

export const pageSlice = createSlice({
  name: "films pages",
  initialState,
  reducers: {
    ACTION_NEXT_PAGE: (state) => {
      state.page += 1;
    },
    ACTION_PREVIOUS_PAGE: (state) => {
      state.page -= 1;
    },
    ACTION_NEXT_PAGE_SEARCH: (state) => {
      state.pageSearch += 1;
    },
    ACTION_REMOVE_PAGE: (state) => {
      state.page = 1;
    },
  },
});

export const {
  ACTION_NEXT_PAGE,
  ACTION_PREVIOUS_PAGE,
  ACTION_NEXT_PAGE_SEARCH,
  ACTION_REMOVE_PAGE,
} = pageSlice.actions;
