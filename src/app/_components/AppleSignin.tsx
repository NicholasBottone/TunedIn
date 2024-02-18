import { FunctionComponent } from "react";

const AppleSignin: FunctionComponent = () => {
  return (
    <div className="w-[364px] flex flex-col items-center justify-start gap-[38px] max-w-full mq450:gap-[38px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[42px] mq450:gap-[42px]">
        <div className="flex flex-row items-center justify-center py-0 pr-[17px] pl-[15px] gap-[7px] mq450:flex-wrap">
          <img
            className="h-px w-[152px] relative"
            loading="eager"
            alt=""
            src="/vector-1-stroke.svg"
          />
          <img
            className="h-[8.8px] w-[13.8px] relative"
            loading="eager"
            alt=""
            src="/or.svg"
          />
          <img
            className="h-px w-[152px] relative"
            loading="eager"
            alt=""
            src="/vector-2-stroke.svg"
          />
        </div>
        <div className="self-stretch rounded-29xl bg-gray-100 flex flex-row items-center justify-center pt-[30px] pb-8 pr-5 pl-[22px] gap-[9px]">
          <img
            className="h-[23.6px] w-[19.2px] relative"
            loading="eager"
            alt=""
            src="/group.svg"
          />
          <img
            className="h-[14.7px] w-[124.8px] relative"
            loading="eager"
            alt=""
            src="/sign-in-with-apple.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-29xl bg-gray-100 flex flex-row items-center justify-center pt-[31px] pb-[33px] pr-5 pl-[21px] gap-[8px]">
        <img
          className="h-[21.5px] w-[21.2px] relative"
          loading="eager"
          alt=""
          src="/g-mark-1.svg"
        />
        <img
          className="h-[14.7px] w-[134.6px] relative"
          loading="eager"
          alt=""
          src="/sign-in-with-google.svg"
        />
      </div>
      <img
        className="w-[193.3px] h-[14.6px] relative"
        loading="eager"
        alt=""
        src="/already-have-an-account-login.svg"
      />
    </div>
  );
};

export default AppleSignin;
