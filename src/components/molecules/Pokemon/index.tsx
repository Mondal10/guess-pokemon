import AppSpinner from "@/components/atoms/AppSpinner";
import {
  DIFFICULTY_CONFIG,
  POKEMON_IMG_URL,
  POKEMON_TYPE_COLOUR,
} from "@/shared/constants";
import { DIFFICULTY } from "@/shared/enums";
import { getPokemonType } from "@/store/features/pokemon/pokemonSelector";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import "./pokemon.styles.css";

interface IProps {
  pokemonID: string | null;
}

function Pokemon(props: IProps) {
  const { pokemonID } = props;

  const [loaded, setLoaded] = useState(false);

  const pokemonImageURL = `${POKEMON_IMG_URL}${pokemonID}.png`;
  const { imgFilter } = DIFFICULTY_CONFIG[DIFFICULTY.EASY];
  const showImage = loaded ? "block" : "hidden";
  const pokemonTypeColour = `bg-${
    POKEMON_TYPE_COLOUR[useAppSelector(getPokemonType)]
  }`;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-44 sm:h-60 w-44 sm:w-60">
        {loaded ? null : <AppSpinner customClasses="h-10 w-10 border-4" />}
        <div
          className={`animate-ping absolute h-28 sm:h-32 w-28 sm:w-32 rounded-full opacity-75 ${pokemonTypeColour}`}
        ></div>
        <img
          className={`${imgFilter} ${showImage} pokemon-img`}
          src={pokemonImageURL}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default Pokemon;
