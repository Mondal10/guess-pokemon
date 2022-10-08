import SvgIcon from "@/components/atoms/SvgIcon";
import { ROUTE_PATH } from "@/routes/enums";
import { useNavigate } from "react-router-dom";

function SettingCTA() {
  const navigate = useNavigate();
  const redirectToSetting = () => navigate(ROUTE_PATH.SETTING);
  return (
    <div onClick={redirectToSetting}>
      <SvgIcon
        iconName="setting"
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

export default SettingCTA;
