import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AlbumRowComponenetType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propAlignSelf5?: CSSProperties["alignSelf"];
};

const AlbumRowComponenet: FunctionComponent<AlbumRowComponenetType> = ({
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
  propAlignSelf3,
  propAlignSelf4,
  propAlignSelf5,
}) => {
  const albumRowComponenetStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const albumRowComponentsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
    };
  }, [propAlignSelf4]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
    };
  }, [propAlignSelf5]);

  return (
    <div
      className="w-[1090px] flex flex-row flex-wrap items-start justify-center gap-[45px] min-h-[269px] max-w-full text-left text-sm text-white font-lexend mq725:gap-[45px]"
      style={albumRowComponenetStyle}
    >
      <div className="flex-1 rounded-xl bg-midnightblue flex flex-col items-center justify-center gap-[4px] min-w-[178px] max-w-[182px]">
        <div
          className="h-[190px] flex flex-col items-center justify-start"
          style={albumRowComponentsStyle}
        >
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
        <div
          className="h-[190px] flex flex-col items-center justify-start"
          style={frameDivStyle}
        >
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
        <div
          className="h-[190px] flex flex-col items-center justify-start"
          style={frameDiv1Style}
        >
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
        <div
          className="h-[190px] flex flex-col items-center justify-start"
          style={frameDiv2Style}
        >
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
        <div
          className="h-[190px] flex flex-col items-center justify-start"
          style={frameDiv3Style}
        >
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
  );
};

export default AlbumRowComponenet;
