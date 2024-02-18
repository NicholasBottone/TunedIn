import React from "react";
import TopHitsComponent from "./_components/TopHitComponent";
import PersonalTopsComponents from "./_components/PersonalTopsComponents";
import LandingPageComponent from "./_components/LandingPageComponent";
import NavsComponent from "./_components/NavsComponent";

import AlbumInfoPage from "./_components/album/AlbumInfoComponent";

const HomePage: FunctionComponent = () => {
  return (
    <>
      <NavsComponent />
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <h1 style={{ color: "white", padding: "10px", marginLeft: "200px" }}>
          Trending Albums
        </h1>
        <TopHitsComponent />
        <h1
          style={{
            color: "white",
            padding: "40px",
            marginLeft: "200px",
            marginTop: "80px",
          }}
        >
          Your Top Albums
        </h1>
        <PersonalTopsComponents />
      </div>

      <LandingPageComponent />
    </>
  );
};

export default HomePage;
