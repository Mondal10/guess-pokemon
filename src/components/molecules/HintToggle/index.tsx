import ToggleSwitch from "@/components/atoms/ToggleSwitch";
import { useToggle } from "@/components/atoms/ToggleSwitch/useToggleSwitch";
import { getHintVisibility } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

function HintToggle() {
  const isHintOn = useAppSelector(getHintVisibility);
  const { setHintVisibility } = gameSliceActions;
  const { on, toggle } = useToggle({}, isHintOn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHintVisibility(on));
  }, [on]);

  return (
    <div className="flex mt-2">
      <p>Show Hints:</p>
      <ToggleSwitch on={on} toggle={toggle} customClass="ml-2 !h-4 !w-8" />
    </div>
  );
}

export default HintToggle;
