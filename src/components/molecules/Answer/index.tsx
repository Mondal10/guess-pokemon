import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";

function Answer() {
  const pokemonData = useAppSelector(getPokemonData);
  const typedLetters = useAppSelector((state) => state.game.playerUsedLetters);

  const letterArr = [...(pokemonData.name ?? "")].map((data) => {
    if (typedLetters.includes(data)) return data;
    else return "";
  });

  return (
    <>
      <div className="flex gap-1 justify-center items-center w-full">
        {letterArr.map((letter, index) => (
          <div
            key={`slot_${index}`}
            className="capitalize border-b-4 border-black w-8 h-8 text-center"
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  );
}

export default Answer;
