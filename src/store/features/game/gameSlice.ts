import { MAX_ATTEMPTS } from "@/shared/constants";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetAttempt: (state) => {
      state.attempts = MAX_ATTEMPTS;
    },
    decreaseAttempt: (state) => {
      state.attempts -= 1;
    },
  },
});

export const gameSliceReducer = gameSlice.reducer;
export const gameSliceActions = gameSlice.actions;
