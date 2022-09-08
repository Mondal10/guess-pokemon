import React from "react";
import styles from "./styles.module.css";

function Pokemon() {
  const { blurFilter, silhouetteFilter, pokemonImg } = styles;
  const pokemonImageURL =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png";
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="animate-ping absolute h-28 sm:h-32 w-28 sm:w-32 rounded-full bg-green-500 opacity-75"></div>
        <img
          className={`${silhouetteFilter} ${pokemonImg} h-44 sm:h-60 w-44 sm:w-60`}
          src={pokemonImageURL}
        ></img>
      </div>
    </div>
  );
}

export default Pokemon;
