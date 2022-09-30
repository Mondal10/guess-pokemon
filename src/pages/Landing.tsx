import pokemonHeaderImg from "@/assets/images/pokemonHeader.png";
import Button from "@/components/atoms/Button";
import { ROUTE_PATH } from "@/routes/enums";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

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
          settings(initially all generations are selected by default), can you
          spell its name correctly? You'll have 6 attemps to do that.
        </p>
        <p className="mt-4">
          Want to make it more challenging? Go to settings and change the
          difficulty.
        </p>
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
        clickHandler={() => navigate(ROUTE_PATH.GAME)}
      />
    </div>
  );
}

export default Landing;
