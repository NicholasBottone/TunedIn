import { FunctionComponent } from "react";
import TunedinLogoIcon from "./_components/TunedinLogoIcon";
import AppleSignin from "../_components/AppleSignin";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-center justify-center tracking-[normal]">
      <main className="flex-1 bg-midnightblue overflow-hidden flex flex-col items-center justify-start pt-[131px] pb-[289px] pr-5 pl-[21px] box-border gap-[72px] max-w-full mq450:gap-[72px] mq450:pt-[55px] mq450:pb-[122px] mq450:box-border mq800:pt-[85px] mq800:pb-[188px] mq800:box-border">
        <TunedinLogoIcon />
        <div className="w-[387px] flex flex-col items-center justify-start gap-[53px] max-w-full mq450:gap-[53px]">
          <div className="self-stretch rounded-29xl bg-dodgerblue flex flex-row items-center justify-center pt-[21px] px-5 pb-5 gap-[7px] mq450:flex-wrap">
            <img
              className="h-[30px] w-8 relative"
              loading="eager"
              alt=""
              src="/spotifyicon.svg"
            />
            <img
              className="h-[16.5px] w-[151.5px] relative"
              loading="eager"
              alt=""
              src="/sign-in-with-spotify.svg"
            />
          </div>
          <AppleSignin />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
