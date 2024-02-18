import { FunctionComponent } from "react";
import NavsFrameInstance from "./NavsFrameInstance";
import AppiconRectangle from "./AppiconRectangle";
import ReviewComponent from "./ReviewComponent";
import LandingPageComponent1 from "./LandingPageComponent1";

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const AlbumInfoPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <div className="flex flex-row items-start justify-start  box-border max-w-full">
      <header
      className="flex-1 bg-gray-200 flex flex-row items-start justify-between pt-[37px] pb-[35px] pr-[30px] pl-[75px] box-border gap-[20px] max-w-full z-[1] text-left text-5xl text-white font-lexend mq750:pl-[37px] mq750:box-border"

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
      
          >
            Sign In
          </h2>
          <div className="h-[calc(100%_+_2px)] w-[184.6px] absolute my-0 mx-[!important] top-[0px] bottom-[-2px] left-[0px] box-border z-[1] border-[1px] border-solid border-white" />
        </div>
      </div>
    </header>
    </div>
      <main className="w-[1466px] flex flex-row items-start justify-start py-0 pr-12 pl-5 box-border max-w-full shrink-0 lg:pr-6 lg:box-border">
        <section className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-13xl text-white font-lexend">
          <AppiconRectangle />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[78px] max-w-full lg:flex-wrap mq750:gap-[78px] mq450:gap-[78px]">
              <div className="w-[365px] flex flex-col items-start justify-start gap-[24px] min-w-[365px] max-w-full lg:flex-1 mq750:min-w-full">
                <div className="w-[356px] h-[60px] relative capitalize font-medium flex items-end shrink-0 max-w-full mq1050:text-7xl mq450:text-lgi">
                  Track List
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-5xl">
                  <div className="self-stretch rounded-sm bg-midnightblue overflow-hidden flex flex-row items-center justify-start py-0 pr-2.5 pl-2 gap-[12px] border-[1px] border-solid border-white mq450:flex-wrap">
                    <div className="h-[45px] w-[54px] relative capitalize font-light flex items-center justify-center shrink-0 mq450:text-lgi">
                      1
                    </div>
                    <div className="h-[72px] flex-1 relative capitalize font-light text-left flex items-center min-w-[106px] mq450:text-lgi">
                      Song Name
                    </div>
                  </div>
                  <div className="self-stretch rounded-sm bg-midnightblue overflow-hidden flex flex-row items-center justify-start py-0 pr-2.5 pl-2 gap-[12px] z-[1] mt-[-1px] border-[1px] border-solid border-white mq450:flex-wrap">
                    <div className="h-[45px] w-[54px] relative capitalize font-light flex items-center justify-center shrink-0 mq450:text-lgi">
                      1
                    </div>
                    <div className="h-[72px] flex-1 relative capitalize font-light text-left flex items-center min-w-[106px] mq450:text-lgi">
                      Song Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[614px] max-w-full mq750:min-w-full">
                <ReviewComponent />
                <ReviewComponent propMarginTop="-3px" />
                <ReviewComponent propMarginTop="-3px" />
                <ReviewComponent propMarginTop="-3px" />
                <ReviewComponent propMarginTop="-3px" />
                <ReviewComponent propMarginTop="-3px" />
                <ReviewComponent propMarginTop="-3px" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch flex flex-row items-start justify-between pt-[57px] pb-[147px] pr-[140px] pl-[95px] box-border relative gap-[20px] max-w-full text-left text-xl text-neutral-900 font-body-xl-medium mq1050:flex-wrap mq750:pl-[47px] mq750:pr-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-darkslategray-200" />
      <div className="flex flex-row items-start justify-start pt-0 pb-[19px] pr-[35px] pl-0 relative gap-[8px] z-[1]">
        <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
          TunedIn is a private product
        </div>
        <div className="absolute my-0 mx-[!important] bottom-[-16.3px] left-[0px] leading-[28px] font-medium text-neutral-500 mq450:text-base mq450:leading-[22px]">
          https://
          <a
            className="text-[inherit]"
            href="https://landify.design/?ref=landifyuikit"
            target="_blank"
          >
            <span className="[text-decoration:underline]">w</span>
          </a>
          ww.tunedin.vercel.app
        </div>
      </div>
      <div className="w-[400px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[32px]">
        <img
          className="h-28 w-[134px] relative object-cover z-[1] mq450:flex-1"
          alt=""
          src="/appicon-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[152px]">
          <img
            className="self-stretch h-[55px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/tunedinlogo-11.svg"
          />
        </div>
      </div>
    </footer>
    </div>

  );
};

export default AlbumInfoPage;
