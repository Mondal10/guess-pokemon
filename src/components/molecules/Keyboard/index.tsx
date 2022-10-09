import { useEffect } from "react";
import { KEYBOARD_LETTERS } from "@/shared/constants";
import Button from "@/components/atoms/Button";
import { TClickButtonElement } from "@/shared/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import { getPlayerUsedLetterObj } from "@/store/features/game/gameSelector";

function Keyboard() {
  const playerUserLetterObj = useAppSelector(getPlayerUsedLetterObj);
  const dispatch = useAppDispatch();
  const { addTypedLetter, decreaseAttempt } = gameSliceActions;
  const pokemonName = useAppSelector(getPokemonData).name;

  function handleAnswerCorrectness(typedLetter: string) {
    const isAlreadyTypedLetter =
      Object.keys(playerUserLetterObj).includes(typedLetter);

    if (!pokemonName || isAlreadyTypedLetter) return;
    const isCorrectLetter = pokemonName?.includes(typedLetter);

    if (!isCorrectLetter) {
      dispatch(decreaseAttempt());
    }
    dispatch(
      addTypedLetter({ letter: typedLetter, isCorrect: isCorrectLetter })
    );
  }

  const keyClickHandler = (e: TClickButtonElement) => {
    const clickedLetter = (e.target as HTMLButtonElement).innerHTML;
    handleAnswerCorrectness(clickedLetter);
  };

  const keyboardKeyPressEvent = (event: KeyboardEvent) => {
    const { key } = event;
    let pattern = /[a-zA-Z\-]/;
    if (pattern.test(key)) {
      const loweCased = key.toLowerCase();
      handleAnswerCorrectness(loweCased);
    }
  };

  const buttonColour = (letter: string) => {
    let colour = "";
    if (playerUserLetterObj[letter]) {
      colour = playerUserLetterObj[letter].isCorrect
        ? "bg-green-300"
        : "bg-red-300";
    }
    return colour;
  };

  useEffect(() => {
    window.addEventListener("keypress", keyboardKeyPressEvent);
    return () => window.removeEventListener("keypress", keyboardKeyPressEvent);
  }, [pokemonName, playerUserLetterObj]);

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
              disabled={!!playerUserLetterObj[letter]}
              clickHandler={keyClickHandler}
              customClass={`p-1 w-7 sm:w-14 sm:h-14 m-1 sm:m-2 font-medium capitalize ${buttonColour(
                letter
              )}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
