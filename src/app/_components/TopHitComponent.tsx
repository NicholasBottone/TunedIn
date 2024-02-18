import { api } from "~/trpc/server";
import AlbumCard, { AlbumCardProps } from "./AlbumCard";

// top hits array
const TopHitsComponent = async () => {
  const tth = await api.playlist.getPlaylistById.query({
    id: "37i9dQZF1DXcBWIGoYBM5M",
  });

  const albumCards: AlbumCardProps[] = tth.albums
    .slice(0, 10)
    .map((album) => ({
      id: album.id,
      image: album.image!,
      albumName: album.name,
      artistName: album.artist,
    }));

  return (
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
      }}
    >
      {albumCards.map((album, index) => (
        <AlbumCard key={index} {...album} />
      ))}
    </div>
  );
};

export default TopHitsComponent;
