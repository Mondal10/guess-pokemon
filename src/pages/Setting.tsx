import GameDifficulty from "@/components/molecules/GameDifficulty";
import GenerationSelect from "@/components/molecules/GenerationSelect";
import PokemonTypeIndicator from "@/components/molecules/PokemonTypeIndicator";

function Setting() {
  return (
    <div className="mt-5">
      <GameDifficulty />
      <PokemonTypeIndicator />
      <GenerationSelect />
    </div>
  );
}

export default Setting;
