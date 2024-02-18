import { FunctionComponent } from "react";

const Navs1: FunctionComponent = () => {
  return (
    <header className="self-stretch bg-gray-200 overflow-hidden flex flex-row items-center justify-start pt-[37px] px-[75px] pb-[42px] box-border gap-[74px] max-w-full z-[1] text-left text-5xl text-white font-lexend lg:gap-[74px] lg:pl-[37px] lg:pr-[37px] lg:box-border mq750:gap-[74px]">
      <div className="w-[335px] flex flex-row items-start justify-start gap-[25px] max-w-full">
        <img
          className="h-[68px] w-[76px] relative object-cover"
          loading="eager"
          alt=""
          src="/appicon@2x.png"
        />
        <div className="h-14 flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/tunedinlogo2.svg"
          />
        </div>
      </div>
      <div className="h-[51px] w-[182.6px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden">
        <img
          className="absolute h-[49.41%] w-[14.79%] top-[32.94%] right-[70.97%] bottom-[17.65%] left-[14.24%] max-w-full overflow-hidden max-h-full"
          alt=""
        />
        <div className="absolute top-[8px] left-[calc(50%_-_22.3px)] capitalize hidden items-center w-[170.1px] h-[34.2px] whitespace-nowrap">
          Sign In
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_91.3px)] box-border w-full h-full border-[1px] border-solid border-white" />
      </div>
      <div className="w-[604px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
        <div className="self-stretch rounded-xl bg-darkslategray-100 flex flex-row items-center justify-start py-[15px] px-10 box-border gap-[12px] max-w-full">
          <img
            className="h-[23px] w-[23px] relative overflow-hidden shrink-0"
            alt=""
            src="/empty-space.svg"
          />
          <input
            className="w-[325px] [border:none] [outline:none] font-lexend text-xl bg-[transparent] h-[25px] relative text-white text-left inline-block max-w-full whitespace-nowrap"
            placeholder="Search for albums, artists, users..."
            type="text"
          />
        </div>
      </div>
    </header>
  );
};

export default Navs1;
