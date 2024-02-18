import { FunctionComponent } from "react";
import Navs from "../Navs";

const NavsFrameInstance: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-start  box-border max-w-full">
      <Navs
        tunedinLogo="/tunedinlogo1.svg"
        artistImageTop="0"
        artistImagePosition="sticky"
        propMargin="unset"
        propFontWeight="unset"
      />
    </div>
  );
};

export default NavsFrameInstance;
