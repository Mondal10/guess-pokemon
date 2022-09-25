import { MAX_ATTEMPTS } from "@/shared/constants";
import { IPlayerUsedLetters } from "@/shared/interfaces";

type TInitialState = {
  attempts: number;
  score: number;
  playerUsedLetters: IPlayerUsedLetters;
  gamePokemonName: null | string;
};

export const initialState: TInitialState = {
  attempts: MAX_ATTEMPTS,
  score: 0,
  playerUsedLetters: {},
  gamePokemonName: null,
};
