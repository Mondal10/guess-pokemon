import Lives from "@/components/molecules/Lives";
import Keyboard from "@/components/molecules/Keyboard";
import Answer from "@/components/molecules/Answer";
import Pokemon from "@/components/molecules/Pokemon";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import { fetchPokemon } from "@/store/features/pokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import {
  getFormattedPokemonID,
  getGenerationRange,
  getRandomNumber,
} from "@/shared/utils";

function Game() {
  const pokemonData = useAppSelector(getPokemonData);
  const formattedPokemonID = getFormattedPokemonID(pokemonData.id);
  const getSelectedGenerationRange = getGenerationRange([1]);
  const getRandomPokemonID =
    getSelectedGenerationRange && getRandomNumber(getSelectedGenerationRange);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(getRandomPokemonID));
  }, []);

  return (
    <div>
      <Lives />
      <Pokemon pokemonID={formattedPokemonID} />
      <br />
      <Answer />
      <br />
      <Keyboard />
    </div>
  );
}

export default Game;
