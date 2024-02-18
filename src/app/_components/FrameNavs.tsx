import { FunctionComponent } from "react";
import AlbumRowComponenet from "./AlbumRowComponenet";

const FrameNavs: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-1.5 box-border gap-[42px] max-w-full text-left text-21xl text-white font-lexend mq725:gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="w-[890px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 h-[84px] w-[638px] relative text-inherit capitalize font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-5xl mq975:text-13xl">
            Trending Albums
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-sm">
          <AlbumRowComponenet />
        </div>
        <h1 className="m-0 w-[652px] h-[30px] relative text-inherit capitalize font-extralight font-inherit inline-block shrink-0 mix-blend-darken max-w-full z-[1] mq450:text-5xl mq975:text-13xl">
          Rate Your Favrouite Albumn
        </h1>
      </div>
      <div className="w-[1090px] flex flex-col items-start justify-start gap-[33px] max-w-full mq725:gap-[33px]">
        <div className="w-[652px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
          <h1 className="m-0 h-[30px] flex-1 relative text-inherit capitalize font-normal font-inherit flex items-center max-w-full mq450:text-5xl mq975:text-13xl">
            Recommended for you
          </h1>
        </div>
        <AlbumRowComponenet
          propWidth="unset"
          propAlignSelf="stretch"
          propAlignSelf1="stretch"
          propAlignSelf2="stretch"
          propAlignSelf3="stretch"
          propAlignSelf4="stretch"
          propAlignSelf5="stretch"
        />
      </div>
    </div>
  );
};

export default FrameNavs;
