import { FunctionComponent } from "react";
import ArtistnameFrame from "./ArtistnameFrame";
import AlbumRowComponenet from "./AlbumRowComponenet";

const AlbumnameFrame: FunctionComponent = () => {
  return (
    <section className="w-[1136px] flex flex-col items-start justify-start pt-0 px-5 pb-[107px] box-border gap-[46px] max-w-full text-left text-21xl text-white font-lexend lg:pb-[70px] lg:box-border mq750:gap-[46px] mq750:pb-[45px] mq750:box-border">
      <ArtistnameFrame trendingAlbums="Trending Albums" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[15px] pr-0 pl-1.5 box-border max-w-full">
        <ArtistnameFrame
          trendingAlbums="Recommended for you"
          propAlignSelf="unset"
          propFlex="1"
          propGap="6px"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 w-[847px] h-[84px] relative text-inherit capitalize font-normal font-inherit flex items-center shrink-0 max-w-full mq450:text-5xl mq1050:text-13xl">
          What Your Friends are listening To
        </h1>
        <AlbumRowComponenet
          artistNameWidth="unset"
          artistNameAlignSelf="stretch"
          frameDivAlignSelf="stretch"
          propAlignSelf="stretch"
          propAlignSelf1="stretch"
          propAlignSelf2="stretch"
          propAlignSelf3="stretch"
        />
      </div>
    </section>
  );
};

export default AlbumnameFrame;
