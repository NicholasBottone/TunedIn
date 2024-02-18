import { FunctionComponent } from "react";
import ArtistRowFrame from "./ArtistRowFrame";

const ArtistRow: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-between py-px pr-5 pl-[13px] relative gap-[20px] text-left text-lg text-white font-lexend mq1050:flex-wrap mq1050:justify-center">
      <div className="w-[307px] flex flex-row items-center justify-start py-0 pr-9 pl-0 box-border gap-[17px]">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-[calc(100%_-_12px)] w-[225px] absolute my-0 mx-[!important] top-[5px] right-[-170px] bottom-[7px] rounded-2xl bg-darkslateblue" />
          <img
            className="h-28 flex-1 relative rounded-71xl max-w-full overflow-hidden object-contain z-[1]"
            loading="eager"
            alt=""
            src="/artist-image@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2">
          <div className="self-stretch h-9 relative capitalize font-semibold inline-block shrink-0 z-[1]">
            Artist Name
          </div>
        </div>
      </div>
      <div className="w-[307px] my-0 mx-[!important] absolute bottom-[2px] left-[306px] flex flex-row items-center justify-start py-0 pr-9 pl-0 box-border gap-[17px] z-[2]">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-[calc(100%_-_12px)] w-[225px] absolute my-0 mx-[!important] top-[5px] right-[-170px] bottom-[7px] rounded-2xl bg-darkslateblue" />
          <img
            className="h-28 flex-1 relative rounded-71xl max-w-full overflow-hidden object-contain z-[1]"
            alt=""
            src="/artist-image@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2">
          <div className="self-stretch h-9 relative capitalize font-semibold inline-block shrink-0 z-[1]">
            Artist Name
          </div>
        </div>
      </div>
      <ArtistRowFrame />
      <div className="w-[307px] my-0 mx-[!important] absolute top-[4px] right-[313px] flex flex-row items-center justify-start py-0 pr-9 pl-0 box-border gap-[17px] z-[4]">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-[calc(100%_-_12px)] w-[225px] absolute my-0 mx-[!important] top-[5px] right-[-170px] bottom-[7px] rounded-2xl bg-darkslateblue" />
          <img
            className="h-28 flex-1 relative rounded-71xl max-w-full overflow-hidden object-contain z-[1]"
            alt=""
            src="/artist-image@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2">
          <div className="self-stretch h-9 relative capitalize font-semibold inline-block shrink-0 z-[1]">
            Artist Name
          </div>
        </div>
      </div>
      <ArtistRowFrame />
    </div>
  );
};

export default ArtistRow;
