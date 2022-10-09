import AppSpinner from "@/components/atoms/AppSpinner";
import {
  DIFFICULTY_CONFIG,
  POKEMON_IMG_URL,
  POKEMON_TYPE_COLOUR,
} from "@/shared/constants";
import {
  getGameDifficulty,
  getPokemonTypeIndicator,
} from "@/store/features/game/gameSelector";
import { getPokemonType } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";
import { memo, useEffect, useState } from "react";
import "./pokemon.styles.css";

interface IProps {
  pokemonID: string | null;
}

function Pokemon(props: IProps) {
  const { pokemonID } = props;

  const [loaded, setLoaded] = useState(false);
  const currentGameDifficulty = useAppSelector(getGameDifficulty);
  const pokemonType = useAppSelector(getPokemonType);
  const isPokemonIndicatorOn = useAppSelector(getPokemonTypeIndicator);

  const pokemonImageURL = pokemonID && `${POKEMON_IMG_URL}${pokemonID}.png`;

  // Pokemon CSS
  const { imgFilter } = DIFFICULTY_CONFIG[currentGameDifficulty];
  const showImage = loaded ? "block" : "hidden";
  const pokemonTypeColour = `${
    isPokemonIndicatorOn ? POKEMON_TYPE_COLOUR[pokemonType] : ""
  }`;
  const pokemonTypeCss = `${
    isPokemonIndicatorOn
      ? "animate-ping absolute h-28 sm:h-32 w-28 sm:w-32 rounded-full opacity-75"
      : ""
  }`;

  // To add loader when new pokemon encountered
  // when no change we should not set to false
  useEffect(() => {
    !pokemonImageURL && setLoaded(false);
  }, [pokemonImageURL]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-44 sm:h-60 w-44 sm:w-60">
        {loaded ? null : <AppSpinner customClasses="h-10 w-10 border-4" />}
        <div className={`${pokemonTypeCss} ${pokemonTypeColour}`}></div>
        <img
          className={`${imgFilter} ${showImage} pokemon-img`}
          src={pokemonImageURL ?? ""}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default memo(Pokemon);
