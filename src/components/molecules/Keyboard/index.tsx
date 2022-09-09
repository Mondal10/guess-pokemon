import React, { useEffect } from "react";
import { KEYBOARD_LETTERS } from "@/shared/constants";
import Button from "@/components/atoms/Button";
import { TClickButtonElement } from "@/shared/types";

function Keyboard() {
  const keyClickHandler = (e: TClickButtonElement) => {
    console.log(e.target);
  };

  useEffect(() => {
    const keyboardKeyPressEvent = (event: any) => {
      console.log(event.key);
    };

    window.addEventListener("keypress", keyboardKeyPressEvent);
    return () => window.removeEventListener("keypress", keyboardKeyPressEvent);
  }, []);

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
