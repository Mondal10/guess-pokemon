import { GENERATION_POKEMON_ID_RANGE } from "./constants";

/**
 * Returns a random integer between start (inclusive) and end (inclusive).
 * @param range range of number
 * @returns a random number within range
 */
export function getRandomNumber(range: [number, number]): number {
  let [start, end] = range;
  start = Math.ceil(start);
  end = Math.floor(end);

  return Math.floor(Math.random() * (end - start + 1) + start); // The end is inclusive and the start is inclusive
}

/**
 * Returns min and max number for the selected generation pokemons
 * @param selectedGenerations
 * @returns
 */
export function getGenerationRange(
  selectedGenerations: number[]
): [number, number] | null {
  if (!selectedGenerations.length) return null;

  let range: number[] = [];

  selectedGenerations.forEach((generation) =>
    range.push(
      ...GENERATION_POKEMON_ID_RANGE[
        generation as keyof typeof GENERATION_POKEMON_ID_RANGE
      ]
    )
  );

  const min = Math.min(...range);
  const max = Math.max(...range);

  return [min, max];
}

/**
 * For converting #1 to #001 and #10 to #010
 * @param pokemonID
 * @returns formatted pokemon id
 */
export function getPokemonNumber(pokemonID: number): string {
  const length = pokemonID.toString().length;

  if (length === 1) {
    return `00${pokemonID}`;
  } else if (length === 2) {
    return `0${pokemonID}`;
  } else {
    return `${pokemonID}`;
  }
}
