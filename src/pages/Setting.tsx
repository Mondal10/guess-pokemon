import GameDifficulty from "@/components/molecules/GameDifficulty";
import GenerationSelect from "@/components/molecules/GenerationSelect";

function Setting() {
  return (
    <div className="mt-5">
      <GameDifficulty />
      <GenerationSelect />
    </div>
  );
}

export default Setting;
