import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ArtistnameFrameType = {
  trendingAlbums?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
};

const ArtistnameFrame: FunctionComponent<ArtistnameFrameType> = ({
  trendingAlbums,
  propAlignSelf,
  propFlex,
  propGap,
}) => {
  const artistnameFrameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      gap: propGap,
    };
  }, [propAlignSelf, propFlex, propGap]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-21xl text-white font-lexend"
      style={artistnameFrameStyle}
    >
      <div className="w-[650px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <h1 className="m-0 h-[84px] flex-1 relative text-inherit capitalize font-normal font-inherit flex items-center max-w-full mq450:text-5xl mq1050:text-13xl">
          {trendingAlbums}
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[45px] min-h-[269px] text-sm mq750:gap-[45px]">
        <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
          <div className="self-stretch h-[190px] flex flex-col items-center justify-start">
            <img
              className="w-[182px] h-[178px] relative rounded-xl object-cover"
              loading="eager"
              alt=""
              src="/albumphotoplaceholder@2x.png"
            />
          </div>
          <div className="self-stretch h-[21px] flex flex-row flex-wrap items-center justify-center py-0 px-1.5 box-border">
            <div className="flex-1 relative capitalize font-semibold overflow-hidden text-ellipsis whitespace-nowrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Dark Side of The Moon
            </div>
          </div>
          <div className="w-[164px] relative capitalize font-light flex items-end">
            Pink Floyd
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
          <div className="self-stretch h-[190px] flex flex-col items-center justify-start">
            <img
              className="w-[182px] h-[178px] relative rounded-xl object-cover"
              alt=""
              src="/albumphotoplaceholder-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2">
            <div className="flex-1 relative capitalize font-semibold overflow-hidden text-ellipsis whitespace-nowrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              35 Biggest Hits
            </div>
          </div>
          <div className="w-[164px] relative capitalize font-light flex items-end">
            Toby Keith
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
          <div className="self-stretch h-[190px] flex flex-col items-center justify-start">
            <img
              className="w-[182px] h-[178px] relative rounded-xl object-cover"
              alt=""
              src="/albumphotoplaceholder-2@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2">
            <div className="flex-1 relative capitalize font-semibold overflow-hidden text-ellipsis whitespace-nowrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Midnights
            </div>
          </div>
          <div className="w-[164px] relative capitalize font-light flex items-end">
            Taylor Swift
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
          <div className="self-stretch h-[190px] flex flex-col items-center justify-start">
            <img
              className="w-[182px] h-[178px] relative rounded-xl object-cover"
              alt=""
              src="/albumphotoplaceholder-3@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2">
            <div className="flex-1 relative capitalize font-semibold overflow-hidden text-ellipsis whitespace-nowrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Snooze
            </div>
          </div>
          <div className="w-[164px] relative capitalize font-light flex items-end">
            SZA
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
          <div className="self-stretch h-[190px] flex flex-col items-center justify-start">
            <img
              className="w-[182px] h-[178px] relative rounded-xl object-cover"
              alt=""
              src="/albumphotoplaceholder-4@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2">
            <div className="flex-1 relative capitalize font-semibold overflow-hidden text-ellipsis whitespace-nowrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              After Hours
            </div>
          </div>
          <div className="w-[164px] relative capitalize font-light flex items-end">
            The Weekend
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistnameFrame;
