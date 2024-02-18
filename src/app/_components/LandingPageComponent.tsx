import { FunctionComponent } from "react";

const LandingPageComponent: FunctionComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-between pt-[57px] pb-[147px] pr-[140px] pl-[95px] box-border relative gap-[20px] max-w-full text-left text-xl text-neutral-900 font-body-xl-medium mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq750:pl-[47px] mq750:pr-[70px] mq750:box-border">
      <div className="h-full w-100vh absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-darkslategray-200" />
      <div className="flex flex-row items-start justify-start pt-0 pb-[19px] pl-0  z-[1]">
        <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit mq450:text-base mq450:leading-[22px]">
          TunedIn is a private product
        </h3>
        <h3 className="my-0 mx-[!important] absolute bottom-[-16.3px] left-[0px] text-inherit leading-[28px] font-medium font-inherit text-neutral-500 mq450:text-base mq450:leading-[22px]">
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
      <div className="w-[400px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[32px]">
        <img
          className="h-28 w-[134px] relative object-cover z-[1] mq450:flex-1"
          alt=""
          src="/appicon-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[152px]">
          <img
            className="self-stretch h-[55px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/tunedinlogo-1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default LandingPageComponent;
