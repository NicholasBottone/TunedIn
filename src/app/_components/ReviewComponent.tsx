import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ReviewComponentType = {
  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const ReviewComponent: FunctionComponent<ReviewComponentType> = ({
  propMarginTop,
}) => {
  const reviewComponentStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className="self-stretch h-[265px] relative bg-midnightblue overflow-hidden shrink-0 max-w-full text-left text-5xl text-white font-lexend"
      style={reviewComponentStyle}
    >
      <div className="absolute top-[3px] left-[0px] w-[993px] flex flex-col items-start justify-start gap-[262px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
      </div>
      <img
        className="absolute top-[27px] left-[26px] rounded-[50%] w-[93px] h-[92px] object-cover z-[1]"
        loading="eager"
        alt=""
        src="/user-pfp@2x.png"
      />
      <div className="absolute top-[38px] left-[170px] lowercase font-semibold inline-block w-[471px] h-[47px] z-[1] mq450:text-lgi">
        Jimmy neutron
      </div>
      <div className="absolute top-[85px] right-[64px] w-[721px] flex flex-row flex-wrap items-center justify-center pt-[21px] pb-[22px] pr-0 pl-2.5 box-border max-w-full z-[1] text-xl">
        <div className="h-[100px] flex-1 relative lowercase font-light inline-block max-w-full mq450:text-base">
          Image Tracer allows you to "trace" an image and generate an exact copy
          as a vector shape. This is perfect for removing a background, editing
          the shape/color, or export as an SVG. I often use this when creating
          illustrations or modifying a logo or icon.
        </div>
      </div>
      <div className="absolute top-[38px] left-[601px] flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[7px] z-[2]">
        <img
          className="h-[46.1px] w-[46.1px] relative min-h-[46px]"
          loading="eager"
          alt=""
          src="/star-6.svg"
        />
        <img
          className="h-[46.1px] w-[46.1px] relative min-h-[46px]"
          loading="eager"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="h-[46.1px] w-[46.1px] relative min-h-[46px]"
          loading="eager"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="h-[46.1px] w-[46.1px] relative min-h-[46px]"
          loading="eager"
          alt=""
          src="/star-3.svg"
        />
        <img
          className="h-[46.1px] w-[46.1px] relative min-h-[46px]"
          loading="eager"
          alt=""
          src="/star-2.svg"
        />
      </div>
    </div>
  );
};

export default ReviewComponent;
