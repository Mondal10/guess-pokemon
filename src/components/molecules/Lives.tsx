import { MAX_ATTEMPTS } from "@/shared/constants";
import SvgIcon from "@/components/atoms/SvgIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { gameSliceActions } from "@/store/features/game/gameSlice";

function Lives() {
  const attempts = useAppSelector((state) => state.game.attempts);
  const dispatch = useAppDispatch();

  // To convert count to array of count length so that its iterable
  const attemptCountToArr = Array.from(Array(attempts).keys());

  return (
    <div>
      <p>{`${attempts}/${MAX_ATTEMPTS}`}</p>
      {attemptCountToArr.map((live) => (
        <SvgIcon
          key={live}
          iconName="pokeball"
          wrapperStyle=""
          svgProp={{
            stroke: "black",
            height: "50px",
            width: "50px",
          }}
        />
      ))}
      <div>
        <button
          className="border-2 border-black"
          onClick={() => dispatch(gameSliceActions.decreaseAttempt())}
          disabled={attempts <= 0}
        >
          Decrease Attempt
        </button>
        <button
          className="border-2 border-black"
          onClick={() => dispatch(gameSliceActions.resetAttempt())}
        >
          Reset Attempt
        </button>
      </div>
    </div>
  );
}

export default Lives;
