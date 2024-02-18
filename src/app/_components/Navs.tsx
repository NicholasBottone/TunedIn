import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavsType = {
  tunedinLogo?: string;

  /** Style props */
  artistImageTop?: CSSProperties["top"];
  artistImagePosition?: CSSProperties["position"];
  propMargin?: CSSProperties["margin"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const Navs: FunctionComponent<NavsType> = ({
  tunedinLogo,
  artistImageTop,
  artistImagePosition,
  propMargin,
  propFontWeight,
}) => {
  const navsStyle: CSSProperties = useMemo(() => {
    return {
      top: artistImageTop,
      position: artistImagePosition,
    };
  }, [artistImageTop, artistImagePosition]);

  const signInStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propMargin, propFontWeight]);

  return (
    <header
      className="flex-1 bg-gray-200 flex flex-row items-start justify-between pt-[37px] pb-[35px] pr-[30px] pl-[75px] box-border gap-[20px] max-w-full z-[1] text-left text-5xl text-white font-lexend mq750:pl-[37px] mq750:box-border"
      style={navsStyle}
    >
      <div className="w-[1013px] flex flex-row items-center justify-start gap-[74px] max-w-full mq1050:gap-[74px] mq750:gap-[74px]">
        <div className="w-[335px] flex flex-row items-start justify-start gap-[25px] max-w-full">
          <img
            className="h-[68px] w-[76px] relative object-cover"
            alt=""
            src="/appicon@2x.png"
          />
          <div className="h-14 flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src={tunedinLogo}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
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
      </div>
      <div className="w-[239px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start pt-2 pb-[9px] pr-0 pl-[26px] relative gap-[16px]">
          <img
            className="h-6 w-[27px] relative"
            alt=""
            src="/sign-in-button-frame.svg"
          />
          <h2
            className="m-0 h-[34.2px] flex-1 relative text-inherit capitalize font-normal font-inherit flex items-center whitespace-nowrap"
            style={signInStyle}
          >
            Sign In
          </h2>
          <div className="h-[calc(100%_+_2px)] w-[184.6px] absolute my-0 mx-[!important] top-[0px] bottom-[-2px] left-[0px] box-border z-[1] border-[1px] border-solid border-white" />
        </div>
      </div>
    </header>
  );
};

export default Navs;
