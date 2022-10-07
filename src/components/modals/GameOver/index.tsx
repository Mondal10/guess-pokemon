import Modal from "@/components/atoms/Modal";
import sadPikachu from "@/assets/images/sad.png";
import { getRemainingAttempts } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import { POKEDEX_BASE_URL } from "@/shared/constants";
import { openInNewTab } from "@/shared/utils";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";

function GameOverModal() {
  const [_, setShowModal] = useState(false);
  const attemptsLeft = useAppSelector(getRemainingAttempts);
  const pokemonData = useAppSelector(getPokemonData);
  const dispatch = useAppDispatch();
  const { resetGameState } = gameSliceActions;

  const onCloseHandler = () => {
    setShowModal(false);
    dispatch(resetGameState());
  };

  const tryAgainHandler = () => {
    const url = `${POKEDEX_BASE_URL}pokemoninfo/${pokemonData.id}`;
    openInNewTab(url);
  };

  const modalBody = (
    <div className="flex flex-col items-center">
      <img src={sadPikachu} className="w-1/2 sm:w-1/3" alt="Sad Pikachu" />
      <b>Game Over!</b>
      <p>Oops! you are out of Pokéballs</p>
    </div>
  );
  const modalFooter = (
    <div className="flex justify-around">
      <Button label="Try Again" clickHandler={onCloseHandler} />
      <Button label="Get Trained" clickHandler={tryAgainHandler} />
    </div>
  );

  return (
    <div>
      <Modal
        onClose={onCloseHandler}
        showModal={attemptsLeft === 0}
        hideModalCross={true}
        modalBody={modalBody}
        modalFooter={modalFooter}
      />
    </div>
  );
}

export default GameOverModal;
