import { IPokemonResponse } from "@/shared/interfaces";

type TInitialState = {
  loading: null | boolean;
  error: null | string;
  pokemonData: null | IPokemonResponse;
};

export const initialState: TInitialState = {
  loading: null,
  error: null,
  pokemonData: null,
};
