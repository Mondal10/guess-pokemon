import Modal from "@/components/atoms/Modal";
import happyPikachu from "@/assets/images/happy.png";
import { getRemainingAttempts } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import { POKEDEX_BASE_URL } from "@/shared/constants";
import {
  getGenerationRange,
  getRandomNumber,
  openInNewTab,
} from "@/shared/utils";
import { getPokemonData } from "@/store/features/pokemon/pokemonSelector";
import {
  getPlayerUsedLetterObj,
  getSelectedGenerations,
} from "@/store/features/game/gameSelector";
import {
  fetchPokemon,
  pokemonSliceActions,
} from "@/store/features/pokemon/pokemonSlice";

function RoundWonModal() {
  const [showModal, setShowModal] = useState(false);
  const attemptsLeft = useAppSelector(getRemainingAttempts);
  const pokemonData = useAppSelector(getPokemonData);
  const playerUserLetterObj = useAppSelector(getPlayerUsedLetterObj);
  const selectedGenerations = useAppSelector(getSelectedGenerations);
  const getSelectedGenerationRange = getGenerationRange(selectedGenerations);
  const getRandomPokemonID =
    getSelectedGenerationRange && getRandomNumber(getSelectedGenerationRange);

  const dispatch = useAppDispatch();
  const { resetAttempt, resetTypedLetter } = gameSliceActions;
  const { resetPokemonState } = pokemonSliceActions;

  const onCloseHandler = () => {
    setShowModal(false);
    dispatch(resetAttempt());
    dispatch(resetTypedLetter());
  };

  const checkWinningCondition = () => {
    if (!pokemonData.name) return;
    const uniquePokemonLetter = [...new Set([...pokemonData.name])];
    const correctLetters = Object.values(playerUserLetterObj).filter(
      (letterObj) => letterObj.isCorrect
    );
    if (attemptsLeft && correctLetters.length === uniquePokemonLetter.length) {
      setShowModal(true);
    }
  };
  useEffect(() => {
    checkWinningCondition();
  }, [playerUserLetterObj]);

  const catchMoreHandler = () => {
    setShowModal(false);
    dispatch(resetAttempt());
    dispatch(resetTypedLetter());
    dispatch(resetPokemonState());
    dispatch(fetchPokemon(getRandomPokemonID));
  };
  const pokedexHandler = () => {
    const url = `${POKEDEX_BASE_URL}page=0`;
    openInNewTab(url);
  };

  const modalBody = (
    <div className="flex flex-col items-center">
      <img src={happyPikachu} className="w-3/4 sm:w-1/3" alt="Sad Pikachu" />
      <b>Gotcha!</b>
      <p>
        <span className="capitalize">{pokemonData.name}</span> was perfectly
        caught! Well Done!
      </p>
    </div>
  );
  const modalFooter = (
    <div className="flex justify-around">
      <Button label="Catch More" clickHandler={catchMoreHandler} />
      <Button label="Pokedex" clickHandler={pokedexHandler} />
    </div>
  );

  return (
    <div>
      <Modal
        onClose={onCloseHandler}
        showModal={showModal}
        hideModalCross={true}
        modalBody={modalBody}
        modalFooter={modalFooter}
      />
    </div>
  );
}

export default RoundWonModal;
