import { POKEMON_TYPE } from "@/shared/enums";
import { IPokemonData } from "@/shared/interfaces";
import { getFilteredHintText } from "@/shared/utils";
import { RootState } from "@/store/store";

export const getPokemonLoadingStatus = (store: RootState) => {
  return store.pokemon.loading;
};

export const getPokemonData = (store: RootState): IPokemonData => {
  return {
    id: store.pokemon.pokemonData?.id ?? null,
    name: store.pokemon.pokemonData?.name ?? null,
    isMythical: store.pokemon.pokemonData?.is_mythical ?? null,
    isLegendary: store.pokemon.pokemonData?.is_legendary ?? null,
    habitat: store.pokemon.pokemonData?.habitat?.name ?? "N/A",
    shape: store.pokemon.pokemonData?.shape?.name ?? "N/A",
  };
};

export const getPokemonHintTexts = (store: RootState): string[] => {
  if (store.pokemon.pokemonData) {
    const { flavor_text_entries: flavourTexts, name } =
      store.pokemon.pokemonData;
    return getFilteredHintText(flavourTexts, name);
  } else {
    return [];
  }
};

export const getPokemonType = (store: RootState): POKEMON_TYPE => {
  let pokemonType = POKEMON_TYPE.NORMAL;
  if (store.pokemon.pokemonData) {
    const { is_legendary, is_mythical } = store.pokemon.pokemonData;
    is_legendary && (pokemonType = POKEMON_TYPE.LEGENDARY);
    is_mythical && (pokemonType = POKEMON_TYPE.MYTHICAL);
  }
  return pokemonType;
};
