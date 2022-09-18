import { useEffect } from "react";
import { KEYBOARD_LETTERS } from "@/shared/constants";
import Button from "@/components/atoms/Button";
import { TClickButtonElement } from "@/shared/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";

function Keyboard() {
  const dispatch = useAppDispatch();
  const { addTypedLetter, decreaseAttempt } = gameSliceActions;
  const pokemonName = useAppSelector(getPokemonData).name;

  function handleAnswerCorrectness(typedLetter: string) {
    if (!pokemonName?.includes(typedLetter)) {
      dispatch(decreaseAttempt());
    }
  }

  const keyClickHandler = (e: TClickButtonElement) => {
    const clickedLetter = (e.target as HTMLButtonElement).innerHTML;
    dispatch(addTypedLetter(clickedLetter));
    handleAnswerCorrectness(clickedLetter);
  };

  const keyboardKeyPressEvent = (event: KeyboardEvent) => {
    const { key } = event;
    let pattern = /[a-zA-Z]/;
    if (pattern.test(key)) {
      const loweCased = key.toLowerCase();
      dispatch(addTypedLetter(loweCased));
      handleAnswerCorrectness(loweCased);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", keyboardKeyPressEvent);
    return () => window.removeEventListener("keypress", keyboardKeyPressEvent);
  }, [pokemonName]);

  return (
    <div>
      {KEYBOARD_LETTERS.map((rows, index) => (
        <div
          key={index}
          className="flex flex-nowrap justify-center items-center w-full"
        >
          {rows.map((letter) => (
            <Button
              key={letter}
              label={letter}
              clickHandler={keyClickHandler}
              customClass="p-1 w-7 sm:w-14 sm:h-14 m-1 sm:m-2 font-medium capitalize"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
