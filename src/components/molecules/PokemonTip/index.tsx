import SvgIcon from "@/components/atoms/SvgIcon";
import { getRandomNumber } from "@/shared/utils";
import { getPokemonHintTexts } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

function PokemonTip() {
  const [hintIndex, setHintIndex] = useState(0);
  const hintTexts = useAppSelector(getPokemonHintTexts);

  const newHintHandler = () => {
    setHintIndex(getRandomNumber([0, hintTexts.length]));
  };

  return (
    <div className="border-2 rounded-md border-black p-2 h-24 sm:h-20 overflow-y-auto text-center">
      <div
        className="flex w-full justify-end cursor-pointer reload-hint"
        onClick={newHintHandler}
      >
        <SvgIcon
          iconName="reload"
          wrapperStyle=""
          svgProp={{
            height: "20px",
            width: "20px",
          }}
        />
      </div>
      <p>{hintTexts[hintIndex]}</p>
    </div>
  );
}

export default PokemonTip;
