import Lives from "@/components/molecules/Lives";
import Keyboard from "@/components/molecules/Keyboard";
import Answer from "@/components/molecules/Answer";
import Pokemon from "@/components/molecules/Pokemon";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";
import { getFormattedPokemonID } from "@/shared/utils";

function Game() {
  const pokemonData = useAppSelector(getPokemonData);
  const formattedPokemonID = getFormattedPokemonID(pokemonData.id);

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
