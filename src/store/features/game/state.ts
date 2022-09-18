import { MAX_ATTEMPTS } from "@/shared/constants";

type TInitialState = {
  attempts: number;
  score: number;
  playerUsedLetters: string[];
  gamePokemonName: null | string;
};

export const initialState: TInitialState = {
  attempts: MAX_ATTEMPTS,
  score: 0,
  playerUsedLetters: [],
  gamePokemonName: null,
};
