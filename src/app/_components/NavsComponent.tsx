import { FunctionComponent } from "react";
import Navs from "./Navs";

const NavsComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[11px] box-border sticky top-[0] z-[99] max-w-full">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
      <Navs tunedinLogo="/tunedinlogo.svg" />
    </div>
  );
};

export default NavsComponent;
