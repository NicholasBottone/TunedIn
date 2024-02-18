import { FunctionComponent } from "react";
import NavsComponent from "./_components/NavsComponent";
import FrameComponent from "./_components/FrameComponent";
import FrameNavs from "./_components/FrameNavs";
import AlbumRowComponenet from "./_components/AlbumRowComponenet";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[191px] box-border gap-[75px] tracking-[normal] text-left text-lg text-white font-lexend mq450:gap-[75px] mq975:gap-[75px]">
      <div className="w-[307px] h-28 my-0 mx-[!important] absolute top-[165px] left-[311px] flex flex-row items-start justify-end py-[27px] px-8 box-border">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[2]">
          <div className="absolute h-[calc(100%_-_12px)] w-[73.29%] top-[5px] right-[4.56%] bottom-[7px] left-[22.15%] rounded-2xl bg-darkslateblue" />
          <img
            className="absolute h-full w-[40.1%] top-[0px] right-[59.9%] bottom-[0px] left-[0%] rounded-71xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="eager"
            alt=""
            src="/artist-image@2x.png"
          />
        </div>
        <div className="h-9 w-[139px] relative capitalize font-semibold inline-block shrink-0 z-[3]">
          justin Beiber
        </div>
      </div>
      <div className="w-[307px] h-28 my-0 mx-[!important] absolute top-[154px] right-[304px] flex flex-row items-start justify-end py-[35px] px-[39px] box-border">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[4]">
          <div className="absolute h-[calc(100%_-_12px)] w-[73.29%] top-[5px] right-[4.56%] bottom-[7px] left-[22.15%] rounded-2xl bg-darkslateblue" />
          <img
            className="absolute h-full w-[40.1%] top-[0px] right-[59.9%] bottom-[0px] left-[0%] rounded-71xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
            alt=""
            src="/artist-image-1@2x.png"
          />
        </div>
        <div className="h-[31px] relative capitalize inline-block z-[5]">
          david brubeck
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start gap-[2px] max-w-full">
        <NavsComponent />
        <FrameComponent />
      </section>
      <section className="w-[1398px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-white font-lexend">
        <div className="w-[1216px] flex flex-col items-end justify-start gap-[61px] max-w-full mq450:gap-[61px] mq725:gap-[61px]">
          <FrameNavs />
          <div className="w-[1090px] flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 w-[847px] h-[84px] relative text-inherit capitalize font-normal font-inherit flex items-center shrink-0 max-w-full mq450:text-5xl mq975:text-13xl">
              What Your Friends are listening To
            </h1>
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
      </section>
    </div>
  );
};

export default HomePage;
