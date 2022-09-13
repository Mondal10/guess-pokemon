import Lives from "@/components/molecules/Lives";
import Keyboard from "@/components/molecules/Keyboard";
import Answer from "@/components/molecules/Answer";
import Pokemon from "@/components/molecules/Pokemon";

function Game() {
  return (
    <div>
      <Lives />
      <Pokemon pokemonID="100" />
      <br />
      <Answer />
      <br />
      <Keyboard />
    </div>
  );
}

export default Game;
