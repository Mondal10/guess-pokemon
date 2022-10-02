import Dropdown from "@/components/atoms/Dropdown";
import { DIFFICULTY } from "@/shared/enums";
import { TChangeSelectElement } from "@/shared/types";
import { getGameDifficulty } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function GameDifficulty() {
  const currentGameDifficulty = useAppSelector(getGameDifficulty);
  const dispatch = useAppDispatch();
  const { setGameDifficulty } = gameSliceActions;

  const difficultyOptions = [
    {
      name: "Easy",
      value: DIFFICULTY.EASY,
      id: 1,
    },
    {
      name: "Medium",
      value: DIFFICULTY.MEDIUM,
      id: 2,
    },
    {
      name: "Hard",
      value: DIFFICULTY.HARD,
      id: 3,
    },
  ];

  const clientChangeHandler = (e: TChangeSelectElement) => {
    dispatch(setGameDifficulty(e.target.value as DIFFICULTY));
  };

  return (
    <div>
      <Dropdown
        onChangeHandler={clientChangeHandler}
        label="Select Difficulty"
        dropDownOptions={difficultyOptions}
        selectedValue={currentGameDifficulty}
      />
    </div>
  );
}

export default GameDifficulty;
