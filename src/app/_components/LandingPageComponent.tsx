import { FunctionComponent } from "react";

const LandingPageComponent: FunctionComponent = () => {
  return (
    <footer className="relative box-border flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch pb-[147px] pl-[95px] pr-[140px] pt-[57px] text-left font-body-xl-medium text-xl text-neutral-900 mq1050:flex-wrap mq750:box-border mq750:pl-[47px] mq750:pr-[70px] mq450:box-border mq450:pl-5 mq450:pr-5">
      <div className="w-100vh absolute bottom-[0px] left-[0px] right-[0px] top-[0px] mx-[!important] my-0 h-full bg-darkslategray-200" />
      <div className="z-[1] flex flex-row items-start justify-start pb-[19px] pl-0  pt-0">
        <h3 className="font-inherit relative m-0 text-inherit font-medium leading-[28px] mq450:text-base mq450:leading-[22px]">
          TunedIn is a private product
        </h3>
        <h3 className="font-inherit absolute bottom-[-16.3px] left-[0px] mx-[!important] my-0 text-inherit font-medium leading-[28px] text-neutral-500 mq450:text-base mq450:leading-[22px]">
          https://
          <a
            className="text-[inherit]"
            href="https://landify.design/?ref=landifyuikit"
            target="_blank"
          >
            <span className="[text-decoration:underline]">w</span>
          </a>
          ww.tunedin.vercel.app
        </h3>
      </div>
      <div className="flex w-[400px] max-w-full flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq450:gap-[32px]">
        <img
          className="relative z-[1] h-28 w-[134px] object-cover mq450:flex-1"
          alt=""
          src="../../public/appicon-1@2x.png"
        />
        <div className="box-border flex min-w-[152px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-3.5">
          <img
            className="relative z-[1] h-[55px] max-w-full shrink-0 self-stretch overflow-hidden"
            alt=""
            src="/tunedinlogo-1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default LandingPageComponent;
