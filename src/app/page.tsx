import React from "react";
import TopHitsComponent from "./_components/TopHitComponent";
import PersonalTopsComponents from "./_components/PersonalTopsComponents";
import LandingPageComponent from "./_components/LandingPageComponent";
import NavsComponent from "./_components/NavsComponent";

import AlbumInfoPage from "./_components/album/AlbumInfoComponent";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavsComponent />
      <h1
        style={{
          color: "white",
          marginLeft: "200px",
          backgroundColor: "black",
        }}
      >
        Trending Albums
      </h1>
      <TopHitsComponent />
      <h1
        style={{
          color: "white",
          marginLeft: "200px",
          marginTop: "80px",
        }}
      >
        Your Top Albums
      </h1>
      <PersonalTopsComponents />
    </div>
  );
};

export default HomePage;
