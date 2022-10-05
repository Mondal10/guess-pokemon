import { MAX_ATTEMPTS } from "@/shared/constants";
import { DIFFICULTY } from "@/shared/enums";
import { IPlayerUsedLetters } from "@/shared/interfaces";

type TInitialState = {
  attempts: number;
  score: number;
  playerUsedLetters: IPlayerUsedLetters;
  gameDifficulty: DIFFICULTY;
  selectedGenerations: string[];
};

export const initialState: TInitialState = {
  attempts: MAX_ATTEMPTS,
  score: 0,
  playerUsedLetters: {},
  gameDifficulty: DIFFICULTY.EASY,
  selectedGenerations: ["gen1"], // default selection to gen1
};
