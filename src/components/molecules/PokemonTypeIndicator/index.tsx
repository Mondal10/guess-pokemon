import ToggleSwitch from "@/components/atoms/ToggleSwitch";
import { useToggle } from "@/components/atoms/ToggleSwitch/useToggleSwitch";
import { getPokemonTypeIndicator } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

function PokemonTypeIndicator() {
  const isPokemonIndicatorOn = useAppSelector(getPokemonTypeIndicator);
  const { setPokemonIndicator } = gameSliceActions;
  const { on, toggle } = useToggle({}, isPokemonIndicatorOn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemonIndicator(on));
  }, [on]);

  return (
    <div className="flex mt-6">
      <p>Pokemon Type Indicator:</p>
      <ToggleSwitch on={on} toggle={toggle} customClass="ml-2 !h-4 !w-8" />
    </div>
  );
}

export default PokemonTypeIndicator;
