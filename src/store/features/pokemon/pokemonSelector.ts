import { RootState } from "@/store/store";

export const getPokemonLoadingStatus = (store: RootState) => {
  return store.pokemon.loading;
};
