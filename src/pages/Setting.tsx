import GameDifficulty from "@/components/molecules/GameDifficulty";
import GenerationSelect from "@/components/molecules/GenerationSelect";
import HintToggle from "@/components/molecules/HintToggle";
import PokemonTypeIndicator from "@/components/molecules/PokemonTypeIndicator";

function Setting() {
  return (
    <div className="mt-5">
      <GameDifficulty />
      <PokemonTypeIndicator />
      <HintToggle />
      <GenerationSelect />
    </div>
  );
}

export default Setting;
