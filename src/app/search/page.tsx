import React from "react";
import LandingPageComponent from "~/app/_components/LandingPageComponent";
import NavsComponent from "~/app/_components/NavsComponent";
import { api } from "~/trpc/server";

const SearchPage = async ({ params }: { params: { q: string } }) => {
  const searchResults = await api.album.searchAlbum.query({
    query: params.q,
  });

  return (
    <>
      <NavsComponent />
    </>
  );
};

export default SearchPage;
