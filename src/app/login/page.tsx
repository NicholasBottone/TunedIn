import { FunctionComponent } from "react";
import TunedinLogoIcon from "~/app/_components/TunedinLogoIcon";
import AppleSignin from "~/app/_components/AppleSignin";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="relative flex w-full flex-row items-center justify-center tracking-[normal] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset]">
      <main className="box-border flex max-w-full flex-1 flex-col items-center justify-start gap-[72px] overflow-hidden bg-midnightblue pb-[289px] pl-[21px] pr-5 pt-[131px] mq800:box-border mq800:pb-[188px] mq800:pt-[85px] mq450:box-border mq450:gap-[72px] mq450:pb-[122px] mq450:pt-[55px]">
        <TunedinLogoIcon />
        <div className="flex w-[387px] max-w-full flex-col items-center justify-start gap-[53px] mq450:gap-[53px]">
          <div className="flex flex-row items-center justify-center gap-[7px] self-stretch rounded-29xl bg-dodgerblue px-5 pb-5 pt-[21px] mq450:flex-wrap">
            <img
              className="relative h-[30px] w-8"
              loading="eager"
              alt=""
              src="/spotifyicon.svg"
            />
            <img
              className="relative h-[16.5px] w-[151.5px]"
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
