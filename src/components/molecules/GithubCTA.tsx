import SvgIcon from "@/components/atoms/SvgIcon";
import { GITHUB_SOURCE_CODE } from "@/shared/constants";
import { openInNewTab } from "@/shared/utils";

function GithubCTA() {
  const redirectToGtihub = () => openInNewTab(GITHUB_SOURCE_CODE);

  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      onClick={redirectToGtihub}
    >
      <SvgIcon
        iconName="github"
        wrapperStyle=""
        svgProp={{
          height: "30px",
          width: "30px",
        }}
      />
      Source Code
    </div>
  );
}

export default GithubCTA;
