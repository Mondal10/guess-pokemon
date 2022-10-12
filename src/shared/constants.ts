import { DIFFICULTY, POKEMON_TYPE } from "./enums";

export const POKEMON_IMG_URL =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
export const POKEMON_DATA_URL = "https://pokeapi.co/api/v2/pokemon-species/";
export const POKEDEX_BASE_URL = "https://mondal10.github.io/Pokedex/#/";
export const GITHUB_SOURCE_CODE = "https://github.com/Mondal10/guess-pokemon";

export const MAX_ATTEMPTS = 6;
export const GENERATIONS = 8;
export const GENERATION_POKEMON_ID_RANGE = {
  gen1: [1, 151],
  gen2: [152, 251],
  gen3: [252, 386],
  gen4: [387, 493],
  gen5: [494, 649],
  gen6: [650, 721],
  gen7: [722, 809],
  gen8: [810, 905],
};

export const KEYBOARD_LETTERS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m", "-"],
];

export const POKEMON_TYPE_COLOUR = {
  [POKEMON_TYPE.NORMAL]: "bg-green-500",
  [POKEMON_TYPE.LEGENDARY]: "bg-violet-500",
  [POKEMON_TYPE.MYTHICAL]: "bg-orange-500",
};

export const POKEMON_NATURE_TYPE_COLORS = {
  bug: "#B1C12E",
  dark: "#4F3A2D",
  dragon: "#755EDF",
  electric: "#FCBC17",
  fairy: "#F4B1F4",
  fighting: "#994025",
  fire: "#E73B0C",
  flying: "#A3B3F7",
  ghost: "#6060B2",
  grass: "#74C236",
  ground: "#D3B357",
  ice: "#A3E7FD",
  normal: "#C8C4BC",
  poison: "#934594",
  psychic: "#ED4882",
  rock: "#B9A156",
  steel: "#B5B5C3",
  water: "#3295F6",
};

export const DIFFICULTY_CONFIG = {
  [DIFFICULTY.EASY]: {
    imgFilter: "",
  },
  [DIFFICULTY.MEDIUM]: {
    imgFilter: "blur-filter",
  },
  [DIFFICULTY.HARD]: {
    imgFilter: "silhouette-filter",
  },
};
