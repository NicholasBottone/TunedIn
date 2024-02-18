import { FunctionComponent } from "react";
import Navs from "./Navs";

const NavsFrameInstance: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[46px] box-border max-w-full">
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
