import { MAX_ATTEMPTS } from "@/shared/constants";

type TInitialState = {
  attempts: number;
  score: number;
};

export const initialState: TInitialState = {
  attempts: MAX_ATTEMPTS,
  score: 0,
};
