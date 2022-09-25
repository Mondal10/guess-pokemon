import { IPlayerUsedLetters } from "@/shared/interfaces";
import { RootState } from "@/store/store";

export const getTypedLettersArr = (store: RootState): string[] => {
  return Object.keys(store.game.playerUsedLetters);
};

export const getPlayerUsedLetterObj = (
  store: RootState
): IPlayerUsedLetters => {
  return store.game.playerUsedLetters;
};
