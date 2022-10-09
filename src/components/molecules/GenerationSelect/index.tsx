import RadioButton from "@/components/atoms/RadioButton";
import { RADIO_TYPE } from "@/shared/enums";
import { TChangeInputElement } from "@/shared/types";
import { getSelectedGenerations } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function GenerationSelect() {
  const radioType = RADIO_TYPE.MULTISELECT;
  const options = [
    { id: "1", value: "gen1", label: "Gen 1" },
    { id: "2", value: "gen2", label: "Gen 2" },
    { id: "3", value: "gen3", label: "Gen 3" },
    { id: "4", value: "gen4", label: "Gen 4" },
    { id: "5", value: "gen5", label: "Gen 5" },
    { id: "6", value: "gen6", label: "Gen 6" },
    { id: "7", value: "gen7", label: "Gen 7" },
    { id: "8", value: "gen8", label: "Gen 8" },
  ];
  const selectedGenerations = useAppSelector(getSelectedGenerations);
  const dispatch = useAppDispatch();
  const { setSelectedGenerations } = gameSliceActions;

  const onChangeGeneration = (event: TChangeInputElement) => {
    const { checked, value } = event.target;
    // On option selection add and remove checked and unchecked values
    const updatedSelectedOptions = options.reduce(
      (prevSelected: string[], currSelected) => {
        if (checked) {
          currSelected.value === value &&
            prevSelected.push(...selectedGenerations, currSelected.value);
        } else {
          prevSelected = selectedGenerations.filter((item) => item !== value);
        }

        return prevSelected;
      },
      []
    );
    // Should have atleast one generation selected by default
    const hasAtleastOneSelected = updatedSelectedOptions.length > 0;

    hasAtleastOneSelected &&
      dispatch(setSelectedGenerations(updatedSelectedOptions));
  };

  return (
    <div className="mt-2">
      <p>Select Pokémon Generations:</p>
      <RadioButton
        options={options}
        radioType={radioType}
        selectedValues={selectedGenerations}
        onChangeHandler={onChangeGeneration}
        wrapperStyle="grid grid-cols-4 grid-rows-2"
      />
    </div>
  );
}

export default GenerationSelect;
