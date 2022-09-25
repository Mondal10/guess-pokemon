import SvgIcon from "@/components/atoms/SvgIcon";
import { useAppSelector } from "@/store/hooks";

function Lives() {
  const attempts = useAppSelector((state) => state.game.attempts);

  // To convert count to array of count length so that its iterable
  const attemptCountToArr = Array.from(Array(attempts).keys());

  return (
    <div className="flex justify-center items-center h-auto py-2">
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
      {!attemptCountToArr.length && (
        <span className="font-bold">No Attempts Left</span>
      )}
    </div>
  );
}

export default Lives;
