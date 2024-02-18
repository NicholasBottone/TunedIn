import { FunctionComponent } from "react";

const ArtistRowFrame: FunctionComponent = () => {
  return (
    <div className="w-[307px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border text-left text-lg text-white font-lexend">
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-9 pl-0 gap-[17px] z-[3]">
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
    </div>
  );
};

export default ArtistRowFrame;
