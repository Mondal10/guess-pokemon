import { MAX_ATTEMPTS } from "@/shared/constants";
import { ILetterCorrectness } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addTypedLetter: (state, action: PayloadAction<ILetterCorrectness>) => {
      state.playerUsedLetters[action.payload.letter] = action.payload;
    },
    resetGameState: (state) => {
      state = initialState;
    },
  },
});

export const gameSliceReducer = gameSlice.reducer;
export const gameSliceActions = gameSlice.actions;
