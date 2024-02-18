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
      className="relative h-[265px] max-w-full shrink-0 self-stretch overflow-hidden bg-midnightblue text-left font-lexend text-5xl text-white"
      style={reviewComponentStyle}
    >
      <div className="absolute left-[0px] top-[3px] flex w-[993px] flex-col items-start justify-start gap-[262px]">
        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-white" />
        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-white" />
      </div>
      <img
        className="absolute left-[26px] top-[27px] z-[1] h-[92px] w-[93px] rounded-[50%] object-cover"
        loading="eager"
        alt=""
        src="/user-pfp@2x.png"
      />
      <div className="absolute left-[170px] top-[38px] z-[1] inline-block h-[47px] w-[471px] font-semibold lowercase mq450:text-lgi">
        Jimmy neutron
      </div>
      <div className="absolute right-[64px] top-[85px] z-[1] box-border flex w-[721px] max-w-full flex-row flex-wrap items-center justify-center pb-[22px] pl-2.5 pr-0 pt-[21px] text-xl">
        <div className="relative inline-block h-[100px] max-w-full flex-1 font-light lowercase mq450:text-base">
          Image Tracer allows you to &quot;trace&quot; an image and generate an
          exact copy as a vector shape. This is perfect for removing a
          background, editing the shape/color, or export as an SVG. I often use
          this when creating illustrations or modifying a logo or icon.
        </div>
      </div>
      <div className="absolute left-[601px] top-[38px] z-[2] flex flex-row items-start justify-start gap-[7px] py-0 pl-0 pr-px">
        <img
          className="relative h-[46.1px] min-h-[46px] w-[46.1px]"
          loading="eager"
          alt=""
          src="/star-6.svg"
        />
        <img
          className="relative h-[46.1px] min-h-[46px] w-[46.1px]"
          loading="eager"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="relative h-[46.1px] min-h-[46px] w-[46.1px]"
          loading="eager"
          alt=""
          src="/star-4.svg"
        />
        <img
          className="relative h-[46.1px] min-h-[46px] w-[46.1px]"
          loading="eager"
          alt=""
          src="/star-3.svg"
        />
        <img
          className="relative h-[46.1px] min-h-[46px] w-[46.1px]"
          loading="eager"
          alt=""
          src="/star-2.svg"
        />
      </div>
    </div>
  );
};

export default ReviewComponent;
