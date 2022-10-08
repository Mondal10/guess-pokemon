import Lives from "@/components/molecules/Lives";
import Keyboard from "@/components/molecules/Keyboard";
import Answer from "@/components/molecules/Answer";
import Pokemon from "@/components/molecules/Pokemon";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";
import { getFormattedPokemonID } from "@/shared/utils";
import GameOverModal from "@/components/modals/GameOver";
import RoundWonModal from "@/components/modals/RoundWon";

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
      <GameOverModal />
      <RoundWonModal />
    </div>
  );
}

export default Game;
