import SvgIcon from "@/components/atoms/SvgIcon";
import { ROUTE_PATH } from "@/routes/enums";
import { useNavigate } from "react-router-dom";

function HomeCTA() {
  const navigate = useNavigate();
  const redirectToHome = () => navigate(ROUTE_PATH.HOME);

  return (
    <div onClick={redirectToHome}>
      <SvgIcon
        iconName="home"
        wrapperStyle=""
        svgProp={{
          stroke: "black",
          height: "30px",
          width: "30px",
        }}
      />
    </div>
  );
}

export default HomeCTA;
