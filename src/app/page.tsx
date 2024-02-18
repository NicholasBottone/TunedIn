import { FunctionComponent } from "react";
import NavsComponent from "./_components/NavsComponent";
import ArtistRow from "./_components/ArtistRow";
import AlbumnameFrame from "./_components/AlbumnameFrame";
import LandingPageComponent from "./_components/LandingPageComponent";

import AlbumInfoPage from "./album/AlbumInfoComponent"

AlbumInfoPage
const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-center justify-start gap-[74px] tracking-[normal] text-left text-21xl text-white font-lexend mq450:gap-[74px] mq750:gap-[74px]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[2px] max-w-full">
        <NavsComponent />
        <ArtistRow />
      </section>
      <AlbumnameFrame />
      <h1 className="my-0 mx-[!important] w-[652px] h-[72px] absolute top-[849px] left-[91px] text-inherit capitalize font-extralight font-inherit inline-block mix-blend-darken z-[1] mq450:text-5xl mq1050:text-13xl">
        Rate Your Favrouite Albumn
      </h1>
      <LandingPageComponent />
      <AlbumInfoPage/>
    </div>
  );
};

export default HomePage;
