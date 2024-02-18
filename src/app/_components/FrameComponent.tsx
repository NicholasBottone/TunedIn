import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-between py-0 px-[13px] gap-[20px] text-left text-lg text-white font-lexend mq1025:flex-wrap mq1025:justify-center">
      <div className="h-28 w-[314px] flex flex-row items-start justify-end pt-[33px] pb-0 pr-0 pl-[26px] box-border relative">
        <div className="h-full w-[calc(100%_-_7px)] absolute my-0 mx-[!important] top-[0px] right-[7px] bottom-[0px] left-[0px]">
          <div className="absolute h-[calc(100%_-_12px)] w-[73.29%] top-[5px] right-[4.56%] bottom-[7px] left-[22.15%] rounded-2xl bg-darkslateblue" />
          <img
            className="absolute h-full w-[40.1%] top-[0px] right-[59.9%] bottom-[0px] left-[0%] rounded-71xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
            alt=""
            src="/artist-image-2@2x.png"
          />
        </div>
        <div className="h-10 w-[145px] relative capitalize font-semibold inline-block shrink-0 z-[2]">
          Taylor Shift
        </div>
      </div>
      <div className="w-[307px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border text-center">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[38px] pl-0">
          <div className="h-28 flex-1 relative z-[3]">
            <div className="absolute h-[calc(100%_-_12px)] w-[73.29%] top-[5px] right-[4.56%] bottom-[7px] left-[22.15%] rounded-2xl bg-darkslateblue" />
            <img
              className="absolute h-full w-[40.1%] top-[0px] right-[59.9%] bottom-[0px] left-[0%] rounded-71xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/artist-image-3@2x.png"
            />
          </div>
          <div className="h-[26px] w-[134px] relative capitalize font-semibold inline-block shrink-0 z-[4] ml-[-172px]">
            Drake
          </div>
        </div>
      </div>
      <div className="h-[123px] w-[307px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-end py-[35px] px-10 relative">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[5]">
            <div className="absolute h-[calc(100%_-_12px)] w-[73.29%] top-[5px] right-[4.56%] bottom-[7px] left-[22.15%] rounded-2xl bg-darkslateblue" />
            <img
              className="absolute h-full w-[40.1%] top-[0px] right-[59.9%] bottom-[0px] left-[0%] rounded-71xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/artist-image-4@2x.png"
            />
          </div>
          <div className="h-8 w-[129px] relative capitalize inline-block shrink-0 z-[6]">
            Ar Rehman
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
