import { type FunctionComponent, useMemo, type CSSProperties } from "react";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
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
      className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] bg-gray-200 pb-[35px] pl-[75px] pr-[30px] pt-[37px] text-left font-lexend text-5xl text-white mq750:box-border mq750:pl-[37px]"
      style={navsStyle}
    >
      <div className="flex w-[1013px] max-w-full flex-row items-center justify-start gap-[74px] mq1050:gap-[74px] mq750:gap-[74px]">
        <Link href="/">
          <div className="flex w-[335px] max-w-full flex-row items-start justify-start gap-[25px]">
            <img
              className="relative h-[68px] w-[76px] object-cover"
              alt=""
              src="/appicon@2x.png"
            />
            <div className="box-border flex h-14 flex-1 flex-col items-start justify-start px-0 pb-0 pt-[3px]">
              <img
                className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden"
                alt=""
                src={tunedinLogo}
              />
            </div>
          </div>
        </Link>
        <div className="box-border flex max-w-full flex-1 flex-col items-start justify-start px-0 pb-[3px] pt-0">
          <div className="box-border flex max-w-full flex-row items-center justify-start gap-[12px] self-stretch rounded-xl bg-darkslategray-100 px-10 py-[15px]">
            <img
              className="relative h-[23px] w-[23px] shrink-0 overflow-hidden"
              alt=""
              src="/empty-space.svg"
            />
            <SearchBar />
          </div>
        </div>
      </div>
      <Link href="/api/auth/signin/spotify">
        <div className="box-border flex w-[239px] flex-col items-start justify-start px-0 pb-0 pt-[5px]">
          <div className="flex flex-row items-center justify-start self-stretch pb-[9px] pl-[26px] pr-0 pt-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <img
              className="relative h-6 w-[27px]"
              alt=""
              src="/login-button-svgrepo-com.svg"
              color="white"
            />
            <h2
              className="font-inherit relative m-0 flex h-[34.2px] flex-1 items-center whitespace-nowrap text-inherit font-normal capitalize"
              style={signInStyle}
            >
              Sign In
            </h2>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Navs;
