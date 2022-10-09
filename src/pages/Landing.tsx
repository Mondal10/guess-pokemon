import pokemonHeaderImg from "@/assets/images/pokemonHeader.png";
import Button from "@/components/atoms/Button";
import { ROUTE_PATH } from "@/routes/enums";
import { POKEMON_TYPE_COLOUR } from "@/shared/constants";
import { getGenerationRange, getRandomNumber } from "@/shared/utils";
import { getSelectedGenerations } from "@/store/features/game/gameSelector";
import { gameSliceActions } from "@/store/features/game/gameSlice";
import {
  fetchPokemon,
  pokemonSliceActions,
} from "@/store/features/pokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const selectedGenerations = useAppSelector(getSelectedGenerations);
  const getSelectedGenerationRange = getGenerationRange(selectedGenerations);
  const getRandomPokemonID =
    getSelectedGenerationRange && getRandomNumber(getSelectedGenerationRange);
  const { resetAttempt, resetTypedLetter } = gameSliceActions;
  const { resetPokemonState } = pokemonSliceActions;
  const dispatch = useAppDispatch();

  const startGameHandler = () => {
    navigate(ROUTE_PATH.GAME);

    dispatch(resetAttempt());
    dispatch(resetTypedLetter());
    dispatch(resetPokemonState());
    dispatch(fetchPokemon(getRandomPokemonID));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-2/3 sm:w-1/3"
        src={pokemonHeaderImg}
        alt="Pokemon gotta catch 'em all!"
      />
      <div className="w-5/6 sm:w-2/3 mt-10">
        <p>
          A random Pokémon will appear based on generations selected from
          settings(initially only Gen 1 pokémons are selected by default), can
          you spell them all correctly? You'll have 6 attemps to do that.
        </p>
        <p className="mt-4">
          Want to make it more challenging? Go to settings and change the
          difficulty.
        </p>
        <h2 className="text-lg font-medium mt-10">Pokemon Type Indicator:</h2>
        <p>
          Pokemon background will blink with this colour, this can be disabled
          from settings.
        </p>
        <div className="flex justify-evenly capitalize">
          {Object.keys(POKEMON_TYPE_COLOUR).map((pokemonType) => (
            <div key={pokemonType} className="flex items-center">
              <span
                className={`${
                  POKEMON_TYPE_COLOUR[
                    pokemonType as keyof typeof POKEMON_TYPE_COLOUR
                  ]
                } inline-block opacity-75 w-4 h-4 rounded-full m-2`}
              ></span>
              <span className="capitalize">{pokemonType}</span>
            </div>
          ))}
        </div>
        <h2 className="text-lg font-medium mt-10">How To Play?</h2>
        <ul className="list-disc list-inside">
          <li>
            Try to guess the Pokémon and type the answer(Answers are not
            case-sensitive).
          </li>
          <li>
            Each time you guess a letter, the letter turns either green(correct)
            or red(incorrect).
          </li>
          <li>
            Make sure to guess and catch as many Pokémon as possible you have
            only 6 attempts.
          </li>
        </ul>
      </div>
      <Button
        customClass="mt-10 py-2 px-4"
        label="Start Game"
        clickHandler={startGameHandler}
      />
    </div>
  );
}

export default Landing;
