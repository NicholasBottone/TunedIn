import React from "react";
import LandingPageComponent from "~/app/_components/LandingPageComponent";
import NavsComponent from "~/app/_components/NavsComponent";
import { api } from "~/trpc/server";
import AlbumCard, { AlbumCardProps } from "../_components/AlbumCard";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  console.log("paramsq", searchParams.q);
  const searchResults = await api.album.searchAlbum.query({
    query: searchParams.q,
  });
  console.log(searchResults);

  const albumCards: AlbumCardProps[] = searchResults.map((album) => ({
    id: album.id,
    image: album.image!,
    albumName: album.name,
    artistName: album.artist,
  }));

  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <NavsComponent />
        <h1
          style={{
            color: "white",
            marginLeft: "220px",
            backgroundColor: "black",
          }}
        >
          Search Results
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "20px",
            maxWidth: "1100px",
            backgroundColor: "black",
            height: "320vh",
          }}
        >
          {albumCards.map((album, index) => (
            <AlbumCard key={index} {...album} />
          ))}
        </div>
      </>
    </div>
  );
};

export default SearchPage;
